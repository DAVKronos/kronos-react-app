import React from "react";
import NewsItem from "./NewsItem";
import NewsItemCarousel from "./NewsItemCarousel";

const NewsItems = () => {
    let items = [];


    return <div>
        <NewsItemCarousel itemAmount={3}/>
        {items.map(item => {
            return <NewsItem item={item} />
        })}
    </div>
};

export default NewsItems;