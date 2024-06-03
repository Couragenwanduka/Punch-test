import './Header.css'
const Header=()=>{
    return(
    <>
        <div className="first-Container">
            <div className="main-container">
                <div><img src="assets\logo.png" className="logo"/></div>
                <nav>
                    <ul className="nav">
                        <li><a href="#">Find Work</a></li>
                        <li><a href="#">Find Talent</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
                <div className="auth-btn">
                    <button className="login">Log in</button>
                    <button className="join">Join now</button>
                </div>
            </div>
        </div>
     </>
    )
}

export default Header;