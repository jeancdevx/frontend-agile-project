import { z } from 'zod'

const phoneRegex = /^\+?51\d{9}$|^9\d{8}$/

export const clienteSchema = z.object({
  nombres: z.string().min(1, 'Nombres es requerido'),
  apellidos: z.string().min(1, 'Apellidos es requerido'),
  referido: z.string().optional(),
  telefono: z
    .string()
    .min(1, 'Teléfono es requerido')
    .regex(phoneRegex, 'Teléfono no válido (ej: +51987654321 o 987654321)')
})

export type FormValues = z.infer<typeof clienteSchema>
