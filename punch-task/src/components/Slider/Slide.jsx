import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slideshow.css';

const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <div className="slideshow-2">
            <Slider {...settings}>
            <div className="slide1">
    <div className='flex'>
        <div className="slide1-header">
            <h1 className="slide1-title">Why Choose Zwilt?</h1>
            <p className="slide1-description">We take complex hiring processes - and simplify them. connecting you to the world's highly qualified talent pool</p>
        </div>
        <div className="slide1-content">
            <div className="slide1-content-left">
                <h1 className="slide1-content-title">Onboard without the risk.</h1>
                <p className="slide1-content-text">- we pick the best for you to select</p>
                <p className="slide1-content-text">- Thousands of vetted candidates in dozens of categories</p>
                <p className="slide1-content-text">- Risk-free resource swapping for the best fit</p>
                <img src="src/assets/Vector.png" alt="Slide 1" className="slide1-image1" />
            </div>
            <div className="slide1-content-right">
                <img src="src/assets/Group 626340.png" alt="Slide 1" className="slide1-image2" />
            </div>
        </div>
    </div>
</div>

                <div className="slide2">
                    <div className='flex'>
                    <div className="slide2-header">
                        <h1 className="slide2-title">Why Choose Zwilt?</h1>
                        <p className="slide2-description">We take complex hiring processes - and simplify them. connecting you to the world's highly qualified talent pool</p>
                    </div>
                    <div className="slide2-content">
                        <div className="slide2-content-left">
                            <h1 className="slide2-content-title">An open book</h1>
                            <p className="slide2-content-text">- Easy and transparent one to one chat with candidates</p>
                            <p className="slide2-content-text">- Simple and convenient payment methods</p>
                            <p className="slide2-content-text">- Review past ratings</p>
                            <img src="src/assets/Vector.png" alt="Slide 2" className="slide2-image1" />
                        </div>
                        <div className="slide2-content-right">
                            <img src="src/assets/Frame 626665.png" alt="Slide 2" className="slide2-image2" />
                            <img src="src/assets/Group 626502.png" alt="Slide 2" className="slide2-image3" />
                            <img src="src/assets/Group 626506.png" alt="Slide 2" className="slide2-image4" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="slide3">
    <div className='flex'>
        <div className="slide3-header">
            <h1 className="slide3-title">Why Choose Zwilt?</h1>
            <p className="slide3-description">We take complex hiring processes - and simplify them. connecting you to the world's highly qualified talent pool</p>
        </div>
        <div className="slide3-content">
            <div className="slide3-content-left">
                <h1 className="slide3-content-title">Stay in the loop.</h1>
                <p className="slide3-content-text">- Track your staff activity down to every minute with screenshots.</p>
                <p className="slide3-content-text">- Comprehensive timesheet data to process payment</p>
                <p className="slide3-content-text">- Create projects to organize and assign tasks more effectively</p>
                <img src="src/assets/Vector.png" alt="Slide 3" className="slide3-image1" />
            </div>
            <div className="slide3-content-right">
                <img src="src/assets/Activity bar.png" alt="Slide 3" className="slide3-image2" />
                <img src="src/assets/Group 626504.png" alt="Slide 3" className="slide3-image3" />
                <img src="src/assets/Activity bar-1.png" alt="Slide 3" className="slide3-image4" />
                <img src="src/assets/Group 626506.png" alt="Slide 3" className="slide3-image5" />
            </div>
        </div>
    </div>
</div>

            </Slider>
        </div>
    );
}

export default Slideshow;
