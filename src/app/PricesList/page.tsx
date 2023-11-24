import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Link from "next/link"
export default function page() {

    return(
        <main>
            <Navbar>
                <Link href='/PricesList'>Prices</Link>
            </Navbar>
            <div>
                <p></p>
            </div>
            <div>
                <ul>
                    {}
                </ul>
            </div>
        </main>
    )
}