export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-16 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-gray-200 mb-4">
        📞 Get in Touch 📧
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-xl text-center">
        Have questions or feedback? We’d love to hear from you! Reach out
        through the form below.
      </p>

      <div className="w-full max-w-lg bg-gradient-to-r from-purple-700 to-blue-600 rounded-lg shadow-2xl p-1">
        <div className="bg-gray-900 rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-200 text-left mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-md border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-200 text-left mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-md border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-gray-200 text-left mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-md border border-gray-700 h-32 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-md hover:opacity-90 transition duration-300"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
