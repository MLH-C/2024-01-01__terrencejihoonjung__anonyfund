function InfoCard() {
  return (
    <div className="p-8 flex flex-col border border-slate-200 shadow-md rounded-md space-y-16">
      <div className="flex flex-col space-y-8 max-w-full">
        <span className="flex flex-col">
          <span className="flex justify-between">
            <h1 className="font-black text-2xl">Title</h1>
            <h3 className="font-black text-md">$12 / $1000 raised</h3>
          </span>

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
  );
}

export default InfoCard;
