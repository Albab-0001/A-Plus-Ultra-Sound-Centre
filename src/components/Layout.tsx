import { Outlet } from 'react-router-dom';
import Header from './Header'; // adjust path if needed
import Footer from './Footer'; // Make sure Footer.tsx or Footer/index.tsx exists in the same folder, or update the path accordingly

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
    <div className="-ml-4">
  <h3 className="text-2xl font-semibold mb-4 text-white">A Plus Ultrasound Centre</h3>
  <p className="text-sm">
    A modern, fully-computerized pathology and <br /> imaging center with state-of-the-art ultrasound <br /> and diagnostic technologies.
  </p>
</div>