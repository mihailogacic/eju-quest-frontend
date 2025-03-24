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

export const addChildrenSchema = z.object({
  first_name: z.string().min(2, 'First name must be at least 2 characters'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const lessonSummarySchema = z.object({
  summary: z
    .string()
    .min(10, 'Summary must be at least 10 characters')
    .nonempty('Summary is required'),
});

export const topicDetailsSchema = z.object({
  topic_name: z.string().min(2, 'Topic name is required'),
  age_level: z.string().min(1, 'Age level is required'),
  lesson_length: z.string().min(1, 'Lesson length is required'),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;
export type RegisterFormInputs = z.infer<typeof registerSchema>;
export type ResetPasswordFormInputs = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordFormInputs = z.infer<typeof changePasswordSchema>;
export type AddChildrenFormInputs = z.infer<typeof addChildrenSchema>;
export type LessonSummaryInputs = z.infer<typeof lessonSummarySchema>;
export type TopicDetailsInputs = z.infer<typeof topicDetailsSchema>;
