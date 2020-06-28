import axios from 'axios';

const API_HOST = 'http://localhost:3000';

const config = {
    headers: {'Access-Control-Allow-Origin': '*', 'Accept': 'application/json'}
};

function transformObject(obj) {
    return {
        ...obj,
        created_at: obj.created_at && new Date(obj.created_at),
        updated_at: obj.updated_at && new Date(obj.updated_at)
    }
}

function restCall(url, params = {}) {
    return axios.get(`${API_HOST}/${url}`, {...config, params}).catch(() => {
        return {data: null};
    });
}

class ObjectCollection {
    constructor(url) {
        this.objects = {};
        this.url = url;
    }

    getAll(params) {
        return restCall(this.url, params).then(response => {
            return response.data.map(object => {
                return transformObject(object);
            });
        });
    }


    get(id, params) {
        if (this.objects[id]) {
            return Promise.resolve(this.objects[id]);
        }

        return restCall(`${this.url}/${id}`, params).then(response => {
            let object =  response.data ? transformObject(response.data) : null;
            if (object) {
                this.objects[object.id] = object;
            }
            return object;
        });
    }
}


function getAPIHostUrl(url) {
    return 'http://localhost:3000' + url;
}

class AgendaItems extends ObjectCollection {

    getEvents(id) {
        return restCall(`${this.url}/${id}/events`).then(response => {
            return Promise.all(response.data.map(async event  => {
                let event_type = await EventTypesCollection.get(event.eventtype_id)
                return {...event, ...event_type};

            }));
        });
    }
}


const PhotoAlbumsCollection = new ObjectCollection('photoalbums');
const NewsItemsCollection = new ObjectCollection('newsitems');
const AgendaItemsCollection = new AgendaItems('agendaitems');
const PagesCollection = new ObjectCollection('pages');
const AgendaItemTypesCollection = new ObjectCollection('agendaitemtypes');
const CommissionCollection = new ObjectCollection('commissions');
const EventTypesCollection = new ObjectCollection('eventtypes');
const ResultsCollection = new ObjectCollection('results');
const EventsCollection = new ObjectCollection('events')

export {
    API_HOST,
    NewsItemsCollection,
    AgendaItemsCollection,
    PagesCollection,
    PhotoAlbumsCollection,
    AgendaItemTypesCollection,
    CommissionCollection,
    EventTypesCollection,
    ResultsCollection,
    EventsCollection,
    getAPIHostUrl,
    transformObject
}