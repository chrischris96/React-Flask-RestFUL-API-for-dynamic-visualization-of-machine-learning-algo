import React from 'react';
import TopAppBar, {
    TopAppBarFixedAdjust,
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import '../styles/topappbar.css'
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import { Row, Col } from 'react-bootstrap';
import Icon from './bilder/smaller_cluj_qu.jpg'

import GitHub from '../styles/bilder/GitHub-Mark/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png'
import LinkedIn from '../styles/bilder/LinkedIn-Logos/LinkedIn-Logos/LI-In-Bug.png'


class Header  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderIcon: false,
        };
        this.renderIcon = this.renderIcon.bind(this);
        this.onClickHeart = this.onClickHeart.bind(this);
        this.onClickphoto = this.onClickphoto.bind(this);
    }

    onClickHeart() {
        this.setState((state) => {
            return {renderIcon: true }
        });
    }

    onClickphoto(){
        this.setState((state) => {
            return { renderIcon: false }
        });
    }

    renderIcon() {
        if (this.state.renderIcon) {

            return (<MaterialIcon onClick={this.onClickphoto}
                icon='favorite_border'
            />);
        } else {

            return (<img onClick={this.onClickHeart} id="icon" src={Icon} alt="profile pic"></img>);
        } 
    }

    render() {
        return (
            <Row>
                <Col className="fullsizebar">
                    <div>
                        <TopAppBar>
                            <TopAppBarRow>
                                <TopAppBarSection align='start'>

                                    <TopAppBarIcon navIcon tabIndex={0}>
                                        {this.renderIcon()}
                                    </TopAppBarIcon>
                                    <TopAppBarTitle>Chris Plitz</TopAppBarTitle>

                                    {/* <TopAppBarTitle>I   </TopAppBarTitle>
                            <TopAppBarTitle>  </TopAppBarTitle>


                            <TopAppBarIcon navIcon tabIndex={0}>
                                <MaterialIcon
                                    icon='favorite_border'
                                />
                            </TopAppBarIcon>

                            <TopAppBarTitle>Charly</TopAppBarTitle> */}

                                </TopAppBarSection>

                                <TopAppBarSection align='end' role='toolbar'>

                                    <TopAppBarIcon navIcon tabIndex={0}>
                                        <a href="https://github.com/chrischris96">
                                            <img id="icon_logo" src={GitHub} alt="GitHub"></img>
                                        </a>
                                    </TopAppBarIcon>

                                    <TopAppBarIcon navIcon tabIndex={0}>
                                        <a href="https://www.linkedin.com/in/christian-plitz-303180101/">
                                            <img id="icon_linkedin" src={LinkedIn} alt="LinkedIn"></img>
                                        </a>
                                    </TopAppBarIcon>

                                </TopAppBarSection>


                            </TopAppBarRow>
                        </TopAppBar>
                        <TopAppBarFixedAdjust>

                        </TopAppBarFixedAdjust>
                    </div>
                </Col>
            </Row>
            
        );
    }
}
export default Header