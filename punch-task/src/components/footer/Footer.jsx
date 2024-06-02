import './Footer.css'
const Footer = () => {
    return (
           <>
            <div className="landing-page">
            <div className="header-section">
                <div className="header-content">
                    <h1>Need a job done, and done well? Get started</h1>
                    <button className="start-button">
                        <img src="src\assets\Frame 626624 (1).png" alt="Start Icon" />
                    </button>
                </div>
            </div>
            <div className="footer">
                <div className="footer-left">
                    <img src="src\assets\Group 625177.png" alt="Zwilt Logo" className="zwilt-logo" />
                    <p>We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</p>
                    <div className="footer-buttons">
                        <button className="hire-now">Hire now</button>
                        <button className="apply-now">Apply now</button>
                    </div>
                </div>
                <div className="footer-right">
                <div className='connect'>
                <p>Connecting the right people to the right businesses.</p>
            </div>
            <div className='footer-container'>
            <div className="footer-section">
                        <h4>PLATFORM</h4>
                        <ul>
                            <li>Find Work</li>
                            <li>Find Talent</li>
                            <li>Categories</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>CATEGORIES</h4>
                        <ul>
                            <li>Data Science</li>
                            <li>IT & Networking</li>
                            <li>Web & Mobile</li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>HELP</h4>
                        <ul>
                            <li>FAQ's</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>GET IN TOUCH @</h4>
                        <ul>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
            </div>
                </div>
                
            </div>
            <div className="footer-bottom">
                    <p>All rights reserved by Zwilt</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms and Conditions</a>
                    </div>
                </div>
        </div>
        <div className='slant3'></div>
        <div className='slant4'></div>
           </>
    );
}

export default Footer;
