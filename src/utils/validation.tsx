import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z
  .object({
    first_name: z.string().min(2, 'First name must be at least 2 characters'),
    last_name: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Invalid email format').min(1, 'Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirm_password: z.string().min(6, 'Confirm password must match'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });

export const resetPasswordSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
});

export const changePasswordSchema = z
  .object({
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirm_password: z.string().min(6, 'Confirm password must match'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });

export const adminParentSchema = z.object({
  first_name: z.string().min(2, 'First name must be at least 2 characters'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const newTopicSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  file: z
    .instanceof(File, { message: 'Image is required' })
    .refine(
      (file) => ['image/jpeg', 'image/png', 'image/gif'].includes(file.type),
      {
        message: 'Only .jpg, .jpeg, .png, or .gif formats are allowed',
      }
    ),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;
export type RegisterFormInputs = z.infer<typeof registerSchema>;
export type ResetPasswordFormInputs = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordFormInputs = z.infer<typeof changePasswordSchema>;
export type AdminParentFormInputs = z.infer<typeof adminParentSchema>;
export type NewTopicFormInputs = z.infer<typeof newTopicSchema>;
