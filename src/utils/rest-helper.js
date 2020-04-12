import axios from 'axios';
const API_HOST = 'http://localhost:3000';

const config = {
    headers: {'Access-Control-Allow-Origin': '*', 'Accept': 'application/json'}
};
class NewsItems {
    newsItemsObjects = {}

    async getAll() {
        let response =  await axios.get(`${API_HOST}/newsitems/`, config).catch(e => {
            return {data: []};
        });
        response.data.forEach(newsItem => {
            if (!this.newsItemsObjects[newsItem.id]) {
                this.newsItemsObjects[newsItem.id] = newsItem;
            }
        });
        return response.data;
    }

    async get(id) {
        if (this.newsItemsObjects[id]) {
            return this.newsItemsObjects[id]
        }

        let response =  await axios.get(`${API_HOST}/newsitems/${id}`, config).catch(e => {
            return {data: null};
        });
        if (response.data){
            this.newsItemsObjects[id] = response.data;
        }
        return response.data;
    }
}


async function getAgendaItems() {
    let response =  await axios.get(`${API_HOST}/agendaitems/`, config).catch(e => {
        return {data: []};
    });
    return response.data;
}

async function getAgendaItem(id) {
    let response =  await axios.get(`${API_HOST}/agendaitems/${id}`, config).catch(e => {
        return {data: null};
    });
    return response.data;
}

function getAPIHostUrl(url) {
    return 'http://localhost:3000' + url;
}

const NewsItemsCollection = new NewsItems();

export {
    API_HOST,
    NewsItemsCollection,
    getAPIHostUrl,
    getAgendaItem,
    getAgendaItems
}