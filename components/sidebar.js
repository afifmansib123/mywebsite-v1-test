import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const SideBar = () => {
    const router = useRouter()
    const isActive = (r) => {
        if(r === router.pathname){
            return "active"
        }
        else{
            return ""
        }
    }
    return(
        <div>
            <nav className="nav flex-column">
                <Link legacyBehavior href="/Importer" >
                <a className={"nav-link" + isActive('/Importer')}>Impoter</a>
                </Link>
                <Link legacyBehavior href="/Exporter">
                <a className={"nav-link" + isActive('/Exporter')}>Exporter</a>
                </Link>
            </nav>
        </div>
    )
}

export default SideBar