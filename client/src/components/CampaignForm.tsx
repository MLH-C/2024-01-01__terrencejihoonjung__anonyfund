import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function CampaignForm() {
  const storage = getStorage();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [category, setCategory] = useState("nonprofit");
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImageFile(file);
    } else {
      setSelectedImageFile(null);
    }
  }

  async function uploadImage(file: File) {
    // Create a storage reference
    const storageRef = ref(storage, `images/${file.name}-${Date.now()}`);

    // Upload the file to Firebase Storage
    const snapshot = await uploadBytes(storageRef, file);

    // Get the URL of the uploaded file
    const url = await getDownloadURL(snapshot.ref);

    return url;
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validate Form Data
    if (typeof Number(goalAmount) !== "number") {
      setError("Invalid goal input");
    }

    // Basic validation checks
    if (!title || !description || !goalAmount || !category) {
      setError("Please fill in all fields");
      return;
    }

    if (!selectedImageFile) {
      setError("Please upload an image");
      return;
    }

    try {
      const imageUrl = await uploadImage(selectedImageFile);
      const walletAddress = localStorage.get("wallet");
      if (!walletAddress) throw new Error("Wallet is not connected");

      // Construct the campaign data
      const campaignData = {
        title,
        description,
        goalAmount: Number(goalAmount),
        category,
        imageUrl,
        ownerWalletAddress: walletAddress,
      };

      // Send the campaign data to your backend server
      const response = await fetch("http://localhost:3000/campaigns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(campaignData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle any post-request logic here (e.g., clearing the form, showing success message)
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while submitting the form");
    }
  }

  return (
    <form
      onSubmit={(e) => handleFormSubmit(e)}
      className="flex flex-col space-y-4 w-full"
    >
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Title</span>
        </div>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
        />
      </label>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Description</span>
        </div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
          value={goalAmount}
          onChange={(e) => setGoalAmount(e.target.value)}
          placeholder="Enter goal amount"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Category</span>
        </div>
        <select
          defaultValue={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full"
        >
          <option value="nonprofit">Non-Profit</option>
          <option value="sports">Sports</option>
          <option value="medical">Medical</option>
        </select>
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Upload Image</span>
        </div>
        <input
          type="file"
          className="file-input file-input-bordered w-full"
          onChange={handleImageChange}
        />
      </label>

      {error && (
        <div
          role="alert"
          className="alert alert-warning bg-red-400 border-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}

      <button className="font-bold text-md bg-secondary rounded-md p-3">
        Submit
      </button>
    </form>
  );
}

export default CampaignForm;
