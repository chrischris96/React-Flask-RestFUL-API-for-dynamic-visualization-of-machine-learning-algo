import React from 'react';
// import logo from '../styles/logo.svg';
import '../styles/cell_card.css';
import Typewriter from 'typewriter-effect';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

class CellCard extends React.Component {

    render() {
        return (
            <React.Fragment>
            <div className="parallaxcell1"></div>
            <div className="parallextext">
                <ScrollAnimation
                    duration={1.2}
                    animateOut="fadeOut"
                    animateIn="fadeIn"

                    offset={606}
                    initiallyVisible={true}
                    animatePreScroll={false}
                >


                    <h3>
                        <Typewriter
                            wrapperClassName="wrapperstring"
                            cursorClassName="cursorstring"
                            options={{
                                strings: ['Competition winning machine learning approach for real time cell recognition for fast drug development'],
                                autoStart: true,
                                loop: true,
                                cursor: "&block;",
                                delay: 50,

                            }}
                        />
                    </h3>

                </ScrollAnimation>



            </div>
            <div className="parallaxcell2">
                <div id="parallexdetailsleft2">
                    <h5>Details</h5>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default CellCard