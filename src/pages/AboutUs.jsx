import Navbar from "../components/Navbar";
import AboutImg from "../assets/AboutImg.png"; 

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-25 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">About RasoiWay</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover our journey, passion for food, and the story behind your favorite recipe platform.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
       <img
  src={AboutImg}
  alt="Our Kitchen"
  className="rounded-2xl shadow-lg w-90 h-90 object-cover mx-auto"
/>



        {/* Right - Text */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Why We Created RasoiWay</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Founded by <strong>Rahul Suwasiya</strong>, RasoiWay is built on the belief that great food should be
            accessible to everyone. Whether you're a beginner or a seasoned chef, we provide you with curated recipes,
            step-by-step instructions, and inspiration to create magic in your kitchen.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our mission is to connect people with authentic recipes and spark a love for home cooking using technology,
            simplicity, and a touch of tradition.
          </p>
        </div>
      </div>

      {/* Footer or CTA */}
      <div className="text-center bg-blue-50 py-10 px-4">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Join Our Culinary Journey</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-4">
          Be a part of our community and explore hundreds of recipes from around the world. Cook. Share. Celebrate.
        </p>
        <a
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition text-sm font-medium"
        >
          Start Exploring
        </a>
      </div>
    </>
  );
};

export default AboutUs;
