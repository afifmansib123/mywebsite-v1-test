import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'


function NavBar() {

    const router = useRouter()
    const isActive = (r) => {
        if(r === router.pathname){
            return "active"
        }else{
            return ""
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link legacyBehavior href="/">
                <a className="navbar-brand">Amdani-Roptani</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link legacyBehavior href = "/cart">
                            <a className={"nav-link" + isActive('/cart')}>
                                <i class="fa-duotone fa-cart-shopping"></i>Cart<span className="sr-only">(current)</span>
                            </a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link legacyBehavior href = "/signin">
                            <a className={"nav-link" + isActive('/signin')}>
                                <i class="fa-solid fa-user"></i>Sign-in<span className="sr-only">(current)</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default NavBar