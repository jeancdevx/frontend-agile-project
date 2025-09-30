'use client'

import { useState } from 'react'

import { PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import NewClientDialog from './new-customer-dialog'

const CustomerHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <NewClientDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />

      <div className='flex flex-col gap-y-4 p-4 md:px-8'>
        <div className='flex items-center justify-between'>
          <h5 className='text-2xl font-semibold'>Mis Clientes</h5>

          <Button
            className='font-semibold'
            onClick={() => setIsDialogOpen(true)}
          >
            Crear Cliente <PlusIcon />
          </Button>
        </div>
      </div>
    </>
  )
}

export default CustomerHeader
