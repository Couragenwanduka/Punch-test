import './Benefit.css'
const Benefit = () => {
    return (
       <>
       
        <div className="benefit-container">
            <div className="intro">
                <p>Your one-stop marketplace for finding <span>the talent your business needs.</span></p>
            </div>
            <div className="categories">
                <div className="category">
                    <div className="category-info">
                        <p className='findDev'>Find Dev and IT professionals to scale your business.</p>
                        <div className="info-details">
                            <p><img className="icon-info" src="assets\Vector (1).png" alt="Skills Icon"/> 989 Skills</p>
                            <p><img className="icon-info" src="assets\Vector (2).png" alt="Sub-Categories Icon"/> 45 Sub-Categories</p>
                        </div>
                        <p className='info'><img className="icon-info" src="assets\Vector (3).png" alt="Profiles Icon"/> 1011 Profiles</p>
                    </div>
                    <div className='skill-container' >
                        <p>IT & Development</p>
                        <div className="skills">
                                <div className="skill">
                                    <span className='imageBackground'>
                                    <img className="icon" src="assets/pexels-christina-morillo-1181424-removebg-preview 1.png" alt="Skill Icon" />
                                    </span>
                                    <span>Shopify</span>
                                    <span> Developer</span>
                                </div>
                                <div className="skill">
                                    <span  className='imageBackground'>
                                    <img className="icon" src="assets/pexels-puwadon-sangngern-13419240-removebg-preview 1.png" alt="Skill Icon" />
                                    </span>
                                    <span>Magento </span>
                                    <span>Developer</span>
                                </div>
                                <div className="skill">
                                <span  className='imageBackground'>
                                    <img className="icon" src="assets/image 244.png" alt="Skill Icon" />
                                    </span>
                                    <span>Data</span>
                                    <span>Scientist</span>
                                </div>
                                <div className="skill">
                                <span  className='imageBackground'>
                                    <img className="icon" src="assets/image 247.png" alt="Skill Icon" />
                                    </span>
                                    <span>Webflow </span>
                                    <span>Developer</span>
                                </div>
                                <div className="skill">
                                <span  className='imageBackground'>
                                    <img className="icon" src="assets/image 246.png" alt="Skill Icon" />
                                    </span>
                                    <span>Dot Net</span>
                                    <span>Developer</span>
                                </div>
                                <div className="skill">
                                <span  className='imageBackground'>
                                    <img className="icon" src="assets/Vector.png" alt="Skill Icon" />
                                    </span>
                                </div>
                            </div>

                    </div>
                </div>
                <div className="category">
                    <div className="category-info">
                        <p className='findDev'>Explore Creative individuals with a keen eye for detail.</p>
                        <div className="info-details">
                            <p><img className="icon-info" src="assets\Vector (1).png" alt="Skills Icon"/> 989 Skills</p>
                            <p><img className="icon-info" src="assets\Vector (2).png" alt="Sub-Categories Icon"/> 45 Sub-Categories</p>
                        </div>
                        <p className='info'><img className="icon-info" src="assets\Vector (3).png" alt="Profiles Icon"/> 1011 Profiles</p>
                    </div>
                    <div className='skill-container2' >
                    <p>Design and Creative</p>
                    <div className="skills">
                                
                                <div className="skill">
                                    <span className='imageBackground'>
                                        <img className="icon" src="assets/Vector.png" alt="Skill Icon" />
                                    </span>
                                   
                                </div>
                                <div className="skill">
                                    <span className='imageBackground'>
                                        <img className="icon" src="assets/image 248.png" alt="Skill Icon" />
                                    </span>
                                    <span>UX</span>
                                    <span> Designer</span>
                                    
                                </div>
                                <div className="skill">
                                    <span className='imageBackground'>
                                        <img className="icon" src="assets/image 249.png" alt="Skill Icon" />
                                    </span>
                                    <span>Graphics</span>
                                    <span>Designer</span>
                                    
                                </div>
                                    <div className="skill">
                                        <span className='imageBackground'>
                                            <img className="icon" src="assets/image 250.png" alt="Skill Icon" />
                                        </span>
                                        <span>Unreal</span>
                                        <span>Engine</span>
                                    </div>
                                    <div className="skill">
                                        <span className='imageBackground'>
                                            <img className="icon" src="assets\image 249 (1).png" alt="Skill Icon" />
                                        </span>
                                        <span>Illustration</span>
                                        <span>Artist</span>
                                    </div>
                                    <div className="skill">
                                        <span className='imageBackground'>
                                            <img className="icon" src="assets/image 251.png" alt="Skill Icon" />
                                        </span>
                                        <span>Cinema</span>
                                        <span>4D</span>
                                    </div>
                                </div>
                                </div>

                </div>
            </div>
            <div className="explore-more">
                <div className='exploreImage'><div className='imageDiv'><img src="assets\Frame 626624 (2).png" alt="Explore More Icon"/></div> <p>Explore More</p></div>
                <div className='to-explore'><span>30 More</span> to explore</div>
            </div>
       
        </div>
        <div className='slant2'></div>
        
       </>
    );
}

export default Benefit;
