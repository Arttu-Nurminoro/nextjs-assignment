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
        <div className=" bg-white flex flex-col">
            <p>Anna päivä jolta haluat hakea sähkön hintoja </p>
            <DatePicker minDate={minDate} maxDate={maxDate} required={true} locale='fi-FI' value={SearchDate} returnValue="start" onChange={e => {setSearchDate(old => e); console.log(e)}} />
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