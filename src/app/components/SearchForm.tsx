'use client'
import moment from 'moment';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datetime-picker';


interface jotaki {
    price:number
}

function Results({DataObj, IsError}:any) {
    function ErrorMessage() {
        var isHidden = "hidden"
        return(
            <>
            <div className=' '>
                <>Ny meni jotai vituiks kyl tbh</>
            </div>
            </>
        )
    }
    return(
        <>
        <div>
            {"" ?? DataObj?.price}
        </div>
        </>
    );
}
export default function SearchForm() {
    const [SearchDate, setSearchDate] = useState<Date>(new Date());    //css stylet seuraavaks ja toi joku data hankinta paska et joooooooooooooo ja si pitäs tehä se jälkee se yks jutu näkymä
    const [IsError, setIsError] = useState(false)
    const [DataObj, setDataObj] = useState<jotaki>();
    
    function JokuSiisti() {
        var tempDateTime = moment(SearchDate);
        const pvm = tempDateTime.format("YYYY-MM-DD")
        const tunti = tempDateTime.hour();
        console.log(pvm, "                     ", SearchDate);
    }
    // useEffect(() => {
    //     fetch(`https://api.porssisahko.net/v1/price.json?date=${pvm}&hour=${tunti}`)
    //     .then(res => res.json())
    //     .then(data => setDataObj(data))
    //     .catch(err => {console.log(err); setIsError(true)})
    //     })
    const minDate = new Date("2021-01-01");
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    const maxDate = tomorrow;
    return(
        <div className=" bg-white flex flex-col border border-solid border-black p-2 w-auto h-4/5 justify-normal">
            <p className=''>Hae yksittäisen tunnin hinta.</p>
            <div className='flex flex-row justify-normal grid-rows-2 max-w-fit'>
                <button type="button" onClick={JokuSiisti} className='p-2 border border-gray-500 hover:shadow-inner max-w-fit hover:text-blue-400'>Search</button>
                <DatePicker className="max-w-fit" minDate={minDate} maxDate={maxDate} disableClock={true} required={true} locale='fi-FI' value={SearchDate} returnValue="start" onChange={e => {setSearchDate(old => e); console.log(e)}} />
            </div>
            <Results DataObj={DataObj} IsError={IsError} />
        </div>
    );
}

