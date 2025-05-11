import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "EDITIONS", path: "/editions" },
    { name: "SUBMISSIONS", path: "/submissions" },
    { name: "ART", path: "/art" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <nav style={{ 
      backgroundColor: "#352D35", 
      color: "white", 
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0
    }}>
      {/* Title at very top */}
      <div style={{ 
        width: "100%", 
        textAlign: "center", 
        padding: "20px 0"
      }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          fontWeight: 300, 
          letterSpacing: "0.05em", 
          margin: 0 
        }}>
          CANADIAN UNDERGRADUATE JOURNAL OF COGNITIVE SCIENCE
        </h1>
      </div>
      
      {/* Navigation links */}
      <div style={{ 
        borderTop: "1px solid #666", 
        borderBottom: "1px solid #666", 
        padding: "8px 0",
        textAlign: "center"
      }}>
        <table style={{ margin: "0 auto" }}>
          <tbody>
            <tr>
              {navItems.map((item) => (
                <td key={item.name} style={{ padding: "0 15px" }}>
                  <Link
                    to={item.path}
                    style={{
                      color: location.pathname === item.path ? "#f56565" : "white",
                      textTransform: "uppercase",
                      fontSize: "1.125rem",
                      fontWeight: 300,
                      letterSpacing: "0.05em",
                      textDecoration: "none"
                    }}
                  >
                    {item.name}
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </nav>
  );
}