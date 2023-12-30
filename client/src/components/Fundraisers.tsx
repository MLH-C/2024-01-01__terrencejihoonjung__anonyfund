import InfoCard from "./InfoCard";

function Fundraisers() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-main flex w-3/4 border-1 space-x-8">
        <div className="flex flex-col w-3/5 max-w-full space-y-4">
          <span className="flex space-x-4">
            <select
              className="appearance-none px-3 py-3 rounded-md border border-slate-200"
              name="categories"
              id="categories"
            >
              <option value="all">All Categories</option>
              <option value="nonprofit">Non-Profit</option>
              <option value="sports">Sports</option>
              <option value="medical">Medical</option>
            </select>

            <input
              className="p-3 appearance-none w-full rounded-md border border-slate-200"
              placeholder="Search by Wallet Address"
              type="search"
              id="search"
              name="search"
            />
          </span>

          <div className="grid grid-cols-2 gap-4 bg-white border border-slate-200 w-full rounded-md h-list p-6 overflow-y-auto">
            <div className="w-84 h-72 border border-slate-200 rounded-md">
              <div className="flex flex-col justify-center items-center w-full h-4/5 border border-1">
                image
              </div>
              <div className="flex flex-col justify-center items-center w-full h-1/5">
                <p className="w-full line-clamp-1 px-2">
                  TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
                </p>
                <p className="w-fit line-clamp-1">$12 / $1000 raised</p>
              </div>
            </div>
            <div className="w-84 h-72 border border-slate-200 rounded-md">
              <div className="flex flex-col justify-center items-center w-full h-4/5 border border-1">
                image
              </div>
              <div className="flex flex-col justify-center items-center w-full h-1/5">
                <p className="w-full line-clamp-1 px-2">
                  TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
                </p>
                <p className="w-fit line-clamp-1">$12 / $1000 raised</p>
              </div>
            </div>
            <div className="w-84 h-72 border border-slate-200 rounded-md">
              <div className="flex flex-col justify-center items-center w-full h-4/5 border border-1">
                image
              </div>
              <div className="flex flex-col justify-center items-center w-full h-1/5">
                <p className="w-full line-clamp-1 px-2">
                  TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
                </p>
                <p className="w-fit line-clamp-1">$12 / $1000 raised</p>
              </div>
            </div>
            <div className="w-84 h-72 border border-slate-200 rounded-md">
              <div className="flex flex-col justify-center items-center w-full h-4/5 border border-1">
                image
              </div>
              <div className="flex flex-col justify-center items-center w-full h-1/5">
                <p className="w-full line-clamp-1 px-2">
                  TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
                </p>
                <p className="w-fit line-clamp-1">$12 / $1000 raised</p>
              </div>
            </div>
            <div className="w-84 h-72 border border-slate-200 rounded-md">
              <div className="flex flex-col justify-center items-center w-full h-4/5 border border-1">
                image
              </div>
              <div className="flex flex-col justify-center items-center w-full h-1/5">
                <p className="w-full line-clamp-1 px-2">
                  TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle
                </p>
                <p className="w-fit line-clamp-1">$12 / $1000 raised</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-2/5 space-y-4 max-w-full">
          <span className="flex justify-end">
            <button className="bg-secondary text-text px-4 py-3 rounded-md">
              Create Fundraiser
            </button>
          </span>

          <InfoCard />
        </div>
      </div>
    </div>
  );
}

export default Fundraisers;
