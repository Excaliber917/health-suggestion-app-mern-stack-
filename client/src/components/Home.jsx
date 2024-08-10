import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800"><span>Welcome</span> to <span className="text-white">Your</span> Wellness <span className="text-pink-900">Journey</span></h1>
          <p className="text-md md:text-2xl text-gray-700 mt-4">Explore the best practices for a healthier mind and body.</p>
        </section>

        {/* Card Section */}
        <section className="flex flex-col gap-2 md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 px-4">
          {/* Card 1 */}
          <div className="relative w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center hover:bg-purple-100 transition-colors duration-300 ease-in-out cursor-pointer">
            <h2 className="text-2xl font-bold text-gray-800">Mental Health</h2>
            <p className="text-gray-600 mt-2">Discover ways to maintain a balanced and healthy mind.</p>
            <img
              src="https://images.pexels.com/photos/8849272/pexels-photo-8849272.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mental Health"
              className="absolute -top-10 right-10 h-16 w-16 rounded-full border-4 border-white"
            />
          </div>

          {/* Card 2 */}
          <div className="relative w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 text-center hover:bg-pink-100 transition-colors duration-300 ease-in-out cursor-pointer">
            <h2 className="text-2xl font-bold text-gray-800">Physical Health</h2>
            <p className="text-gray-600 mt-2">Learn about physical activities and diet to keep your body fit.</p>
            <img
              src="https://images.pexels.com/photos/669577/pexels-photo-669577.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Physical Health"
              className="absolute -top-10 right-10 h-16 w-16 rounded-full border-4 border-white"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
