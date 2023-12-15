'use client'
import moment, { Moment } from 'moment';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datetime-picker';

export default function SearchForm({pvm, hour, newData}:any) {
    const [SearchDate, setSearchDate] = useState<Date>(new Date());
    const [Data, setData] = useState([]);
    const [HasError, setHasError] = useState<Boolean>();
    const minDate = new Date("2021-01-01");
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    const maxDate = tomorrow;
    pvm = SearchDate.toISOString().split("T",1);
    hour = SearchDate.getHours();
    // setData(old => newData)
    console.log(newData)
    return(
        <div>
            <div className=" bg-white flex flex-col border border-solid border-black p-2 w-auto h-4/5 justify-normal">
                <p className=''>Hae yksittäisen tunnin hinta.</p>
                <div className='flex flex-row justify-normal grid-rows-2 max-w-fit'>
                    <button onClick={() =>  {setData(newData)}} >Search</button>
                    <DatePicker className="max-w-fit" minDate={minDate} maxDate={maxDate} value={SearchDate.toString()} disableClock={true} required={true} locale='fi-FI' returnValue="start" onChange={(e) => {setSearchDate(old => e)}} />
                </div>
            </div>
            <div>
                {newData.price}
            </div>
        </div>
    );
}