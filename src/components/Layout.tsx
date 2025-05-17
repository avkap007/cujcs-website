import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-1 w-full px-4">
        <div className="w-full mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
