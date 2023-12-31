import InfoCard from "./InfoCard";
import CampaignCard from "./CampaignCard";

function Campaigns() {
  function handleCreateModal() {
    const modal = document.getElementById(
      "create-modal"
    ) as HTMLDialogElement | null;
    if (modal) modal.showModal();
  }
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
              <option defaultValue="all">All Categories</option>
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
            <CampaignCard />
          </div>
        </div>

        <div className="flex flex-col w-2/5 space-y-4 max-w-full">
          <span className="flex justify-end">
            <button
              className="bg-secondary text-text px-4 py-3 rounded-md"
              onClick={() => handleCreateModal()}
            >
              Create Campaign
            </button>
          </span>

          <InfoCard />
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
