export const Navbar = () => {
  return (
    <nav className="py-8 text-white flex justify-between items-center">
      <div className="text-xl font-medium cursor-pointer">
        <i className="fa-solid fa-cart-shopping mx-2"></i>GoShopping
      </div>
      <div className="flex items-center text-xs">
        <p className="mx-2 cursor-pointer">
          <i className="mx-2 fa-solid fa-eye"></i>View my Site
        </p>
        <p className="mx-2 cursor-pointer">
          <i className="mx-2 fa-solid fa-right-from-bracket"></i>Logout
        </p>
      </div>
    </nav>
  );
};
