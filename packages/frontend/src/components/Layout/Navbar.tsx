'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/store/authStore';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary-600">
                LGS SUPER X0
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/exams" className="text-secondary-700 hover:text-primary-600 transition-colors">
              Sınavlar
            </Link>
            <Link href="/questions" className="text-secondary-700 hover:text-primary-600 transition-colors">
              Sorular
            </Link>
            {isAuthenticated ? (
              <>
                <Link href="/dashboard" className="text-secondary-700 hover:text-primary-600 transition-colors">
                  Panel
                </Link>
                <div className="flex items-center space-x-4">
                  <span className="text-secondary-700">
                    Merhaba, {user?.firstName}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="btn-secondary"
                  >
                    Çıkış Yap
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/auth/login" className="text-secondary-700 hover:text-primary-600 transition-colors">
                  Giriş Yap
                </Link>
                <Link href="/auth/register" className="btn-primary">
                  Kayıt Ol
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-secondary-200">
              <Link
                href="/exams"
                className="block px-3 py-2 text-secondary-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Sınavlar
              </Link>
              <Link
                href="/questions"
                className="block px-3 py-2 text-secondary-700 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                Sorular
              </Link>
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-secondary-700 hover:text-primary-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Panel
                  </Link>
                  <div className="px-3 py-2">
                    <p className="text-secondary-700 mb-2">
                      Merhaba, {user?.firstName}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="btn-secondary w-full"
                    >
                      Çıkış Yap
                    </button>
                  </div>
                </>
              ) : (
                <div className="px-3 py-2 space-y-2">
                  <Link
                    href="/auth/login"
                    className="block btn-secondary text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Giriş Yap
                  </Link>
                  <Link
                    href="/auth/register"
                    className="block btn-primary text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Kayıt Ol
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};