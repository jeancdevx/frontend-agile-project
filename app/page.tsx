interface HomeProps {
  params: { locale: string }
}

export default function Home({ params }: HomeProps) {
  return (
    <h1 className='text-3xl font-bold underline'>Hello {params.locale}!</h1>
  )
}
