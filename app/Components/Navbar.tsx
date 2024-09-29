"use client"

import { useRouter } from 'next/navigation'; // Updated import

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className='flex justify-around align-middle text-white font-semibold bg-slate-500 py-4 '>
      <button onClick={() => router.push('/Home')}>Home</button>
      <button onClick={() => router.push('/About')}>About</button>
      <button onClick={() => router.push('/Contact')}>Contact</button>
    </nav>
  );
};

export default Navbar;
