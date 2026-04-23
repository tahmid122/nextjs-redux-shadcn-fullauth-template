import Footer from "@/components/custom/layout/Footer";
import Navbar from "@/components/custom/layout/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default layout;
