export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin',
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface Question {
  id: string;
  title: string;
  content: string;
  type: QuestionType;
  subject: Subject;
  difficulty: Difficulty;
  options?: QuestionOption[];
  correctAnswer: string;
  explanation?: string;
  points: number;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum QuestionType {
  MULTIPLE_CHOICE = 'multiple_choice',
  TRUE_FALSE = 'true_false',
  FILL_BLANK = 'fill_blank',
  ESSAY = 'essay',
}

export enum Subject {
  MATHEMATICS = 'mathematics',
  TURKISH = 'turkish',
  SCIENCE = 'science',
  SOCIAL_STUDIES = 'social_studies',
  ENGLISH = 'english',
  RELIGION = 'religion',
}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  subject: Subject;
  duration: number; // in minutes
  questions: Question[];
  totalPoints: number;
  isPublic: boolean;
  createdBy: string;
  createdAt: Date;
  scheduledAt?: Date;
}

export interface ExamAttempt {
  id: string;
  examId: string;
  userId: string;
  answers: ExamAnswer[];
  startedAt: Date;
  submittedAt?: Date;
  score?: number;
  timeSpent: number; // in seconds
}

export interface ExamAnswer {
  questionId: string;
  answer: string;
  isCorrect: boolean;
  points: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface CreateQuestionRequest {
  title: string;
  content: string;
  type: QuestionType;
  subject: Subject;
  difficulty: Difficulty;
  options?: Omit<QuestionOption, 'id'>[];
  correctAnswer: string;
  explanation?: string;
  points: number;
}