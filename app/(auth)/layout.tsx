interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className='mx-auto flex min-h-svh max-w-5xl items-center justify-center'>
      {children}
    </main>
  )
}
