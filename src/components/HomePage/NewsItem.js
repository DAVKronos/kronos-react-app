import React from "react";

const NewsItem = ({item}) => {
    return <div>
        <img src={item.url} />
        <article>
            <header>
                <h2>{item.title}</h2>
                <p>{item.date} | {item.author}</p>
            </header>
            <p>{item.text}</p>
            <a>Read more</a>
        </article>
    </div>
};

export default NewsItem;