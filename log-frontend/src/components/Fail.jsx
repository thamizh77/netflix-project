import { useNavigate } from "react-router-dom";

const Fail = () => {

    const Navigate = useNavigate();
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 p-4">
        <h1 className="text-3xl font-bold text-red-500">Login Failed</h1>
        <p className="text-md text-gray-300">
          Oops! Incorrect email or password.
        </p>
        <button
          onClick={() => Navigate("/")}
          className="bg-red-600 px-5 py-2 rounded hover:bg-red-700 transition-all"
        >
          Try Again
        </button>
      </div>
    );
}
 
export default Fail;