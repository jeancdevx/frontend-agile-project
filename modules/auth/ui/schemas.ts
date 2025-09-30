import { z } from 'zod'

export const signInFormSchema = z.object({
  email: z.email().min(1, 'El email es obligatorio'),
  password: z.string().min(1, 'La contraseña es obligatoria')
})

export type SignInFormValues = z.infer<typeof signInFormSchema>
