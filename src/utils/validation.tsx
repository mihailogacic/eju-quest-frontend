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
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])/,
        'Password must contain letters, numbers, and special characters.'
      ),
    confirm_password: z.string().min(8, 'Confirm password must match'),
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
    new_password: z.string().min(6, 'Password must be at least 6 characters'),
    confirm_new_password: z.string().min(6, 'Confirm password must match'),
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'],
  });

export const addChildrenSchema = z
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

export const lessonSummarySchema = z.object({
  summary: z
    .string()
    .min(10, 'Summary must be at least 10 characters')
    .nonempty('Summary is required'),
});

export const topicDetailsSchema = z.object({
  topic_name: z.string().min(1, 'Topic name is required'),
  age_level: z
    .string()
    .min(1, 'Age level is required')
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: 'Age level must be a number',
    })
    .refine((val) => val >= 4 && val <= 18, {
      message: 'Age level must be between 4 and 18',
    }),
  lesson_length: z
    .string()
    .min(1, 'Lesson length is required')
    .transform((val) => val.toLowerCase())
    .refine(
      (val) => ['short', 'medium', 'long'].includes(val),
      'Lesson length must be short, medium, or long'
    ),
});

export const updateProfileSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email format'),
  profile_picture: z.string().optional(),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;
export type RegisterFormInputs = z.infer<typeof registerSchema>;
export type ResetPasswordFormInputs = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordFormInputs = z.infer<typeof changePasswordSchema>;
export type AddChildrenFormInputs = z.infer<typeof addChildrenSchema>;
export type LessonSummaryInputs = z.infer<typeof lessonSummarySchema>;
export type TopicDetailsInputs = z.infer<typeof topicDetailsSchema>;
export type UpdateProfileInputs = z.infer<typeof updateProfileSchema>;
