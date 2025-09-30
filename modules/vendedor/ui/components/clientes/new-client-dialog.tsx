'use client'

import ResponsiveDialog from '@/components/responsive-dialog'

import ClientesForm from './clientes-form'

interface NewClientDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const NewClientDialog = ({ open, onOpenChange }: NewClientDialogProps) => {
  return (
    <ResponsiveDialog
      title='Nuevo Cliente'
      description='Crea un nuevo cliente'
      open={open}
      onOpenChange={onOpenChange}
    >
      <ClientesForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  )
}

export default NewClientDialog
