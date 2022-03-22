import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
