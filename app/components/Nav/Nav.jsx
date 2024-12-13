import { Herr_Von_Muellerhoff } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const Nav = () => {

    let navList = [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "About",
            href: "#About"
        },
        {
            name: "Contact",
            href: "#Contact"
        }
    ]

  return (
    <div className='Nav fixed w-full bg-black text-white grid items-center grid-cols-2 p-4'>
        <div className="logo">NAV</div>
        <ul className="navLinks  flex font-bold gap-4">
            {navList.map((link) => (
                <Link key={link.name} href={link.href} className='link'>{link.name}</Link>
            ))}
        </ul>
    </div>
  )
}

export default Nav;