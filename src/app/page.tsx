import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Chartti from './components/Chart';
export default async function Home() {
  
  return (
    <main className="flex flex-col h-full w-auto">
      <Navbar>
        <Link href='/PricesList'>Prices</Link>
      </Navbar>
      <div className='flex flex-col w-auto h-auto p-5'>
        <p className=''>Jotai tekstii jotai tekstii</p>
        <h1>isodhfsuisdhfdsjfdsdfos</h1>
      </div>
      <Chartti/>
    </main>
  );
}