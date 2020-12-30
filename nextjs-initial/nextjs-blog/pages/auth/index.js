import React from 'react';
import Link from 'next/link';
import User from '../../components/User';


const authIndexPage = () => (
    <div>
        <h1>Auth Index Page</h1>
        <p>Got to <Link href="/"><a>Home</a></Link></p>
        <User name="Max" age="28" />
    </div>
);

export default authIndexPage;