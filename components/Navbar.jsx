import React from 'react'
import Link from "next/link"
export default function Navbar() {
    const style={
        display:"flex-box",
        background:"grey",
        alignItems:"space-between"
    }
    return (
        <div style={style}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a>
            </Link>
            <Link href="/contact"><a>Contact</a>
            </Link>
        </div>
    )
}
