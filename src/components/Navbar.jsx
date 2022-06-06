import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-[#00d8ff]'>DEFI</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center'>
            <a href="#home"><li className='text-xl'>Platform</li></a>
            <a href="#about"><li className='text-xl'>About</li></a>
            <a href="#dev"><li className='text-xl'>Developers</li></a>
            <a href="#com"><li className='text-xl'>Community</li></a>
            <button className='ml-4'>Use Defi</button>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <a href="#home"><li className='text-2xl'>Platform</li></a>
            <a href="#about"><li className='text-2xl'>About</li></a>
            <a href="#dev"><li className='text-2xl'>Developers</li></a>
            <a href="#com"><li className='text-2xl'>Community</li></a>
            <a href="#use"><button className='m-8'>Use Defi</button></a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;