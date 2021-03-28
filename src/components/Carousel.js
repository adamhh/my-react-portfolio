import React from 'react';

import Card from '../components/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import dark from '../images/DarkDespairSS.png';
import jump from '../images/jumperSS.png';
import android from '../images/androidSS.png';
import Slider from "./Slider";
import ImageSlider from "./Slider";



class Carousel extends React.Component {
    constructor(props) {
        super(props);
        let resumeData = this.props.resumeData;
        this.state = {
            items: [
                {
                    id: 0,
                    title: "test",
                    subTitle: "test1",
                    imgSrc: dark,
                    link: "test3",
                    selected: false
                },
                {
                    id: 1,
                    title: "test",
                    subTitle: "test1",
                    imgSrc: android,
                    link: "test3",
                    selected: false
                },
                {
                    id: 2,
                    title: "test",
                    subTitle: "test1",
                    imgSrc: jump,
                    link: "test3",
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
                {/*<ImageSlider/>*/}
            </Container>
        );
    }

}

export default Carousel;