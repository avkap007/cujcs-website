import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Editions", path: "/editions" },
    { name: "Submissions", path: "/submissions" },
    { name: "Art", path: "/art" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-pink-600">CUJCS</span>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-gray-700 hover:text-pink-600 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
