'use client';

const Footer = () => {

    const today = new Date();
    const dateString = today.toLocaleDateString('sv-SE');

    return (
    <footer className="w-full bg-blue-400 p-2">
        <div className="container mx-auto flex flex-row items-center justify-center gap-10">
            <p className="text-sm text-white">Version 1.0.0</p>
            <p className="text-sm text-white">Skapad av: Rodrigo Sebastian</p>
            <p className="text-sm text-white">{dateString}</p>
        </div>
    </footer>
  )
}

export default Footer