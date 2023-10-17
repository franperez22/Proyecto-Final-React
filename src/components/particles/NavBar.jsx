import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavBar () {
  const routes = [
    {
      id: 0,
      name: 'Home',
      path: '/',
    },
    {
      id: 1,
      name: 'About',
      path: '/about',
    },
    {
      id: 2,
      name: 'Contact',
      path: '/contact',
    },
    {
      id: 3,
      name: 'Shop',
      path: '/shop',
    },
  ];

  return (
    <header className="flex justify-center h-24">
      <nav className="container flex justify-between items-center py-8">
        <div>
          <img className="w-14" src="/images/logoCospe.png" alt="logo" />
        </div>
        <ul className="navbar-list list-none flex gap-4 justify-center items-center">
          {routes.map(route => (
            <li key={route.id}>
              <NavLink className='navbar-list-item' to={route.path}>
                {route.name}
                <div className='navbar-list-item-line'></div>
              </NavLink>
            </li>
          ))}
          <li className="flex items-center">
            <FontAwesomeIcon className="w-7 h-7 cursor-pointer" icon={faBagShopping} />
            (0)
          </li>
        </ul>
      </nav>
    </header>  
  )
}