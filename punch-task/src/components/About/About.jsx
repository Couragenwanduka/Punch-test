import './About.css';
import Slideshow from '../Slider/Slide';

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="testimonial">
                    <div className="testimonial-header">
                        <p>How it worked for Jason <span className="icon-container"><img alt="icon" src='\assets\image 6.png' className='face-Icon'/></span> at</p>
                        <img className="company-logo" alt="company logo" src='\assets\Group.png'/>
                    </div>
                    <div className="testimonial-content">
                        <p>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.</p>
                    </div>
                    <div className="testimonial-icons">
                        <span className="icon"><img alt="icon" src='\assets\Vector.png'/></span>
                        <span className="icon"><img alt="icon" src='\assets\Vector.png'/></span>
                    </div>
                </div>
                <div className="review">
                    <div><img src='\assets\“.png' className='qoutes'/></div>
                    <div className="review-header">
                        <span className="profile-pic"><img alt="profile" src='\assets\Frame 626655.png' className='hover'/><img className="for-hover" alt="company logo" src='\assets\Group.png'/> </span>
                       <span>
                         <p className="name">Jason Makki</p>
                        <p className="title">Engineer at GROOVE</p>
                        <p className="location">San Francisco</p></span>
                    </div>
                    <div className="review-content">
                        <p>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters.</p>
                    </div>
                </div>
            </div>
            <div className='slant-about'></div>
            <div className="process-container">
                        <div className="process-intro">
                            <h1>How we ensure you’re in good hands.</h1>
                            <p>With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.</p>
                        </div>
                        <div className="process-steps">
                            <div className="process-step">
                                <span className="step-icon"><img src='/assets/play.png' alt="Step 1 Icon"/></span>
                                <span className="step-title">Step 1: Resume Screening</span>
                            </div>
                            <div className="process-step2">
                                <span>
                                        <span className="step-icon2"><img src='\assets\play white.png' alt="Step 2 Icon"/></span>
                                        <span className="step-title">Step 2: Video Interview</span>
                                </span>
                                <span className="step-description">Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.</span>
                            </div>
                            <div className="process-step">
                                <span className="step-icon"><img src='/assets/play.png' alt="Step 3 Icon"/></span>
                                <span className="step-title">Step 3: Technical Evaluation</span>
                            </div>
                            <div className="process-step">
                                <span className="step-icon"><img src='/assets/play.png' alt="Step 4 Icon"/></span>
                                <span className="step-title">Step 4: Application Review</span>
                            </div>
                            <div className="process-step">
                                <span className="step-icon"><img src='/assets/play.png' alt="Step 5 Icon"/></span>
                                <span className="step-title">Step 5: Lets get to work</span>
                            </div>
                        </div>
                    </div>

                    <div className="journey-start">
                        {/* <h1>Start your Journey today</h1> */}
                        <img src='/assets/Group 626337.png' alt="Start your Journey"/>
                    </div>
                    <div className='backgound'>
                    <Slideshow />
                    </div>
                   

        </>
    );
}

export default About;
