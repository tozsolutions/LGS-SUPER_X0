'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAuth } from '@/store/authStore';
import { UserRole } from 'shared';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface RegisterFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register: registerUser, isLoading } = useAuth();
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const password = watch('password');

  const onSubmit = async (data: RegisterFormData) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Şifreler eşleşmiyor');
      return;
    }

    try {
      await registerUser({
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        password: data.password,
        role: data.role,
      });
      toast.success('Başarıyla kayıt oldunuz!');
      router.push('/dashboard');
    } catch (error) {
      // Error is already handled by the API interceptor
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="text-3xl font-bold text-primary-600">
            LGS SUPER X0
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-secondary-800">
            Hesap Oluşturun
          </h2>
          <p className="mt-2 text-sm text-secondary-600">
            Zaten hesabınız var mı?{' '}
            <Link href="/auth/login" className="text-primary-600 hover:text-primary-500">
              Giriş yapın
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700">
                  Ad
                </label>
                <input
                  {...register('firstName', {
                    required: 'Ad gereklidir',
                    minLength: {
                      value: 2,
                      message: 'Ad en az 2 karakter olmalıdır',
                    },
                  })}
                  type="text"
                  className="mt-1 block w-full input-field"
                  placeholder="Adınız"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700">
                  Soyad
                </label>
                <input
                  {...register('lastName', {
                    required: 'Soyad gereklidir',
                    minLength: {
                      value: 2,
                      message: 'Soyad en az 2 karakter olmalıdır',
                    },
                  })}
                  type="text"
                  className="mt-1 block w-full input-field"
                  placeholder="Soyadınız"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-secondary-700">
                Kullanıcı Adı
              </label>
              <input
                {...register('username', {
                  required: 'Kullanıcı adı gereklidir',
                  minLength: {
                    value: 3,
                    message: 'Kullanıcı adı en az 3 karakter olmalıdır',
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_]+$/,
                    message: 'Kullanıcı adı sadece harf, rakam ve alt çizgi içerebilir',
                  },
                })}
                type="text"
                className="mt-1 block w-full input-field"
                placeholder="kullaniciadi"
              />
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                E-posta Adresi
              </label>
              <input
                {...register('email', {
                  required: 'E-posta adresi gereklidir',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Geçerli bir e-posta adresi girin',
                  },
                })}
                type="email"
                className="mt-1 block w-full input-field"
                placeholder="ornek@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-secondary-700">
                Hesap Türü
              </label>
              <select
                {...register('role', {
                  required: 'Hesap türü seçmelisiniz',
                })}
                className="mt-1 block w-full input-field"
              >
                <option value="">Hesap türünü seçin</option>
                <option value={UserRole.STUDENT}>Öğrenci</option>
                <option value={UserRole.TEACHER}>Öğretmen</option>
              </select>
              {errors.role && (
                <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-secondary-700">
                Şifre
              </label>
              <div className="mt-1 relative">
                <input
                  {...register('password', {
                    required: 'Şifre gereklidir',
                    minLength: {
                      value: 8,
                      message: 'Şifre en az 8 karakter olmalıdır',
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                      message: 'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir',
                    },
                  })}
                  type={showPassword ? 'text' : 'password'}
                  className="block w-full input-field pr-10"
                  placeholder="Güçlü bir şifre oluşturun"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-secondary-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-secondary-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary-700">
                Şifre Onayı
              </label>
              <div className="mt-1 relative">
                <input
                  {...register('confirmPassword', {
                    required: 'Şifre onayı gereklidir',
                    validate: (value) =>
                      value === password || 'Şifreler eşleşmiyor',
                  })}
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="block w-full input-field pr-10"
                  placeholder="Şifrenizi tekrar girin"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-secondary-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-secondary-400" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Kayıt oluşturuluyor...' : 'Kayıt Ol'}
          </button>

          <p className="text-xs text-secondary-600 text-center">
            Kayıt olarak{' '}
            <Link href="/terms" className="text-primary-600 hover:text-primary-500">
              Kullanım Şartları
            </Link>
            {' '}ve{' '}
            <Link href="/privacy" className="text-primary-600 hover:text-primary-500">
              Gizlilik Politikası
            </Link>
            'nı kabul etmiş olursunuz.
          </p>
        </form>
      </div>
    </div>
  );
}