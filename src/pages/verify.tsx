import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// 1. Define your validation schema using Zod
const signUpSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username cannot exceed 20 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters'),
});

// 2. Extract the TypeScript type from the Zod schema
type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  // 3. Initialize useForm with the zodResolver and default values
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  // 4. Handle valid form submissions
  const onSubmit = async (data: SignUpFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form Submitted Successfully:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      {/* Username Field */}
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input id="username" {...register('username')} />
        {errors.username && <p className="error-text">{errors.username.message}</p>}
      </div>

      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register('email')} />
        {errors.email && <p className="error-text">{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register('password')} />
        {errors.password && <p className="error-text">{errors.password.message}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Sign Up'}
      </button>
    </form>
  );
}