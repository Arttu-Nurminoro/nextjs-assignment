'use client'
import moment, { Moment } from 'moment';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datetime-picker';


export default function SearchForm() {
    const [SearchDate, setSearchDate] = useState<Date>(new Date());
    const [Data, setData] = useState([]);
    const [HasError, setHasError] = useState<Boolean>();
    const minDate = new Date("2021-01-01");
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    const maxDate = tomorrow;
    var pvm:any = SearchDate;
    pvm = pvm.toISOString().split("T", 1)
    var hour:any = SearchDate;
    hour = SearchDate.getHours();
    console.log(pvm, hour);
    useEffect(() => {
        fetch(`https://api.porssisahko.net/v1/price.json?date=${pvm[0]}&hour=${hour}`, {mode:"no-cors"})
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => {setHasError(true); console.log(err)})
    }, )
    console.log(Data)
    return(
        <div className=" bg-white flex flex-col border border-solid border-black p-2 w-auto h-4/5 justify-normal">
            <p className=''>Hae yksittäisen tunnin hinta.</p>
            <div className='flex flex-row justify-normal grid-rows-2 max-w-fit'>
                <DatePicker className="max-w-fit" minDate={minDate} maxDate={maxDate} value={SearchDate.toString()} disableClock={true} required={true} locale='fi-FI' returnValue="start" onChange={(e) => {setSearchDate(old => e)}} />
            </div>
            <div>
                {/* <p>(typeof Data !== undefined)? : {Data.price}</p> */}
            </div>
        </div>
    );
}