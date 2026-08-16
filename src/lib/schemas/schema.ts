import { z } from 'zod';


export const registrationSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;

// Login schema: only username and password are required for logging in
export const loginSchema = registrationSchema.pick({
  username: true,
  password: true,
});

export type LoginFormData = z.infer<typeof loginSchema>;

// export const registerSchema = loginSchema.extend({
//   email: z.string().email('Enter a valid email address'),
// });