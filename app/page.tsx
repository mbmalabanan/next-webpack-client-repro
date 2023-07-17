import Image from 'next/image'
import Entry from './Entry'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Entry/>
    </main>
  )
}
