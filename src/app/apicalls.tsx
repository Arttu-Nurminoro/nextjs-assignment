'use server'

export async function GetHourData(url:string) {
    const Data = await fetch(url);
    if(!Data.ok){
        throw new Error("Data fetching failed.")
    }
    return Data.json();
}
