import React from "react";
import {Carousel} from "react-bootstrap";

const NewsItemCaroursel = ({items}) => {
    return <Carousel>
        {items.map(item => {
            return <Carousel.Item key={item.id} style={{height: 260}}>
                <img
                    className="d-block w-100"
                    src={item.large_img}
                    alt={item.title}
                />
                <Carousel.Caption>
                    <h3>{item.title}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        })}


    </Carousel>
        ;
};

export default NewsItemCaroursel;