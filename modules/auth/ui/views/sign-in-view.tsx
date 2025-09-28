/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { EyeIcon, EyeOffIcon, OctagonAlertIcon } from 'lucide-react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '@/lib/utils'

import { Alert, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { signInFormSchema } from '../schemas'

const SignInView = () => {
  const router = useRouter()

  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data: z.infer<typeof signInFormSchema>) => {
    console.log(data)
  }

  return (
    <div className='flex flex-col gap-6'>
      <Card className='overflow-hidden p-0'>
        <CardContent className='grid p-0 lg:grid-cols-2'>
          <Form {...form}>
            <form className='p-6 lg:p-8' onSubmit={form.handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-y-2'>
                  <h1 className='text-3xl font-bold'>Bienvenido de nuevo</h1>
                  <p className='text-muted-foreground text-sm font-medium text-balance md:text-xs'>
                    Inicia sesión en tu cuenta
                  </p>
                </div>

                <div className='grid gap-3'>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem className='grid gap-3'>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            autoFocus
                            type='email'
                            placeholder='m@example.com'
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='grid gap-3'>
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className='relative'>
                            <Input
                              type={showPassword ? 'text' : 'password'}
                              placeholder='********'
                              className='pr-10'
                              {...field}
                            />
                            <Button
                              type='button'
                              variant='ghost'
                              size='sm'
                              className='absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent'
                              onClick={() => setShowPassword(!showPassword)}
                              aria-label={
                                showPassword ? 'Hide password' : 'Show password'
                              }
                            >
                              {showPassword ? (
                                <EyeOffIcon className='h-4 w-4' />
                              ) : (
                                <EyeIcon className='h-4 w-4' />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {!!error && (
                  <Alert
                    variant='destructive'
                    className='bg-destructive/10 border-none text-sm'
                  >
                    <OctagonAlertIcon className='h-4 w-4' />
                    <AlertTitle>{error}</AlertTitle>
                  </Alert>
                )}

                <Button
                  type='submit'
                  className='w-full bg-orange-400 hover:bg-orange-400/90'
                  disabled={pending}
                >
                  {pending ? 'Iniciando sesión...' : 'Iniciar sesión'}
                </Button>

                <div className='text-center text-sm'>
                  <p className='text-muted-foreground'>
                    ¿No tienes una cuenta?{' '}
                    <Link
                      href='/sign-up'
                      className={cn(
                        'font-medium text-orange-600',
                        pending && 'pointer-events-none'
                      )}
                    >
                      Regístrate
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </Form>

          <div className='relative hidden flex-col items-center justify-center gap-y-4 bg-radial from-orange-50 to-orange-500 lg:flex'>
            <p className='text-2xl font-semibold text-black'>dumi</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export { SignInView }
