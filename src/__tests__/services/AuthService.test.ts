// backend/src/__tests__/services/AuthService.test.ts
import { AuthService } from '../../application/auth/AuthService';

// Mock de bcrypt y jwt
jest.mock('bcrypt', () => ({
  compare: jest.fn()
}));

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn()
}));

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

describe('AuthService', () => {
  let authService: AuthService;
  let mockUsuarioRepo: any;

  beforeEach(() => {
    mockUsuarioRepo = {
      findByEmail: jest.fn()
    };

    authService = new AuthService(mockUsuarioRepo);
    jest.clearAllMocks();
  });

  describe('login', () => {
    test('should login successfully with valid credentials', async () => {
      const email = 'juan@test.com';
      const password = 'password123';
      const mockUsuario = {
        id: 1,
        nombre: 'Juan',
        email,
        password_hash: '$2b$10$hashedpassword'
      };
      const expectedToken = 'jwt.token.here';

      mockUsuarioRepo.findByEmail.mockResolvedValue(mockUsuario);
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue(expectedToken);

      const token = await authService.login(email, password);

      expect(mockUsuarioRepo.findByEmail).toHaveBeenCalledWith(email);
      expect(bcrypt.compare).toHaveBeenCalled();
      expect(jwt.sign).toHaveBeenCalled();
      expect(token).toBe(expectedToken);
    });

    test('should throw error when user not found', async () => {
      mockUsuarioRepo.findByEmail.mockResolvedValue(null);

      await expect(authService.login('notfound@test.com', 'password'))
        .rejects
        .toThrow('Usuario o contraseña inválidos');
    });

    test('should throw error when password is invalid', async () => {
      const mockUsuario = {
        id: 1,
        email: 'juan@test.com',
        password_hash: '$2b$10$hashedpassword'
      };

      mockUsuarioRepo.findByEmail.mockResolvedValue(mockUsuario);
      bcrypt.compare.mockResolvedValue(false);

      await expect(authService.login('juan@test.com', 'wrongpassword'))
        .rejects
        .toThrow('Usuario o contraseña inválidos');
    });
  });
});