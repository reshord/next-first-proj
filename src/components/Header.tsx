const Header = () => {
    return ( 
        <header className='bg-zinc-800 p-5 flex justify-between sticky top-0 h-15 items-center'>
           <div className='text-indigo-500 font-bold text-2xl cursor-pointer'>
                <a href="/">HeaderLogo</a>
           </div>

           <nav className="flex w-auto justify-between text-white font-bold underline">
                <a className="mr-3" href="/cards">Список пользователей</a>
           </nav>
        </header>
     );
}
 
export default Header;