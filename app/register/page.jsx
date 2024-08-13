'use client';



import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PasswordInput from '../components/Auth/PasswordInput';
import Navbar from '../components/Navbar';

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleRegister = (e) => {
        if(password !== confirmPassword){
            alert('password do not match!');
            return;
        }
        
        //registreringen sparas i localstorage
        const user = { username, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registreringen lyckades!');
        
        //navigering till inloggningsidan.
        router.push('/login');
    }
        

  return (
      <div className='h-screen bg-cover bg-center'
      style={{ backgroundImage: 'url("/images/register.jpg")' }}
      >
        <Navbar/>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-white font-bold mx-4 mb-2'>Har du inget konto än?</h1>
            <p className='text-sm text-white w-[350px] mx-4 mb-8 lg:text-lg lg:w-[600px] lg:text-center'>Skapa ett konto genom att fylla i formuläret! det är grattis och du är bara några klick ifrån dashboarnd!</p>
            <form className='border w-[450px] h-[500px] flex flex-col gap-6 rounded-lg p-8 mx-4 bg-slate-100' onSubmit={handleRegister}>
                {/*div för användarnamn*/}
                <div className='flex flex-col'>
                    <label className='text-xl'>Användarnamn</label>
                    <input
                        className='border rounded-md h-[40px] outline-none'
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                {/*div för Email*/}
                <div className='flex flex-col'>
                    <label className='text-xl'>Email</label>
                    <input
                        className='border rounded-md h-[40px] outline-none'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/*div för Lösenord*/}
                <div className='flex flex-col gap-6'>
                    <PasswordInput
                        label="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <PasswordInput
                        label="confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                        className='w-full bg-blue-400 p-4 rounded-md text-white'
                        type='submit'
                    >
                        Registrera dig!
                    </button>
                </div>
            </form>
            <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Har du redan ett konto?</p>
            <button
                type="button"
                onClick={() => router.push('/login')}
                className="text-blue-500 font-bold py-2 px-4 rounded hover:underline focus:outline-none focus:shadow-outline"
            >
                Logga in
            </button>
            </div>
        </div>
    </div>
  )
}

export default Register