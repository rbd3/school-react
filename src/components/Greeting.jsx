import React from "react";
import '../assets/greeting.css'

function Greeting() {
    return (   
        <section id="headline" className="section">
            <div className="greeting wrapper">
                <p>"Hello, Sharing world!"</p>
            </div>
            <div className="wrapper">
                <h1>RABEDESANA high School<br/>For Technology<br/> 2024</h1>
                <p className="description">RBD School is a premier high school in Madagascar specializing in computer science,
                    English as the main language, and chess is part of the program.
                    This school will help you or your children to be international workers in the future. 
                    Join us today and discover the benefits of our curriculum.
                </p>

                <p className="date">2024.05.22(Mon) ~ 26(FRI)</p>
                <p className="place">@ Port-Berge, Madagascar</p>
            </div>
        </section>
    );
}

export default Greeting;
