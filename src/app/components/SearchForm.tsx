
export default function SearchForm({datetimestring}:{datetimestring:string}) {
    function juupajuu() {
        let newDate = new Date(datetimestring);
        
    }
    return(
        <div className="">
            <p>Anna päivä jolta haluat hakea sähkön hintoja </p>
            <input id="search" placeholder="" type="date" value={datetimestring} className=""/>
            <button type="button" onClick={juupajuu}>Search</button>
        </div>
    );
}