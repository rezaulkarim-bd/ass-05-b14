//  import Logo from '../assets/logo-text.png'

const Nav = () => {
  return (
    // <nav className='pt-3 pb-3 px-9 flex justify-between bg-white '>
    //   <div>
    //             <a href="#" className="flex items-center gap-3">
    //       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white shadow-sm">
    //         DS
    //       </div>

    //       <span className="text-xl font-bold tracking-tight">
    //         <span className="text-gray-800">Dev</span>
    //         <span className="text-pink-500"> Stack</span>
    //       </span>
    //     </a>
    //     {/* <img src={Logo} alt="" /> */}
    //   </div>
    //   <div className=' gap-4 items-center flex justify-between text-black'>
    //       <p>Home</p>
    //       <p>Tecnology</p>
    //       <p>Projects</p>
    //       <p>About</p>
    //       <p>Contact</p>
    //   </div>

    //   <div className=' gap-4 items-center flex justify-between'>
    //       {/* <button className="flex-1 rounded-lg border border-gray-200 py-2.5 font-medium text-gray-600">
    //             Sign In
    //           </button> */}

    //     <p className="text-black">Sign in</p>
    //     <button className="btn btn-secondary rounded-2xl">Secondary</button>

    //   </div>
    // </nav>
    <nav className="sticky top-0 z-50 w-full px-9 py-3 flex items-center justify-between bg-white shadow-sm">
  {/* Left: Brand logo + name */}
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
  </div>

  {/* Center: Nav links */}
  <div className="hidden md:flex items-center gap-8 text-black font-medium">
    <a href="#" className="hover:text-pink-500 transition-colors text-pink-600">Home</a>
    <a href="#" className="hover:text-pink-500 transition-colors">Technologies</a>
    <a href="#" className="hover:text-pink-500 transition-colors">Projects</a>
    <a href="#" className="hover:text-pink-500 transition-colors">About</a>
    <a href="#" className="hover:text-pink-500 transition-colors">Contact</a>
  </div>

  {/* Right: Sign In + Sign Up buttons */}
  <div className="flex items-center gap-4">
    <button className="text-black font-medium hover:text-pink-500 transition-colors">Sign In</button>
    <button className="px-5 py-2 rounded-full bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors shadow-sm">
      Sign Up
    </button>
  </div>
</nav>
 
  
   
  );
};

export default Nav;