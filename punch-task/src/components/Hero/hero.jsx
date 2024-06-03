import { useState } from "react";
import './Hero.css'

const Hero=()=>{
    const[inputValue , setInputValue]=useState('');
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    return(
<>
<div className="Hero">
                <div className="first-text">
                    <h1>Finding the right fit <span><img src="assets\zwilt-tba-1-01 2.png"/></span> has never been easier.</h1>
                </div>
                <div className="second-text">
                    <p>
                        with our rigorous pre-vetting process, you will never have to worry about finding the ideal candidate ever again.
                    </p>
                </div>
                <div className="text-box">
                    <input 
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      onFocus={() => setInputValue(inputValue)} 
                      placeholder=""
                    />
                     {!inputValue && (
                            <div className="placeholder">
                            Looking for <span>design</span>
                            </div>
                        )}
                    <button><img src="public\assets\Frame 626624.png"/></button>
                </div>
                <div className="table-div">

                    <div className="table-first"><div className="divit"><span className="it">IT & Development</span></div><span className="design">Design and Creative</span></div>
                    <table>
                        <tr>
                            <td>Python Developer</td>
                            <td>Data Scientist</td>
                            <td>Shopify Developer</td>
                        </tr>
                        <tr>
                            <td>Shopify Developer</td>
                            <td>Front End Developer</td>
                            <td>Python Developer</td>
                        </tr>
                        <tr>
                            <td>MERN Stack Developer</td>
                            <td>Shopify Developer</td>
                            <td>Full Stack Developer</td>
                        </tr>
                        <tr>
                            <td>Full Stack Developer</td>
                            <td>Python Developer</td>
                            <td>Explore More</td>
                        </tr>
                    </table>
                </div>
         </div>
         <div className="slanted-line">
            <img src="public\assets\Union.png" className="slantimg"/>
         </div>
 <div className='slant'></div>

</>
    )
}

export default Hero;