import Link from "next/link";
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";

async function HaeJuttuu() {
    // const Dataa = await fetch("")
}

export default async function page() {              //https://api.porssisahko.net/v1/price.json?date=[date]&hour=[hour]
    
    return(
        <main className='flex flex-col w-auto h-auto'>
            <Navbar>
                <Link href='/PricesList'>Prices</Link>
            </Navbar>
            <SearchForm/>
        </main>
    );
}