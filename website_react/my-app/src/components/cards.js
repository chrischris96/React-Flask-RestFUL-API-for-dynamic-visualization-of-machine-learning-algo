import React, { createRef } from 'react';
import '../styles/cards.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import Card, {
    CardPrimaryContent,
    CardMedia,
} from "@material/react-card"; */
import '../styles/cards.css'
import '@material/react-card/dist/card.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Intel_yam from './bilder/Intel_yam.jpg'
import cellcount from '../styles/bilder/cellcount.gif'
import journal_club from './bilder/journal_club.jpg'
import IBMEB from './bilder/IBMEB.jpg'

import { Row, Col, Container } from 'react-bootstrap';

import VisibilitySensor from "react-visibility-sensor";
import IntroCard from './intro_card'
import CellCard from './cell_card'
import IntelCard from './intel_card'
import LectureCard from './lecture_card'
import IbmCard from './ibm_card'
import ProjectCard from './project_card'


class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
        };
        this.onChange = this.onChange.bind(this);

    }
    onChange() {
        this.setState((state) => {
            return { isVisible: false }
        });
    }


    render() {

        return (

            <Container>
                <Row className="expansion">
                    <Col className="fullsizecard">
                        <div><p className="arrow"> <ExpandMoreIcon/></p></div>

                        <IntroCard/>
                        <CellCard/>
                        <IntelCard/>
                        <LectureCard/>
                        <IbmCard/>
                        <ProjectCard/>

                    </Col>
                </Row>
            </Container>


        );
    }
}


export default Cards











































// return (

//     <Container>
//         <Row className="expansion">
//             <Col className="fullsizecard">
//                 <div>
//                     <p className="arrow"> <ExpandMoreIcon /> </p>
//                 </div>

//                 {/* <div className="parallax_black1"></div> */}

//                 <div className="parallextext">
//                     <h3>
//                         <Typewriter
//                             wrapperClassName="wrapperstring"
//                             cursorClassName="cursorstring"
//                             options={{
//                                 strings: ['Welcome to my website where I showcase my work.'],
//                                 autoStart: true,
//                                 loop: true,
//                                 cursor: "&block;",
//                                 delay: 50,
//                             }}
//                         />

//                     </h3>
//                 </div>

//                 {/* <div className="parallax_black2">
//                             <div id="parallexdetailsleft1">
//                                 <h5>Details</h5>
//                             </div>
//                         </div> */}

//                 {/* <div className="parallaxcell1"></div> */}
//                 <div className="parallextext">
//                     <ScrollAnimation
//                         duration={1.2}
//                         animateOut="fadeOut"
//                         animateIn="fadeIn"

//                         offset={606}
//                         initiallyVisible={true}
//                         animatePreScroll={false}
//                     >


//                         <h3>
//                             <Typewriter
//                                 wrapperClassName="wrapperstring"
//                                 cursorClassName="cursorstring"
//                                 options={{
//                                     strings: ['Competition winning machine learning approach for real time cell recognition for fast drug development'],
//                                     autoStart: true,
//                                     loop: true,
//                                     cursor: "&block;",
//                                     delay: 50,

//                                 }}
//                             />
//                         </h3>

//                     </ScrollAnimation>



//                 </div>
//                 {/* <div className="parallaxcell2">
//                         <div id="parallexdetailsleft2">
//                             <h5>Details</h5>
//                         </div>
//                         </div> */}

//                 {/* <div className="parallaxintel1"></div> */}
//                 <div className="parallextext">
//                     <ScrollAnimation
//                         duration={1.2}
//                         animateOut="fadeOut"
//                         animateIn="fadeIn"
//                         offset={758}
//                         animatePreScroll={true}>
//                         <h3>
//                             <Typewriter
//                                 wrapperClassName="wrapperstring"
//                                 cursorClassName="cursorstring"
//                                 options={{
//                                     strings: ['Programming at Intel Communication and Devices Group later sold to Apple'],
//                                     autoStart: true,
//                                     loop: true,
//                                     cursor: "&block;",
//                                     delay: 50,

//                                 }}
//                             />
//                         </h3>

//                     </ScrollAnimation>
//                 </div>
//                 {/* <div className="parallaxintel2">
//                         <div id="parallexdetailsleft3">
//                             <h5>Details</h5>
//                         </div>
//                         </div> */}

//                 {/* <div className="parallax1"></div> */}
//                 <div className="parallextext">
//                     <ScrollAnimation
//                         duration={1.2}
//                         animateOut="fadeOut"
//                         animateIn="fadeIn"
//                         offset={758}
//                         animatePreScroll={true}>
//                         <h3>
//                             <Typewriter
//                                 wrapperClassName="wrapperstring"
//                                 cursorClassName="cursorstring"
//                                 options={{
//                                     strings: ['Giving a lecture at the African Institute for Mathematical Scienes'],
//                                     autoStart: true,
//                                     loop: true,
//                                     cursor: "&block;",
//                                     delay: 50,

//                                 }}
//                             />
//                         </h3>
//                     </ScrollAnimation>

//                 </div>
//                 {/* <div className="parallax2">
//                         <div id="parallexdetailsleft4">
//                             <h5>Details</h5>
//                         </div>
//                         </div> */}

//                 {/* <div className="parallaxibm1"></div> */}

//                 <div className="parallextext">
//                     <ScrollAnimation
//                         duration={1.2}
//                         animateOut="fadeOut"
//                         animateIn="fadeIn"
//                         offset={758}
//                         animatePreScroll={true}>
//                         <h3>
//                             <Typewriter
//                                 wrapperClassName="wrapperstring"
//                                 cursorClassName="cursorstring"
//                                 options={{
//                                     strings: ['IBM Extreme Blue:', 'Presenting our work on a business trip to IBM executives'],
//                                     autoStart: true,
//                                     loop: true,
//                                     cursor: "&block;",
//                                     delay: 50,

//                                 }}
//                             />
//                         </h3>
//                     </ScrollAnimation>
//                 </div>
//                 {/* <div className="parallaxibm2">
//                         <div id="parallexdetailsleft5">
//                             <h5>Details</h5>
//                         </div>
//                         </div> */}
//             </Col>
//         </Row>
//     </Container>


// );