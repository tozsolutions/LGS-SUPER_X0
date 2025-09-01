import { Request, Response } from 'express';
import { ApiResponse, User } from 'shared';

interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

// Mock database - in production, this would be replaced with actual database calls
const users: any[] = [];

export const getProfile = async (req: AuthRequest, res: Response<ApiResponse<User>>) => {
  try {
    const user = users.find(u => u.id === req.user?.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }

    const { password: _, ...userWithoutPassword } = user;

    res.json({
      success: true,
      data: userWithoutPassword,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const updateProfile = async (req: AuthRequest, res: Response<ApiResponse<User>>) => {
  try {
    const userIndex = users.findIndex(u => u.id === req.user?.id);
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }

    const { firstName, lastName } = req.body;
    
    users[userIndex] = {
      ...users[userIndex],
      firstName: firstName || users[userIndex].firstName,
      lastName: lastName || users[userIndex].lastName,
      updatedAt: new Date(),
    };

    const { password: _, ...userWithoutPassword } = users[userIndex];

    res.json({
      success: true,
      data: userWithoutPassword,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const usersWithoutPasswords = users.map(user => {
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    const paginatedUsers = usersWithoutPasswords.slice(startIndex, endIndex);

    res.json({
      success: true,
      data: {
        data: paginatedUsers,
        total: users.length,
        page,
        limit,
        totalPages: Math.ceil(users.length / limit),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }

    users.splice(userIndex, 1);

    res.json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
};