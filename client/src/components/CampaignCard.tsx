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

type CampaignCardProps = {
  campaign: Campaign;
  setCurrentCampaign: React.Dispatch<React.SetStateAction<Campaign>>;
};

function CampaignCard({ campaign, setCurrentCampaign }: CampaignCardProps) {
  return (
    <div
      onClick={() => setCurrentCampaign(campaign)}
      className="w-84 h-72 border border-slate-200 rounded-md"
    >
      <img
        src={campaign.imageUrl}
        className="flex flex-col justify-center items-center w-full h-4/5 border border-1"
      />
      <div className="flex flex-col justify-center items-center text-center w-full h-1/5">
        <p className="w-full line-clamp-1 px-2">{campaign.title}</p>
        <p className="w-fit line-clamp-1">
          ${campaign.raisedAmount} / ${campaign.goalAmount} raised
        </p>
      </div>
    </div>
  );
}

export default CampaignCard;
