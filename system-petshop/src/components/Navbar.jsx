import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MdOutlinePets } from "react-icons/md";

const Navbar = () => {
    const { pathname: route } = useLocation();
    const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    console.log('Rota atual:', route);
    if (route === '/dashboard' || route === '/animalcadastro') {
      setShowRegister(false);
    } else {
      setShowRegister(true);
    }
  }, [route])


    return (
        <div>
            <nav className="container-navbar">
                <Link to='/' className='navbar-brand '>Petshop<span>System <MdOutlinePets /> </span> </Link> 
                <div className="links">
                    {showRegister && <Link to='/registrar' className='btn btn-outline-light'>Registre-se</Link>}
                    <Link to='/dashboard' className='btn btn-outline-light'>Dashboard</Link>
                    <Link to='/animalcadastro' className='btn btn-outline-light'>Cadastrar Animal</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar