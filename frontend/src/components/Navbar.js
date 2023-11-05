import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="menu">
        <div className="logo">
          <a href="/">Coppington</a>
        </div>
        <ul>
          <li>
            <a href="/" className=''>Top Picks</a>
          </li>
          <li>
            <a href="/" className=''>Listings</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;