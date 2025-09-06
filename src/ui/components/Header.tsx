import { Link, NavLink } from "react-router-dom";
import { useThemeContext } from "../../ix/stores/ThemeProvider";
import { useState, useEffect } from "react";

export const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-1 hover:text-blue-500 text-lg ${
    isActive ? "text-blue-500 font-semibold" : ""
  }`;
  
export default function Navbar() {
  const { toggle, darkMode } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white dark:bg-slate-800 shadow"
          : "bg-transparent dark:bg-transparent"
      } p-4 flex items-center justify-between gap-4`}
    >
      <div>
        <Link to="/" className="flex items-center gap-1">
			<img src="/assets/images/logo.png" className="h-7 w-7 object-cover rounded" alt="nexa-logo" />
		  <h1 className="text-2xl font-bold">
			<span className="text-blue-500">Ne</span>
			<span className="text-yellow-500">xa</span>
		  </h1>
		</Link>
      </div>
      <div className="flex items-center gap-6">
		<nav className="flex items-center gap-4">
		  <NavLink  to="/" className={navLinkClass}>
			Home
		  </NavLink >
		  <NavLink  to="/app1" className={navLinkClass}>
			DataList
		  </NavLink >
		  <NavLink  to="/app2" className={navLinkClass}>
			TodoList
		  </NavLink >
		</nav>
        <button onClick={toggle} className="text-yellow-500 cursor-pointer">
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
              <path fill="currentColor" fillRule="evenodd" d="M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
              <path fill="currentColor" d="M6.083 15.25a6.75 6.75 0 1 1 11.835 0H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" />
              <path fill="currentColor" fillRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2c.463 0 .54.693.143.933a6.5 6.5 0 1 0 8.924 8.924c.24-.396.933-.32.933.143c0 1.138-.19 2.231-.54 3.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.54A10 10 0 0 1 2 12"/>
              <path fill="currentColor" d="M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zM8 21.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274z" />
              <path fill="currentColor" d="M16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
