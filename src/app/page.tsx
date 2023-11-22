import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="flex flex-col h-full w-auto">
      <Navbar>
        <Link href='/PricesList'>yeet</Link>
      </Navbar>
      <div className='flex flex-col bg-gradient-to-r from-cyan-300 to-blue-900 w-auto h-full p-10'>
        <p className=''>Jotai tekstii jotai tekstii</p>
        <h1>isodhfsuisdhfdsjfdsdfos</h1>
      </div>
    </main>
  )
}