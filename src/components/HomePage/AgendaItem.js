import React from "react";

const AgendaItem = ({item}) => {
    return <a>
        <h5>{item.date}</h5>
        <h5>{item.title}</h5>
        <h5>icon {item.subscriptions}</h5>
    </a>
};

export default AgendaItem;