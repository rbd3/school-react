import React from "react";
import '../assets/program.css';

function Program() {
    return (
        <section id="about">
            <div id="program">
                <div className="wrapper">
                    <h2 className="title max-font-26">Main Program</h2>
                    <div className="tag">
                        <div className="program-tag">
                            <i className="program-img fa-solid fa-hands-holding-child card-icon"></i>
                            <h3 className="program-title">Education</h3>
                            <p className="program-detail">At RBD School, we revel in a culture of learning by doing, inculcating in the student the growth mindset.
                                We foster a learning environment where our students seamlessly blend analytical rigor with boundless curiosity 
                                and playful imagination. 
                            </p>
                        </div>
                        <div className="program-tag">
                            <i className="program-img fa-solid fa-tent card-icon"></i>
                            <h3 className="program-title">Admissions + Aids</h3>
                            <p className="program-detail">You can do your demand for admission online!</p>
                        </div>
                        <div className="program-tag">
                            <i className="program-img fa-solid fa-dumbbell card-icon"></i>
                            <h3 className="program-title">Alumni</h3>
                            <p className="program-detail">You'll see here about some of the graduates and their testimony about the school</p>
                        </div>
                        <div className="program-tag">
                            <i className="program-img fa-solid fa-person-rays card-icon"></i>
                            <h3 className="program-title">Activities</h3>
                            <p className="program-detail">Here speak about the Activities that the school prepares or takes part in</p>
                        </div>
                    </div>
                    <button type="button" className="join-btn">Join RBD School Now</button>
                    <a href="#" className="desktop-link max-font-26">See the whole program</a>
                </div>
            </div>
        </section>
    );
}

export default Program;
