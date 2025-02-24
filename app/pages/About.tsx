export default function About() {
  return (
    <div className="container mx-auto px-6 py-16 min-h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold text-gray-200 mb-4">🌟 About Us 🌟</h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl">
        We are committed to delivering exceptional experiences through creative
        design, robust code, and innovative technology. Explore our app and
        discover what sets us apart.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-purple-100 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">
            Our Mission 🚀
          </h3>
          <p className="text-gray-600">
            To build user-friendly, responsive web applications that make life
            easier and more enjoyable.
          </p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Our Vision 👓
          </h3>
          <p className="text-gray-600">
            Leading the way in web innovation, one project at a time.
          </p>
        </div>
        <div className="bg-green-100 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Our Values 🌱
          </h3>
          <p className="text-gray-600">
            Integrity, collaboration, creativity, and dedication to continuous
            improvement.
          </p>
        </div>
      </div>
    </div>
  );
}
