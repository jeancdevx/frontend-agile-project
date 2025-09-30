import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'

interface ProductCardProps {
  name: string
  gender: string
  price: number
  image: string
}

const ProductCard = ({ name, gender, price, image }: ProductCardProps) => {
  return (
    <Card className='border-border hover:border-primary overflow-hidden transition-colors'>
      <div className='bg-muted relative aspect-[3/4] overflow-hidden'>
        <Image
          src={image || '/placeholder.svg'}
          alt={name}
          fill
          className='object-cover'
        />
      </div>
      <CardContent className='p-2'>
        <p className='text-primary/70 mb-0.5 text-[10px] font-medium tracking-wider uppercase'>
          {gender}
        </p>
        <h3 className='text-foreground mb-1 line-clamp-2 text-xs leading-tight font-medium'>
          {name}
        </h3>
        <span className='text-accent text-sm font-bold'>
          ${price.toLocaleString()}
        </span>
      </CardContent>
    </Card>
  )
}
export { ProductCard }
