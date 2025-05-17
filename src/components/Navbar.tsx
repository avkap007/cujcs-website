import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center items-center py-4 bg-white shadow">
      <div className="flex gap-8">
        <Link to="/" className="text-deepRed font-bold hover:underline">Home</Link>
        <Link to="/about" className="text-deepRed font-bold hover:underline">About</Link>
        {/* Dropdown for Editions, etc. */}
      </div>
    </nav>
  );
}