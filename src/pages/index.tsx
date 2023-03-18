import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CardsPage from './users'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Header />
      <main>
        <div className='bg-red-500 p-4 rounded-2xl w-full'>
          hello world
        </div>
      </main>
    </div>
  )
}
