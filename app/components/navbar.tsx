import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav
      className={"flex items-center justify-between p-4 bg-gray-200 text-black"}
    >
      <div className="flex items-center">
        <img src="kpsdev.png" alt="Logo" className="w-8 h-8 mr-2" />
        <h1 className="text-xl font-bold">Bienvenue sur la page d'accueil!</h1>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="#" className={`text-white hover:text-gray-300 text-black`}>
          Section 1
        </a>
        <a href="#" className={`text-white hover:text-gray-300 text-black`}>
          Section 2
        </a>
        <a href="#" className={`text-white hover:text-gray-300 text-black`}>
          Section 3
        </a>
      </div>
      <ThemeToggle />
    </nav>
  );
};
export default Navbar;
