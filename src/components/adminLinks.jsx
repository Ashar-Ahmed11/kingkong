import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";

const AdminLinks = ({mobile}) => {
        const location = useLocation();
    
    return (
        <>
            <li  data-bs-dismiss={mobile&&"offcanvas"} className="nav-item w-100 py-2">
                <Link
               
                    to="/dashboard/basicsettings"
                    className={`customlinks nav-link ${location.pathname === "/dashboard/basicsettings" ? "active" : ""}`}
                >
                    <i className="fs-4 bi-house"></i>{" "}
                    <span className="ms-1 text-light">Basic Settings</span>
                </Link>
            </li>

            <li  data-bs-dismiss={mobile&&"offcanvas"} className="nav-item w-100 py-2">
                <Link
              
                    to="/dashboard/homepage"
                    className={`customlinks nav-link ${location.pathname.startsWith("/dashboard/homepage") ? "active" : ""}`}
                >
                    <i className="fs-4 bi-house"></i>{" "}
                    <span className="ms-1 text-light">Home</span>
                </Link>
            </li>
            <li  data-bs-dismiss={mobile&&"offcanvas"} className="nav-item w-100 py-2">
                <Link
              
                    to="/dashboard/agency"
                    className={`customlinks nav-link ${location.pathname.startsWith("/dashboard/agency") ? "active" : ""}`}
                >
                    <i className="fs-4 bi-house"></i>{" "}
                    <span className="ms-1 text-light">Agency</span>
                </Link>
            </li>
            
     
        </>
    )
}

export default AdminLinks