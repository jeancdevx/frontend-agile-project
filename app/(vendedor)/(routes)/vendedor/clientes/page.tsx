import VendedorClientesHeader from '@/modules/vendedor/ui/components/clientes/clientes-header'
import { VendedorClientesView } from '@/modules/vendedor/ui/views/vendedor-clientes-view'

export default function VendedorClientesPage() {
  return (
    <>
      <VendedorClientesHeader />

      <VendedorClientesView />
    </>
  )
}
