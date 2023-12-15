import { Moment } from "moment";
import Link from "next/link";
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import { GetHourData } from "../apicalls";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";

// async function HaeJuttuu(moment:Moment) {
//     const Dataa = await fetch(`https://api.porssisahko.net/v1/price.json?date=${moment.format("YYYY-MM-DD")}&hour=${moment.hour()}`);
//     return Dataa.json()
// }

export default async function page() {              //https://api.porssisahko.net/v1/price.json?date=[date]&hour=[hour]
    var hour:any;
    var pvm:any;
    var url:string;
    if(hour ==! undefined && pvm ==! undefined){
        url = `https://api.porssisahko.net/v1/price.json?date=${pvm}&hour=${hour}`
    }else {
        var nyt = new Date()
        pvm = nyt.toISOString().split("T", 1);
        hour = nyt.getHours();
        url = `https://api.porssisahko.net/v1/price.json?date=${pvm}&hour=${hour}`;
    }
    const newData = await GetHourData(url)
    return(
        <main className='flex flex-col w-auto h-auto'>
            <Navbar>
                <Link href='/PricesList'>Prices</Link>
            </Navbar>
            <SearchForm hour={hour} pvm={pvm} newData={newData} />
        </main>
    );
}