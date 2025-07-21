import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#F2F0F0] overflow-x-hidden">
      {/* Global Background Circles */}
      <img
        src="/images/stockimages/bg_circles.png"
        alt="Background Circles"
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-auto max-w-none object-contain pointer-events-none select-none z-0"
        style={{ minHeight: '100vh' }}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full px-4">
          <div className="w-full mx-auto">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
