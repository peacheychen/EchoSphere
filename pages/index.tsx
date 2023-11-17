import Footer from '@/components/Footer'
import CommentBar from '@/components/WriteComment/CommentBar'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between h-[600px] w-[400px] ${inter.className}`}
    >
      <Header />
      <CommentBar />
      <Footer />
    </main>
  )
}
