import Link from 'next/link';
import Chartti from './components/Chart';
import Navbar from './components/Navbar';


export default async function Home() {

  return (
    <main className="flex flex-col h-full w-auto">
      <Navbar>
        <Link href='/PricesList'>Prices</Link>
      </Navbar>
      <div className='flex flex-col w-auto h-auto m-auto'>
        <p>Jotai tekstii jotai tekstii</p>
        <h1>isodhfsuisdhfdsjfdsdfos</h1>
      </div>
      <Chartti />
    </main>
  );
}