import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/"  >Take Me Home</Link>
                <Link className="link" to="/bugs" >Bugs</Link>
            </ul>
        </div>
    )
}

export default NavBar