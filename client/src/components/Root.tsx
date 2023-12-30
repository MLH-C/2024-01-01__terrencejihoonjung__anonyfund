import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.tsx";

function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet />

      <dialog id="wallet-modal" className="modal ">
        <div className="font-main modal-box bg-background">
          <h3 className="font-bold text-lg">Connect Wallet</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog id="create-modal" className="modal">
        <div className="font-main modal-box bg-background p-8">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create Fundraiser</h3>
          <form className="flex flex-col space-y-4 w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                placeholder="Enter title"
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Enter Description"
              ></textarea>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Goal</span>
              </div>
              <input
                type="text"
                placeholder="Enter goal amount"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select Category
                </option>
                <option>Non-Profit</option>
                <option>Sports</option>
                <option>Medical</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Upload Image</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
              />
            </label>

            <button className="font-bold text-md bg-secondary rounded-md p-3">
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Root;
