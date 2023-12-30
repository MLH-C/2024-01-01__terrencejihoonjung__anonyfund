function FundraiserCard() {
  return (
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
  );
}

export default FundraiserCard;
