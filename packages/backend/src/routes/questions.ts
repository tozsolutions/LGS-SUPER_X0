import { Router } from 'express';
import { body } from 'express-validator';
import { authenticateToken, requireRole } from '../middleware/auth';
import { UserRole } from 'shared';
import { 
  createQuestion, 
  getQuestions, 
  getQuestion, 
  updateQuestion, 
  deleteQuestion 
} from '../controllers/questionController';

const router = Router();

/**
 * @route   POST /api/questions
 * @desc    Create a new question
 * @access  Private (Teacher, Admin)
 */
router.post('/', [
  authenticateToken,
  requireRole([UserRole.TEACHER, UserRole.ADMIN]),
  body('title').notEmpty().trim(),
  body('content').notEmpty().trim(),
  body('type').isIn(['multiple_choice', 'true_false', 'fill_blank', 'essay']),
  body('subject').isIn(['mathematics', 'turkish', 'science', 'social_studies', 'english', 'religion']),
  body('difficulty').isIn(['easy', 'medium', 'hard']),
  body('correctAnswer').notEmpty(),
  body('points').isInt({ min: 1 }),
], createQuestion);

/**
 * @route   GET /api/questions
 * @desc    Get questions with pagination and filters
 * @access  Private
 */
router.get('/', authenticateToken, getQuestions);

/**
 * @route   GET /api/questions/:id
 * @desc    Get question by ID
 * @access  Private
 */
router.get('/:id', authenticateToken, getQuestion);

/**
 * @route   PUT /api/questions/:id
 * @desc    Update question
 * @access  Private (Teacher, Admin)
 */
router.put('/:id', [
  authenticateToken,
  requireRole([UserRole.TEACHER, UserRole.ADMIN]),
], updateQuestion);

/**
 * @route   DELETE /api/questions/:id
 * @desc    Delete question
 * @access  Private (Teacher, Admin)
 */
router.delete('/:id', [
  authenticateToken,
  requireRole([UserRole.TEACHER, UserRole.ADMIN]),
], deleteQuestion);

export default router;