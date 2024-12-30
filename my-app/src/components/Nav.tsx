import React from 'react';
import '../style/nav.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Nav() {
  return (
    <div className='container'>

        <Image src="/rlogo.png" alt="logo" width={100} height={100} className='logo'/>
        <div>
            <h2>Welcome To My Portfolio</h2>
        </div>
        <div>
            <ul className='list'>
                <li>
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/skills">Skills</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}