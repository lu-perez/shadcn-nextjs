import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="grid place-items-center h-screen">
      <Button>Click me</Button>

      <Button
        size='lg'
        variant='destructive'
      >Click me</Button>
    </main>
  )
}
