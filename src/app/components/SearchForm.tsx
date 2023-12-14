'use client'
import moment, { Moment } from 'moment';
import { useState } from 'react';
import DatePicker from 'react-datetime-picker';


export default function SearchForm() {
    const [SearchDate, setSearchDate] = useState<Moment>(moment(new Date()));
    const minDate = new Date("2021-01-01");
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    const maxDate = tomorrow;
    return(
        <div className=" bg-white flex flex-col border border-solid border-black p-2 w-auto h-4/5 justify-normal">
            <p className=''>Hae yksittäisen tunnin hinta.</p>
            <div className='flex flex-row justify-normal grid-rows-2 max-w-fit'>
                <DatePicker className="max-w-fit" minDate={minDate} maxDate={maxDate} disableClock={true} required={true} locale='fi-FI' returnValue="start" value={SearchDate.toString()} onChange={e => {setSearchDate(old => e); console.log(e)}} />
            </div>
        </div>
    );
}

