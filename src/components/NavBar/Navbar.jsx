import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navcss.css";
import { Link,useNavigate  } from "react-router-dom";

import logo from '../../assets/logo.png';

function Navbar() {
    const paths=[
        {
            name:"Home",
            path:"/"
        },
        {
            name:"Robotic Bootcamp",
            path:"/roboticbootcamp"
        },
        {
            name:"Gallery",
            path:"/gallery"
        },
        {
            name:"Free Classes",
            path:"/liveclass"
        },
        {
            name:"My Account",
            path:"/account"
        },
    ]
    const navigate = useNavigate()
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    const navigatePage=(path)=>{
        navigate(path)
        showNavbar()
    }
	return (
		<header>
			 <img 
                src={logo} 
            >                
            </img>
            <div>
                <nav style={{marginRight:-40}} ref={navRef}>
                    {
                        paths.map((item,index)=>(
                            <p key={index} onClick={()=>navigatePage(item.path)} style={{fontWeight:"bold",fontSize:20}}>
                                <Link>{item.name}</Link>
                            </p>
                        ))
                    }
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
		</header>
	);
}

export default Navbar;