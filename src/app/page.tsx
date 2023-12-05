import Link from 'next/link';
import Chartti from './components/Chart';
import Navbar from './components/Navbar';

async function GetJotaki() {
  const data = await fetch('https://api.porssisahko.net/v1/latest-prices.json');
  if(!data.ok) {
    throw new Error('Data fetching failed')
  }
  return data.json();
}


export interface MunHomma {
  prices:[{
  price: number,
  startDate: string,
  endDate: string
}]
}

export default async function Home() {
  const Dataa:MunHomma = await GetJotaki();
  console.log(Dataa)
  function FillStringList(stringList:string[], Dataa:MunHomma) {
    Dataa.prices.forEach(item => {
      stringList.push(item.startDate.toString().slice(11,16))
    });
    return stringList;
  }

  function FillNumList(numList:number[], Dataa:MunHomma) {
    Dataa.prices.forEach(item => {
      numList.push(item.price)
    });
    return numList;
  }
  var labels:string[] = [];
  var arr1:number[] = [];
  FillNumList(arr1, Dataa);
  FillStringList(labels, Dataa)
  const data = {
    labels,
    datasets: [
       {
        label: 'Hinta snt/kwh',
        data: arr1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  return (
    <main className="flex flex-col h-full w-auto">
      <Navbar>
        <Link href='/PricesList'>Prices</Link>
      </Navbar>
      <div className='flex flex-col w-auto h-auto m-auto'>
        <p>Jotai tekstii jotai tekstii</p>
        <h1>isodhfsuisdhfdsjfdsdfos</h1>
      </div>
      <Chartti dataa={data} />
    </main>
  );
}