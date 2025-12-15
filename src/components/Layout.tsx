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