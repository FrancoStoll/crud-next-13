import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center py-4'>

            <Link href="/">
                <h3 className='text-2xl font-bold'>NextCRUD</h3>

            </Link>


            <ul>
                <li>
                    <Link href="/new" className='text-bg-slate-200 hover:text-slate-400'>New</Link>
                </li>
            </ul>
        </nav>
    )
}
