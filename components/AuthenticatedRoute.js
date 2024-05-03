// components/AuthenticatedRoute.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AuthenticatedRoute = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        console.log('logged -' + isLoggedIn)
        if (!isLoggedIn || isLoggedIn !== 'true') {
            router.push('/login');
        }
    }, []);

    return children;
};

export default AuthenticatedRoute;
