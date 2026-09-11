//  import Logo from '../assets/logo-text.png'

const Nav = () => {
  return (
    <nav className='pt-3 pb-3 px-9 flex justify-between bg-white '>
      <div>
                <a href="#" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white shadow-sm">
            DS
          </div>

          <span className="text-xl font-bold tracking-tight">
            <span className="text-gray-800">Dev</span>
            <span className="text-pink-500"> Stack</span>
          </span>
        </a>
        {/* <img src={Logo} alt="" /> */}
      </div>
      <div className=' gap-4 items-center flex justify-between'>
          <p>Home</p>
          <p>Tecnology</p>
          <p>Projects</p>
          <p>About</p>
          <p>Contact</p>
      </div>

      <div className=' gap-4 items-center flex justify-between'>
          {/* <button className="flex-1 rounded-lg border border-gray-200 py-2.5 font-medium text-gray-600">
                Sign In
              </button> */}

        <p className="text-black">Sign in</p>
        <button className="btn btn-secondary rounded-2xl">Secondary</button>

      </div>
    </nav>
  );
};

export default Nav;