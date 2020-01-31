import React from 'react';
import '../styles/ibm_cell.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class IbmCard extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="parallaxibm1"></div>
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
                                    strings: ['IBM Extreme Blue:', 'Presenting our work on a business trip to IBM executives'],
                                    autoStart: true,
                                    loop: true,
                                    cursor: "&block;",
                                    delay: 50,

                                }}
                            />
                        </h3>
                    </ScrollAnimation>
                </div>
                <div className="parallaxibm2">
                    <div id="parallexdetailsleft5">
                        <h5>Details</h5>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default IbmCard