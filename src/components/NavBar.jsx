import Logo from '../assets/Logo.svg';

const NavBar = () => {
    return (
<section>
<nav className='flex justify-between px-20 py-5'>
            <img src={Logo}></img>
            <ul className='lg:flex gap-7 capitalize text-[#6EC1E4] text-lg font-["plus jakarta Sans, san serif"] cursor-pointer hidden'>
                <li className='hover:text-orange-400'>home</li>
                <li className='hover:text-orange-400'>about us</li>
                <li className='hover:text-orange-400'>product</li>
                <li className='hover:text-orange-400'>Features</li>
                <li className='hover:text-orange-400'>contact</li>
            </ul>
        </nav>
</section>
    );
}
export default NavBar;