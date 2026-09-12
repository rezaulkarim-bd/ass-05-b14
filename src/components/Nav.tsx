

const Nav = () => {
  return (
   
    <nav className="sticky top-0 z-50 w-full px-9 py-3 flex items-center justify-between bg-white shadow-sm">
  
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


  <div className="hidden md:flex items-center gap-8 text-black font-medium">
    <a href="" className="hover:text-pink-500 transition-colors text-pink-600">Home</a>
    <a href="" className="hover:text-pink-500 transition-colors">Technologies</a>
    <a href="" className="hover:text-pink-500 transition-colors">Projects</a>
    <a href="" className="hover:text-pink-500 transition-colors">About</a>
    <a href="" className="hover:text-pink-500 transition-colors">Contact</a>
  </div>


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