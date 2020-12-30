import React from 'react';
import Link from 'next/link';


const errorPage = () => (
    <div>
        <h1>Oh no something went wrong!</h1>
        <p>Got back to <Link href="/"><a>Home</a></Link></p>
    </div>
);

export default errorPage;