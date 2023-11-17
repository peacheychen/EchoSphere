import Footer from '@/components/Footer'
import CommentBar from '@/components/WriteComment/CommentBar'
import CommentFilter from '@/components/Comment/CommentFilter'
import Comment from '@/components/Comment/Comment'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`flex flex-col items-center justify-between h-[600px] w-[400px] ${inter.className}`}
    >
      <Header />
      <main className='min-h-[420px] w-full overflow-scroll p-2'>
        <CommentFilter />
        <Comment
          username="user1"
          commentText="This is a comment from user1."
          avatarSrc="/placeholder-user.jpg"
        />

        <Comment
          username="user2"
          commentText="This is a comment from user2."
          avatarSrc="/placeholder-user2.jpg"
        />
        <Comment
          username="user2"
          commentText="This is a comment from user2."
          avatarSrc="/placeholder-user2.jpg"
        />
        <Comment
          username="user2"
          commentText="This is a comment from user2."
          avatarSrc="/placeholder-user2.jpg"
        />

      </main>
      <CommentBar />
      <Footer />
    </div>
  )
}
