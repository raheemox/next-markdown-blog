import React from 'react';
import Link from 'next/link'

const Success = () => {
    return (
        <div className="card">
            <p>your messages was successful ✅ </p>
            <p>I will replay as soon as possible ❤</p>
            <Link href={`/`} passHref>
            <a className='btn'>👈🏻Go back </a>
            </Link>
        </div>

    );
}

export default Success;
