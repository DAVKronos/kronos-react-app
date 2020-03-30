import React from "react";
import ShortNewsItem from "./ShortNewsItem";
import NewsItemCarousel from "./NewsItemCarousel";
import axios from 'axios';

const NEWSITEMS = [
    {
        id: 1,
        title: "NSK Indoor",
        text: "Een grote groene delegatie Kronauten reisde af naar Apeldoorn voor het NSK Indoor. Onder hen een aantal indoorveteranen voor wie het Omnisport inmiddels een soort tweede thuis is geworden en een aantal nieuwelingen. Gelukkig zorgde tourguide Marjolein ervoor dat ook zij zich binnen de kortste keren bekend voelden in het immense complex. Het beloofde een wisselvallige dag te worden met medailles, clubrecords, vele persoonlijke records maar ook wat teleurstellingen. \n Hallo",
        date: "2020-03-03 15:01",
        author: "Kegel",
        small_img: "https://kronos.nl/system/articlephotos/811f919e98db6c8b14053259e1cf1b600f222464.jpg?1583244102",
        large_img: "https://kronos.nl/system/articlephotos/b09128789951caa999bac7c2f5724f9f4d5c7a39.jpg?1583244102"

    },
    {
        id:2,
        title: "NSK Indoor",
        text: "Een grote groene delegatie Kronauten reisde af naar Apeldoorn voor het NSK Indoor. Onder hen een aantal indoorveteranen voor wie het Omnisport inmiddels een soort tweede thuis is geworden en een aantal nieuwelingen. Gelukkig zorgde tourguide Marjolein ervoor dat ook zij zich binnen de kortste keren bekend voelden in het immense complex. Het beloofde een wisselvallige dag te worden met medailles, clubrecords, vele persoonlijke records maar ook wat teleurstellingen. \n Hallo",
        date: "2020-03-03 15:01",
        author: "Kegel",
        small_img: "https://kronos.nl/system/articlephotos/811f919e98db6c8b14053259e1cf1b600f222464.jpg?1583244102",
        large_img: "https://kronos.nl/system/articlephotos/b09128789951caa999bac7c2f5724f9f4d5c7a39.jpg?1583244102"
    },{
        id: 3,
        title: "NSK Indoor",
        text: "Een grote groene delegatie Kronauten reisde af naar Apeldoorn voor het NSK Indoor. Onder hen een aantal indoorveteranen voor wie het Omnisport inmiddels een soort tweede thuis is geworden en een aantal nieuwelingen. Gelukkig zorgde tourguide Marjolein ervoor dat ook zij zich binnen de kortste keren bekend voelden in het immense complex. Het beloofde een wisselvallige dag te worden met medailles, clubrecords, vele persoonlijke records maar ook wat teleurstellingen.",
        date: "2020-03-03 15:01",
        author: "Kegel",
        small_img: "https://kronos.nl/system/articlephotos/811f919e98db6c8b14053259e1cf1b600f222464.jpg?1583244102",
        large_img: "https://kronos.nl/system/articlephotos/b09128789951caa999bac7c2f5724f9f4d5c7a39.jpg?1583244102"
    }
];

class NewsItems extends React.Component {

    async componentDidMount() {
        let config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        let response =  await axios.get('http://localhost:3000/newsitems', config);
        console.log(response.data);
    }


    render() {
        const items = NEWSITEMS;


        return <div>
            <NewsItemCarousel items={items.slice(0, 2)}/>
            {items.map(item => {
                return <ShortNewsItem item={item}/>
            })}
        </div>
    }
};

export default NewsItems;