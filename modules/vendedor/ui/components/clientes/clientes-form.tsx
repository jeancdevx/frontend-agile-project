/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { GeneratedAvatar } from '@/components/generated-avatar'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { clienteSchema, FormValues } from '../../schemas'

interface ClientesFormProps {
  // initialValues?: AgentGetOne
  onSuccess?: () => void
  onCancel?: () => void
}

const ClientesForm = ({ onSuccess, onCancel }: ClientesFormProps) => {
  const [isPending, setIsPending] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(clienteSchema),
    defaultValues: {
      nombres: '',
      apellidos: '',
      referido: '',
      telefono: ''
    }
  })

  const onSubmit = async (values: FormValues) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-4'
      >
        <div className='flex items-center justify-center'>
          <GeneratedAvatar
            seed={form.watch('nombres') || 'New Agent'}
            variant='botttsNeutral'
            className='size-16 border'
          />
        </div>

        <FormField
          control={form.control}
          name='nombres'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombres</FormLabel>
              <FormControl>
                <Input placeholder='Eduardo Javier' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='apellidos'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellidos</FormLabel>
              <FormControl>
                <Input placeholder='Mamani Azabache' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='referido'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Referido</FormLabel>
              <FormControl>
                <Input placeholder='Referido (opcional)' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='telefono'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input placeholder='ej. 987654321' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex justify-end gap-2'>
          <Button
            variant='ghost'
            type='button'
            onClick={() => onCancel?.()}
            disabled={isPending}
          >
            Cancelar
          </Button>
          <Button type='submit' disabled={isPending}>
            {isPending ? 'Guardando...' : 'Crear Cliente'}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ClientesForm
