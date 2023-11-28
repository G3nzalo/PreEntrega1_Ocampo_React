import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to = '/'>
      <h3>Ecomerce</h3>
      </Link>
      <div className='Categories'>
        <NavLink to={`/category/celular`}className={({isActive})=> isActive ?'ActiveOption': 'Option'}></NavLink>
        <NavLink to={`/category/tablet`}className={({isActive})=> isActive ? 'ActiveOption': 'Option'}></NavLink>
        <NavLink to={`/category/notebook`}className={({isActive})=> isActive ? 'ActiveOption': 'Option'}></NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
