'use client'
import { useState } from 'react';
import DatePicker from 'react-date-picker';


type ValuePiece = Date | null;
type value = ValuePiece | [ValuePiece, ValuePiece]
export default function SearchForm() {
    const [SearchDate, setSearchDate] = useState<value>(new Date());    //css stylet seuraavaks ja toi joku data hankinta paska et joooooooooooooo ja si pitäs tehä se jälkee se yks jutu näkymä
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
        <div className="flex flex-col bg-white border border-solid border-black w-4/5 h-4/5 m-auto">
            <p className="mx-5 mt-5">Anna päivä jolta haluat hakea sähkön hintoja </p>
            <DatePicker className="w-4/12 mx-5" minDate={minDate} maxDate={maxDate} required={true} locale='fi-FI' value={SearchDate} returnValue="start" onChange={e => {setSearchDate(old => e);}} />
            <button type="button">Search</button>
        </div>
    );
}

// export async function Results() {

//     return(
//         <>
//         <div>
//             <ul>
//                 {jotaki.map((item) => {
//                     return(
//                         <>
//                         <li></li>
//                         </>
//                     )
//                 })}
//             </ul>
//         </div>
//         </>
//     );
// }