 
 import Img from '../assets/banner-stack.png'
 const Banner = () => {
  return (
     <section className="bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-16">

        
        <div className="w-1/2">
          <h1 className="text-4xl font-bold leading-tight text-slate-900">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="my-4 max-w-md text-sm leading-6 text-gray-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="flex gap-3">
            <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-xs font-semibold text-white">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-200 px-5 py-2 text-xs text-gray-600">
              Learn More
            </button>
          </div>
        </div>

        
        <div className="w-1/2 text-center">
          <img
            src={Img}
            alt=""
            className="mx-auto w-80"
          />
        </div>

      </div>

      
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Explore the{" "}
          <span className="text-pink-500">Technologies</span>
        </h2>

        <p className="text-xs text-gray-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
    </section>
  );
};

  


export default Banner;