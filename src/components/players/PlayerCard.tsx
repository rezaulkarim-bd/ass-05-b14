 const TechnologyCard = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      
      <div className="flex items-center justify-between">
        <div className="text-4xl text-cyan-400">
          ⚛
        </div>

        <span className="rounded-full bg-cyan-50 px-4 py-1.5 text-sm font-medium text-cyan-500">
          Popular
        </span>
      </div>

      {/* Content */}
      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        React
      </h2>

      <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
        A declarative, component-based JavaScript library for building
        modern user interfaces.
      </p>

      {/* Info */}
      <div className="my-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-500">
          Frontend
        </span>

        <span className="text-sm text-gray-500">
          Beginner-Friendly
        </span>

        <span className="text-sm font-semibold">
          <span className="text-yellow-400">★</span> 4.9
        </span>
      </div>

      {/* Button */}
      <button className="w-full rounded-lg bg-slate-950 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;