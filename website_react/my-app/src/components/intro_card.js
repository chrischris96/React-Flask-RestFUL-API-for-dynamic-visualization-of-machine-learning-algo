import React from 'react';
// import logo from '../styles/logo.svg';
import '../styles/intro_card.css';
import '../styles/intro_card.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';

class IntroCard extends React.Component {

    render() {
        return (

            <React.Fragment>
                <div className="parallax_black1"></div>

                <div className="parallextext">
                    <h3>
                        <Typewriter
                            wrapperClassName="wrapperstring"
                            cursorClassName="cursorstring"
                            options={{
                                strings: ['Welcome to my website where I showcase my work.'],
                                autoStart: true,
                                loop: true,
                                cursor: "&block;",
                                delay: 50,
                            }}
                        />

                    </h3>
                </div>

                <div className="parallax_black2">
                    <div id="parallexdetailsleft1">
                        <h5>Details</h5>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default IntroCard