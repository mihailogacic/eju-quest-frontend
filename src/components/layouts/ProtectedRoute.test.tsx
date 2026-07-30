import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import useAuthStore from '../../store/auth-store';

const parent = {
  id: 1,
  first_name: 'Peter',
  last_name: 'Smith',
  email: 'parent@example.com',
  role: 'parent',
};

const child = {
  ...parent,
  id: 2,
  email: 'child@example.com',
  role: 'child',
};

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path='/sign-in' element={<div>Login</div>} />
        <Route path='/' element={<div>Home</div>} />
        <Route
          path='*'
          element={
            <ProtectedRoute>
              <div>Protected content</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </MemoryRouter>
  );

describe('ProtectedRoute', () => {
  beforeEach(() => {
    useAuthStore.setState({
      user: null,
      isAuthenticated: false,
      isSessionReady: true,
      token: null,
    });
  });

  it('waits for session restoration before redirecting', () => {
    useAuthStore.setState({ isSessionReady: false });
    renderAt('/admin');
    expect(screen.getByLabelText('Checking session')).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
  });

  it('redirects an unauthenticated user to login', () => {
    renderAt('/admin');
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('allows a parent to access a parent route', () => {
    useAuthStore.setState({ user: parent, isAuthenticated: true });
    renderAt('/admin');
    expect(screen.getByText('Protected content')).toBeInTheDocument();
  });

  it('prevents a parent from accessing a child route', () => {
    useAuthStore.setState({ user: parent, isAuthenticated: true });
    renderAt('/explore-topics');
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('allows a child to access a child route', () => {
    useAuthStore.setState({ user: child, isAuthenticated: true });
    renderAt('/quiz/12');
    expect(screen.getByText('Protected content')).toBeInTheDocument();
  });

  it('prevents a child from accessing a parent route', () => {
    useAuthStore.setState({ user: child, isAuthenticated: true });
    renderAt('/add-topic');
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
