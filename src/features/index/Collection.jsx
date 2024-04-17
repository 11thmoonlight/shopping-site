function Collection() {
  return (
    <div>
      <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-lg lg:mt-16 md:mt-14 sm:mt-12 mt-10 flex flex-col items-center">
        <span className="block">
          we've got collections
          <span className="font-semibold">you'll love!</span>
        </span>
        <span className="block wordSpace1">
          <span className="font-semibold">*smiles*</span> if you haven't already
        </span>
      </h2>

      <div className="sm:flex justify-center gap-12 text-white tracking-wide font-semibold text-sm lg:mt-12 md:mt-10 sm:mt-8 hidden">
        <button className="bg-teal-500 hover:bg-teal-600 w-60 h-14">
          FOR THE KITCHEN
        </button>
        <button className="bg-teal-500 hover:bg-teal-600 w-60 h-14">
          FOR THE HOUSE
        </button>
      </div>
    </div>
  );
}

export default Collection;
