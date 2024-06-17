import React from 'react';
import '../assets/greeting.css';

function Greeting() {
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding leading zero
        const day = ('0' + date.getDate()).slice(-2); // Adding leading zero
        const weekday = date.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
        return `${year}.${month}.${day}(${weekday})`;
    };

    const currentDate = formatDate(new Date());

    return (
        <section id="headline" className="section">
            <div className="greeting wrapper">
                <p>&quot;Hello, Sharing world!&quot;</p>
            </div>
            <div className="wrapper">
                <h1 className="h1-with-background">RABEDESANA High School<br/>For Technology<br/> 2024</h1>
                <p className="description">RBD School is a premier high school in Madagascar specializing in computer science,
                    English as the main language, and chess is part of the program.
                    This school will help you or your children to be international workers in the future. 
                    Join us today and discover the benefits of our curriculum.
                </p>
                <p className="date">{currentDate}</p>
                <p className="place">@ Port-Berge, Madagascar</p>
            </div>
        </section>
    );
}

export default Greeting;
