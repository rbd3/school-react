
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHoldingChild, faTent, faDumbbell, faPersonRays } from "@fortawesome/free-solid-svg-icons";
import '../assets/program.css';
import { Link } from "react-router-dom";

function Program() {
    return (
        <section id="about">
            <div id="program">
                <div className="wrapper">
                    <h2 className="title max-font-26">Main Program</h2>
                    <div className="tag">
                        <div className="program-tag">
                            <FontAwesomeIcon icon={faHandsHoldingChild} className="program-img card-icon" />
                            <h3 className="program-title">Education</h3>
                            <p className="program-detail">At RBD School, we revel in a culture of learning by doing, inculcating in the student the growth mindset.
                                We foster a learning environment where our students seamlessly blend analytical rigor with boundless curiosity 
                                and playful imagination. 
                            </p>
                        </div>
                        <div className="program-tag">
                            <FontAwesomeIcon icon={faTent} className="program-img card-icon" />
                            <h3 className="program-title">Admissions + Aids</h3>
                            <p className="program-detail">You can do your demand for admission online!</p>
                        </div>
                        <div className="program-tag">
                            <FontAwesomeIcon icon={faDumbbell} className="program-img card-icon" />
                            <h3 className="program-title">Alumni</h3>
                            <p className="program-detail">You&apos;ll see here about some of the graduates and their testimony about the school</p>
                        </div>
                        <div className="program-tag">
                            <FontAwesomeIcon icon={faPersonRays} className="program-img card-icon" />
                            <h3 className="program-title">Activities</h3>
                            <p className="program-detail">Here speak about the Activities that the school prepares or takes part in</p>
                        </div>
                    </div>
                    <p className="desktop-link max-font-26">
                        <Link to="/signup">
                            <button type="button" className="join-btn">Join RBD School Now</button>
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Program;
