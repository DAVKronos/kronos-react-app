import React from "react";
import AgendaItem from "./AgendaItem";

const AgendaItemsSideBar = () => {
    let items = [];

    return <div>
        <div>Agenda</div>
        <div>
            {items.map(item => (<AgendaItem item={item} />)
            )}
        </div>
    </div>
};

export default AgendaItemsSideBar;