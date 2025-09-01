import { Router } from 'express';
import { body } from 'express-validator';
import { authenticateToken, requireRole } from '../middleware/auth';
import { UserRole } from 'shared';
import { 
  createExam, 
  getExams, 
  getExam, 
  updateExam, 
  deleteExam,
  startExam,
  submitExam,
  getExamAttempts
} from '../controllers/examController';

const router = Router();

/**
 * @route   POST /api/exams
 * @desc    Create a new exam
 * @access  Private (Teacher, Admin)
 */
router.post('/', [
  authenticateToken,
  requireRole([UserRole.TEACHER, UserRole.ADMIN]),
  body('title').notEmpty().trim(),
  body('description').optional().trim(),
  body('subject').isIn(['mathematics', 'turkish', 'science', 'social_studies', 'english', 'religion']),
  body('duration').isInt({ min: 1 }),
  body('questions').isArray({ min: 1 }),
], createExam);

/**
 * @route   GET /api/exams
 * @desc    Get exams with pagination and filters
 * @access  Private
 */
router.get('/', authenticateToken, getExams);

/**
 * @route   GET /api/exams/:id
 * @desc    Get exam by ID
 * @access  Private
 */
router.get('/:id', authenticateToken, getExam);

/**
 * @route   PUT /api/exams/:id
 * @desc    Update exam
 * @access  Private (Teacher, Admin)
 */
router.put('/:id', [
  authenticateToken,
  requireRole([UserRole.TEACHER, UserRole.ADMIN]),
], updateExam);

/**
 * @route   DELETE /api/exams/:id
 * @desc    Delete exam
 * @access  Private (Teacher, Admin)
 */
router.delete('/:id', [
  authenticateToken,
  requireRole([UserRole.TEACHER, UserRole.ADMIN]),
], deleteExam);

/**
 * @route   POST /api/exams/:id/start
 * @desc    Start an exam attempt
 * @access  Private (Student)
 */
router.post('/:id/start', [
  authenticateToken,
  requireRole([UserRole.STUDENT]),
], startExam);

/**
 * @route   POST /api/exams/:id/submit
 * @desc    Submit exam answers
 * @access  Private (Student)
 */
router.post('/:id/submit', [
  authenticateToken,
  requireRole([UserRole.STUDENT]),
  body('answers').isArray(),
], submitExam);

/**
 * @route   GET /api/exams/:id/attempts
 * @desc    Get exam attempts
 * @access  Private
 */
router.get('/:id/attempts', authenticateToken, getExamAttempts);

export default router;