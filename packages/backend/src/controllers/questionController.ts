import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { Question, CreateQuestionRequest, ApiResponse, PaginatedResponse } from 'shared';

interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

// Mock database - in production, this would be replaced with actual database calls
const questions: Question[] = [];

export const createQuestion = async (req: AuthRequest, res: Response<ApiResponse<Question>>) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        message: errors.array().map(err => err.msg).join(', '),
      });
    }

    const questionData: CreateQuestionRequest = req.body;

    const question: Question = {
      id: Date.now().toString(),
      ...questionData,
      options: questionData.options?.map(option => ({
        ...option,
        id: Date.now().toString() + Math.random(),
      })),
      createdBy: req.user!.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    questions.push(question);

    res.status(201).json({
      success: true,
      data: question,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const getQuestions = async (req: Request, res: Response<ApiResponse<PaginatedResponse<Question>>>) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const subject = req.query.subject as string;
    const difficulty = req.query.difficulty as string;
    const type = req.query.type as string;

    let filteredQuestions = questions;

    if (subject) {
      filteredQuestions = filteredQuestions.filter(q => q.subject === subject);
    }
    if (difficulty) {
      filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
    }
    if (type) {
      filteredQuestions = filteredQuestions.filter(q => q.type === type);
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedQuestions = filteredQuestions.slice(startIndex, endIndex);

    res.json({
      success: true,
      data: {
        data: paginatedQuestions,
        total: filteredQuestions.length,
        page,
        limit,
        totalPages: Math.ceil(filteredQuestions.length / limit),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const getQuestion = async (req: Request, res: Response<ApiResponse<Question>>) => {
  try {
    const { id } = req.params;
    const question = questions.find(q => q.id === id);

    if (!question) {
      return res.status(404).json({
        success: false,
        error: 'Question not found',
      });
    }

    res.json({
      success: true,
      data: question,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const updateQuestion = async (req: AuthRequest, res: Response<ApiResponse<Question>>) => {
  try {
    const { id } = req.params;
    const questionIndex = questions.findIndex(q => q.id === id);

    if (questionIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Question not found',
      });
    }

    // Check if user owns the question or is admin
    if (questions[questionIndex].createdBy !== req.user!.id && req.user!.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to update this question',
      });
    }

    questions[questionIndex] = {
      ...questions[questionIndex],
      ...req.body,
      updatedAt: new Date(),
    };

    res.json({
      success: true,
      data: questions[questionIndex],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const deleteQuestion = async (req: AuthRequest, res: Response<ApiResponse>) => {
  try {
    const { id } = req.params;
    const questionIndex = questions.findIndex(q => q.id === id);

    if (questionIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Question not found',
      });
    }

    // Check if user owns the question or is admin
    if (questions[questionIndex].createdBy !== req.user!.id && req.user!.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to delete this question',
      });
    }

    questions.splice(questionIndex, 1);

    res.json({
      success: true,
      message: 'Question deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};