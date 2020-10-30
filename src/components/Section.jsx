import React from 'react';
import img1 from '../assets/images/icon-online.svg';
import img2 from '../assets/images/icon-budgeting.svg';
import img3 from '../assets/images/icon-onboarding.svg';
import img4 from '../assets/images/icon-api.svg';

const Section = () => {
    return ( 
    <section>
        <div className="container">
            <div className="section-content">
                <h1>Why choose Easybank?</h1>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                <div className="grid">
                   <div className="grid-section">
                        <img src={img1} alt="icon-online"/>
                        <h3>Online Banking</h3>
                        <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div> 
                    <div className="grid-section">
                        <img src={img2} alt="icon-online"/>
                        <h3>Simple Budgeting</h3>
                        <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    </div> 
                    <div className="grid-section">
                        <img src={img3} alt="icon-online"/>
                        <h3>Fast Onboarding</h3>
                        <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div> 
                    <div className="grid-section">
                        <img src={img4} alt="icon-online"/>
                        <h3>Open API</h3>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div> 
                </div>
            </div>
        </div>
    </section>    
     );
}
 
export default Section;