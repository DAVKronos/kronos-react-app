import React from "react";
import ShortNewsItem from "./ShortNewsItem";
import NewsItemCarousel from "./NewsItemCarousel";
import {Spinner} from 'react-bootstrap';
import {NewsItemsCollection} from "../../utils/rest-helper";

class NewsItems extends React.Component {
    state = {
        items: [],
        loading: true
    }

    async componentDidMount() {
        let items = await NewsItemsCollection.getAll();
        this.setState({items, loading: false});
    }


    render() {
        if (this.state.loading) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>;
        }

        const items = this.state.items;


        return <div>
            <NewsItemCarousel items={items.slice(0, 2)}/>
            {items.map(item => {
                return <ShortNewsItem item={item}/>
            })}
        </div>
    }
}

export default NewsItems;