export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Welcome to Our Awesome App!
        </h1>
        <p className="text-xl text-gray-200 mb-10">
          Discover the power of React Router 7 combined with Tailwind CSS to
          create stunning and responsive websites quickly.
        </p>

        <div className="flex justify-center space-x-4">
          <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-purple-600 transition duration-300">
            Learn More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">
              Fast Setup ⚡️
            </h3>
            <p className="text-gray-600">
              Quickly bootstrap your project with React Router and Tailwind CSS.
            </p>
          </div>

          <div className="bg-green-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">
              Responsive 📱
            </h3>
            <p className="text-gray-600">
              Fully responsive designs that look amazing on all devices.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">
              Customizable 🎨
            </h3>
            <p className="text-gray-600">
              Easily customize styles and routes to fit your needs perfectly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
