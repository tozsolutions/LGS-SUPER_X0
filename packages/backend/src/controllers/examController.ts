import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { Exam, ExamAttempt, ApiResponse, PaginatedResponse } from 'shared';

interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

// Mock database - in production, this would be replaced with actual database calls
const exams: Exam[] = [];
const examAttempts: ExamAttempt[] = [];

export const createExam = async (req: AuthRequest, res: Response<ApiResponse<Exam>>) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: errors.array().map(err => err.msg).join(', '),
      });
    }

    const { title, description, subject, duration, questions, isPublic, scheduledAt } = req.body;

    const exam: Exam = {
      id: Date.now().toString(),
      title,
      description: description || '',
      subject,
      duration,
      questions,
      totalPoints: questions.reduce((sum: number, q: any) => sum + q.points, 0),
      isPublic: isPublic || false,
      createdBy: req.user!.id,
      createdAt: new Date(),
      scheduledAt: scheduledAt ? new Date(scheduledAt) : undefined,
    };

    exams.push(exam);

    res.status(201).json({
      success: true,
      data: exam,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const getExams = async (req: Request, res: Response<ApiResponse<PaginatedResponse<Exam>>>) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const subject = req.query.subject as string;

    let filteredExams = exams.filter(exam => exam.isPublic);

    if (subject) {
      filteredExams = filteredExams.filter(exam => exam.subject === subject);
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedExams = filteredExams.slice(startIndex, endIndex);

    res.json({
      success: true,
      data: {
        data: paginatedExams,
        total: filteredExams.length,
        page,
        limit,
        totalPages: Math.ceil(filteredExams.length / limit),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const getExam = async (req: Request, res: Response<ApiResponse<Exam>>) => {
  try {
    const { id } = req.params;
    const exam = exams.find(e => e.id === id);

    if (!exam) {
      return res.status(404).json({
        success: false,
        error: 'Exam not found',
      });
    }

    res.json({
      success: true,
      data: exam,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const updateExam = async (req: AuthRequest, res: Response<ApiResponse<Exam>>) => {
  try {
    const { id } = req.params;
    const examIndex = exams.findIndex(e => e.id === id);

    if (examIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Exam not found',
      });
    }

    // Check if user owns the exam or is admin
    if (exams[examIndex].createdBy !== req.user!.id && req.user!.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to update this exam',
      });
    }

    exams[examIndex] = {
      ...exams[examIndex],
      ...req.body,
    };

    res.json({
      success: true,
      data: exams[examIndex],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const deleteExam = async (req: AuthRequest, res: Response<ApiResponse>) => {
  try {
    const { id } = req.params;
    const examIndex = exams.findIndex(e => e.id === id);

    if (examIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Exam not found',
      });
    }

    // Check if user owns the exam or is admin
    if (exams[examIndex].createdBy !== req.user!.id && req.user!.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to delete this exam',
      });
    }

    exams.splice(examIndex, 1);

    res.json({
      success: true,
      message: 'Exam deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const startExam = async (req: AuthRequest, res: Response<ApiResponse<ExamAttempt>>) => {
  try {
    const { id } = req.params;
    const exam = exams.find(e => e.id === id);

    if (!exam) {
      return res.status(404).json({
        success: false,
        error: 'Exam not found',
      });
    }

    // Check if user already has an active attempt
    const existingAttempt = examAttempts.find(
      a => a.examId === id && a.userId === req.user!.id && !a.submittedAt
    );

    if (existingAttempt) {
      return res.status(400).json({
        success: false,
        error: 'You already have an active attempt for this exam',
      });
    }

    const attempt: ExamAttempt = {
      id: Date.now().toString(),
      examId: id,
      userId: req.user!.id,
      answers: [],
      startedAt: new Date(),
      timeSpent: 0,
    };

    examAttempts.push(attempt);

    res.status(201).json({
      success: true,
      data: attempt,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const submitExam = async (req: AuthRequest, res: Response<ApiResponse<ExamAttempt>>) => {
  try {
    const { id } = req.params;
    const { answers } = req.body;

    const attemptIndex = examAttempts.findIndex(
      a => a.examId === id && a.userId === req.user!.id && !a.submittedAt
    );

    if (attemptIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'No active attempt found for this exam',
      });
    }

    const attempt = examAttempts[attemptIndex];
    const exam = exams.find(e => e.id === id);

    if (!exam) {
      return res.status(404).json({
        success: false,
        error: 'Exam not found',
      });
    }

    // Calculate score
    let totalScore = 0;
    const processedAnswers = answers.map((answer: any) => {
      const question = exam.questions.find(q => q.id === answer.questionId);
      const isCorrect = question ? question.correctAnswer === answer.answer : false;
      const points = isCorrect ? question?.points || 0 : 0;
      totalScore += points;

      return {
        questionId: answer.questionId,
        answer: answer.answer,
        isCorrect,
        points,
      };
    });

    examAttempts[attemptIndex] = {
      ...attempt,
      answers: processedAnswers,
      submittedAt: new Date(),
      score: totalScore,
      timeSpent: Math.floor((new Date().getTime() - attempt.startedAt.getTime()) / 1000),
    };

    res.json({
      success: true,
      data: examAttempts[attemptIndex],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const getExamAttempts = async (req: Request, res: Response<ApiResponse<ExamAttempt[]>>) => {
  try {
    const { id } = req.params;
    const attempts = examAttempts.filter(a => a.examId === id);

    res.json({
      success: true,
      data: attempts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};