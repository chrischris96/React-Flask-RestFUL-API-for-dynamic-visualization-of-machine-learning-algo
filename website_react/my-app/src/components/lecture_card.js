import React from 'react';
// import logo from '../styles/logo.svg';
import '../styles/lecture_card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class LectureCard extends React.Component {

    render() {
        return (
            <React.Fragment>

                <div className="parallax1"></div>
                <div className="parallextext">
                    <ScrollAnimation
                        duration={1.2}
                        animateOut="fadeOut"
                        animateIn="fadeIn"
                        offset={758}
                        animatePreScroll={true}>
                        <h3>
                            <Typewriter
                                wrapperClassName="wrapperstring"
                                cursorClassName="cursorstring"
                                options={{
                                    strings: ['Giving a lecture at the African Institute for Mathematical Scienes'],
                                    autoStart: true,
                                    loop: true,
                                    cursor: "&block;",
                                    delay: 50,

                                }}
                            />
                        </h3>
                    </ScrollAnimation>

                </div>
                <div className="parallax2">
                    <div id="parallexdetailsleft4">
                        <h5>Details</h5>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default LectureCard