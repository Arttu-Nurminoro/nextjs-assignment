import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Navbar from "../components/Navbar"
import Link from "next/link"
import SearchForm from "../components/SearchForm";

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