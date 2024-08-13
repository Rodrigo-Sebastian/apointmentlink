'use client';

import { useRouter } from 'next/navigation';
import  { useState } from 'react'
import PasswordInput from '../components/Auth/PasswordInput';
import Navbar from '../components/Navbar';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if(storedUser && storedUser.username === username && storedUser.password === password){
            alert('Login lyckades!');
            //spara användarens inloggning i sessionsStorage
            sessionStorage.setItem('loggedIn', true);
            //navigera sedan till TodoApp
            router.push('/todoapp');
        }else{
            alert('ogiltig användarnamn eller lösenord!');
        }
    };

  return (
   <>
    <div className='h-screen bg-cover bg-center'
    style={{ backgroundImage: 'url("/images/login.jpg")' }}
    >
        <Navbar/>
        <div className='flex flex-col gap-2 justify-center lg:items-center'>  
            <h1 className='text-4xl font-bold mx-4 mt-20'>Välkomen till ApointLink!</h1>
            <p className='mx-4 w-[350px] mb-10 lg:w-full lg:text-center'>Din praktiska Dashboard för att hantera, filtrera och skapa Apointments helt grattis!</p>
            <form className='w-[470px] border rounded-lg p-8 mx-4 bg-slate-50' onSubmit={handleLogin}>
                {/* div för användarnamn */}
                <div className='flex flex-col gap-4'>
                    <label className='text-xl'>Användarnamn</label>
                    <input
                        className='border p-2 rounded-md mb-6'
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                {/* div för lösenord */}
                <div>
                    <PasswordInput
                        label="lösenord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex flex-row gap-6 mt-6'>
                    <button
                        className='border p-4 rounded-md w-1/2 text-white bg-blue-400'
                        type='submit'
                    >
                        Logga in
                    </button>
                    <button
                        className='border p-4 w-1/2 rounded-md text-white bg-slate-500'
                        type='button'
                        onClick={() => router.push('/register')}
                    >
                        registrera dig
                    </button>
                </div>
            </form>
        </div>
    </div>
   </>
  )
}

export default Login