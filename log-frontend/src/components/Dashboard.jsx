const Dashboard = () => {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 p-4">
        <h1 className="text-4xl font-bold text-red-600">Welcome to Netflix</h1>
        <p className="text-lg">You are successfully logged in.</p>
        <img
          src="/bg.jpg"
          alt="Netflix Banner"
          className="w-full max-w-2xl rounded-lg"
        />
        <button
          className="bg-red-600 px-6 py-2 rounded text-white font-semibold hover:bg-red-700 transition-all"
          onClick={() => alert("Start watching!")}
        >
          Start Watching
        </button>
      </div>
    );
}
 
export default Dashboard;