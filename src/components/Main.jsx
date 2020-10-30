import React from 'react';
import mockup from '../assets/images/image-mockups.png'

const Main = () => {
    return ( 
        <main>
            <div className="main-content">
                <img className="main-img" src={mockup} alt="image-mockups"/>
            
                <div>
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <button class="btn main-btn">Request Invite</button>
                </div>
            </div>
        </main>
     );
}
 
export default Main;