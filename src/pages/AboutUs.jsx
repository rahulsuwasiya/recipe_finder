import Navbar from "../components/Navbar";
import AboutImg from "../assets/AboutImg.png"; 

const AboutUs = () => {
  return (
    <>
      <Navbar />

    

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
        {/* Left - Image */}
       <img
  src={AboutImg}
  alt="Our Kitchen"
  className="rounded-2xl shadow-lg w-90 h-90 object-cover mx-auto"
/>



        {/* Right - Text */}
        <div>
          <h2 className="text-3xl font-bold text-[#009688] mb-4">Why We Created RasoiWay</h2>
          <p className="text-[#263238] leading-relaxed text-lg mb-4">
            Founded by <strong>Rahul Suwasiya</strong>, RasoiWay is built on the belief that great food should be
            accessible to everyone. Whether you're a beginner or a seasoned chef, we provide you with curated recipes,
            step-by-step instructions, and inspiration to create magic in your kitchen.
          </p>
          <p className="text-[#263238] leading-relaxed text-lg">
            Our mission is to connect people with authentic recipes and spark a love for home cooking using technology,
            simplicity, and a touch of tradition.
          </p>
        </div>
      </div>

      {/* Footer or CTA */}
      <div className="text-center bg-[#ffbab4] py-10 px-4">
        <h3 className="text-xl font-semibold text-[#009688] mb-2">Join Our Culinary Journey</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-4">
          Be a part of our community and explore hundreds of recipes from around the world. Cook. Share. Celebrate.
        </p>
        <a
          href="/"
          className="bg-[#009688] hover:bg-[#FF6F61] text-white px-6 py-3 rounded-full transition text-sm font-medium"
        >
          Start Exploring
        </a>
      </div>
    </>
  );
};

export default AboutUs;
