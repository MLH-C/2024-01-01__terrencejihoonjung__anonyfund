function Fundraisers() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-main flex w-3/4 border-1 space-x-8">
        <div className="flex flex-col border border-1 w-3/5 max-w-full space-y-4">
          <span className="flex space-x-4">
            <select
              className="appearance-none px-3 py-2 rounded-md border border-slate-200"
              name="categories"
              id="categories"
            >
              <option value="all">All Categories</option>
              <option value="nonprofit">Non-Profit</option>
              <option value="sports">Sports</option>
              <option value="medical">Medical</option>
            </select>

            <input
              className="p-2 appearance-none w-full rounded-md border border-slate-200"
              type="search"
              id="search"
              name="search"
            />
          </span>

          <div className="border border-slate-200 w-full rounded-md h-list">
            hi
          </div>
        </div>

        <div className="flex flex-col w-2/5 space-y-4 max-w-full">
          <span className="flex justify-end">
            <button className="bg-secondary text-text px-4 py-3 rounded-md">
              Create Fundraiser
            </button>
          </span>
          <div className="p-8 flex flex-col border border-slate-200 shadow-md rounded-md space-y-16">
            <div className="flex flex-col space-y-8 max-w-full">
              <span className="flex flex-col">
                <h1 className="font-black text-2xl">Title</h1>
                <p className="text-sm font-light">By DJSOFJO12314KASDO</p>
              </span>

              <p className="break-words">
                Description.Description.Description.Description.Description.Description.Description.Description.Description.Description.
              </p>
            </div>

            <span className="flex justify-end ">
              <span className="flex space-x-4">
                <input
                  className="w-48 appearance-none p-2 border border-slate-200 rounded-md"
                  placeholder="Enter Custom Amount"
                  type="text"
                  id="custom-amount"
                />
                <button className="bg-accent text-background px-4 py-3 rounded-md">
                  Donate
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundraisers;
