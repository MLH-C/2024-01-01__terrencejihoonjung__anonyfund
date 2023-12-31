import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col grow justify-center items-center mb-36">
      <div className="font-main flex flex-col justify-center items-center space-y-12">
        <span className="flex flex-col items-center space-y-4">
          <h1 className="font-extrabold text-8xl">Anonyfund</h1>
          <h3 className="font-bold text-2xl">
            An anonymous, secure, and easy-to-use decentralized crowdfunding
            platform for all
          </h3>
        </span>

        <Link
          to="/campaigns"
          className="bg-secondary text-text px-4 py-3 rounded-full"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;
