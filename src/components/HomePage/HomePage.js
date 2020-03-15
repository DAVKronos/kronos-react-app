import React from 'react'
import NewsItems from "./NewsItems";
import AgendaItemsSidebar from "./AgendaItemsSidebar";
import StravaSidebar from "./StravaSidebar";

let HomePage = () => {
    return <div>
        <NewsItems />
        <AgendaItemsSidebar />
        <StravaSidebar />
    </div>
};

export default HomePage;
