import axios from 'axios';
const API_HOST = 'http://localhost:3000';

const config = {
    headers: {'Access-Control-Allow-Origin': '*', 'Accept': 'application/json'}
};

class ObjectCollection {
    constructor(url) {
        this.objects =[];
        this.url = url
    }

    async getAll(params) {
        let response =  await axios.get(`${API_HOST}/${this.url}/`, {...config, params}).catch(e => {
            return {data: []};
        });
        response.data.forEach(object => {
            if (!this.objects[object.id] || this.objects[object.id]) {
                this.objects[object.id] = object;
            }
        });
        return response.data;
    }

    async get(id, params) {
        if (this.objects[id]) {
            return this.objects[id]
        }

        let response =  await axios.get(`${API_HOST}/${this.url}/${id}`, {...config, params}).catch(e => {
            return {data: null};
        });
        if (response.data){
            this.objects[id] = response.data;
        }
        return response.data;
    }
}


function getAPIHostUrl(url) {
    return 'http://localhost:3000' + url;
}

const NewsItemsCollection = new ObjectCollection('newsitems');
const AgendaItemsCollection = new ObjectCollection('agendaitems');
const PagesCollection = new ObjectCollection('pages');

class PhotoAlbums extends ObjectCollection {
    async get(id, params) {
            if (this.objects[id] && this.objects[id].photos) {
                return this.objects[id]
            }

            let response =  await axios.get(`${API_HOST}/${this.url}/${id}`, {...config, params}).catch(e => {
                return {data: null};
            });
            if (response.data && response.data.photoalbum && response.data.photos){
                this.objects[id] = response.data.photoalbum;
                this.objects[id].photos = response.data.photos;
                return this.objects[id];
            }
            return response.data;
    }
}

const PhotoAlbumsCollection = new PhotoAlbums('photoalbums');
const AgendaItemTypesCollection = new ObjectCollection('agendaitemtypes');
const CommissionCollection = new ObjectCollection('commissions')

export {
    API_HOST,
    NewsItemsCollection,
    AgendaItemsCollection,
    PagesCollection,
    PhotoAlbumsCollection,
    AgendaItemTypesCollection,
    CommissionCollection,
    getAPIHostUrl
}