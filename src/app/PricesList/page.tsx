import { useState } from "react"
import Navbar from "../components/Navbar"
import Link from "next/link"

export default async function page() {              //https://api.porssisahko.net/v1/price.json?date=[date]&hour=[hour]

    return(
        <main>
            <Navbar>
                <Link href='/PricesList'>Prices</Link>
            </Navbar>
        </main>
    );
}