type Campaign = {
  category: string;
  createdAt: number;
  description: string;
  goalAmount: number;
  imageUrl: string;
  ownerWalletAddress: string;
  raisedAmount: number;
  title: string;
};

type InfoCardProps = {
  currentCampaign: Campaign;
};

function InfoCard({ currentCampaign }: InfoCardProps) {
  return (
    <div className="p-8 flex flex-col border border-slate-200 shadow-md rounded-md space-y-16">
      {currentCampaign.ownerWalletAddress ? (
        <>
          <div className="flex flex-col space-y-8 max-w-full">
            <span className="flex flex-col space-y-1">
              <span className="flex justify-between">
                <span>
                  <h1 className="font-black text-2xl">
                    {currentCampaign.title}
                  </h1>
                </span>

                <h3 className="font-black text-md">
                  ${currentCampaign.raisedAmount} / $
                  {currentCampaign.goalAmount} raised
                </h3>
              </span>

              <p className="text-sm font-light">
                By {currentCampaign.ownerWalletAddress}
              </p>
              <p className="font-black px-2 py-1 rounded-full bg-accent text-background max-w-fit">
                {currentCampaign.category}
              </p>
            </span>

            <img src={currentCampaign.imageUrl} className="" />

            <p className="break-words">{currentCampaign.description}</p>
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
        </>
      ) : null}
    </div>
  );
}

export default InfoCard;
