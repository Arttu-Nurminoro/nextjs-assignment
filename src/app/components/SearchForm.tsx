'use client'
import { useState } from 'react';
import DatePicker from 'react-date-picker';


type ValuePiece = Date | null;
type value = ValuePiece | [ValuePiece, ValuePiece]

export default function SearchForm() {
    const [SearchDate, setSearchDate] = useState<value>(new Date());    //css stylet seuraavaks ja toi joku data hankinta paska et joooooooooooooo ja si pitäs tehä se jälkee se yks jutu näkymä
    function Results({jotaki}) {

        return(
            <>
            <div>
                <ul>
                    {jotaki.map((item) => {
                        return(
                            <>
                            <li></li>
                            </>
                        )
                    })}
                </ul>
            </div>
            </>
        );
    }
    function JokuSiisti(tempstring:string) {
        var SearchDate = new Date(tempstring);
        let newString:string = SearchDate.getDay().toString()
        return newString;
    }
    const minDate = new Date("2021-01-01");
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    const maxDate = tomorrow;
    return(
        <div className=" bg-white flex flex-col border border-solid border-black p-2 w-auto h-4/5 justify-normal">
            <p className=''>Anna päivä jolta haluat hakea sähkön hintoja </p>
            <div className='flex flex-row justify-normal grid-rows-2 max-w-fit'>
                <button type="button" className='p-2 border border-gray-500 hover:shadow-inner max-w-fit hover:text-blue-400'>Search</button>
                <DatePicker className="max-w-fit" minDate={minDate} maxDate={maxDate} required={true} locale='fi-FI' value={SearchDate} returnValue="start" onChange={e => {setSearchDate(old => e); console.log(e)}} />
            </div>
        </div>
    );
}

