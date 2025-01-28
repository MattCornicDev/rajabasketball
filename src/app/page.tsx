import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* Le reste de votre contenu */}
      <div className="relative">
        <img
          src="./photos/casa-city-finance.png"
          alt="logo raja athletic"
          className="w-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />{" "}
        {/* Superposition pour assombrir l'image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold bg-opacity-50 p-4 rounded">
            Site en construction !
          </h2>
        </div>
        
        
      </div>
      <Footer />
    </div>
  );
};

export default Page;
