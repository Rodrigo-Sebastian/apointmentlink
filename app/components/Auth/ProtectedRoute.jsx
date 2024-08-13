'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";


const ProtectedRoute = ({ children }) => {

    const router = useRouter();

    useEffect(() => {
        //kontrollera om användaren är inloggad
        if(!sessionStorage.getItem('loggedIn')) {
            router.push('/login');
        }
    }, [router]);

  return (
    <>{children}</>
  )
}

export default ProtectedRoute