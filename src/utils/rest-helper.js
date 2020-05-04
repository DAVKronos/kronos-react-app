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

    async getAll() {
        let response =  await axios.get(`${API_HOST}/${this.url}/`, config).catch(e => {
            return {data: []};
        });
        response.data.forEach(object => {
            if (!this.objects[object.id] || this.objects[object.id]) {
                this.objects[object.id] = object;
            }
        });
        return response.data;
    }

    async get(id) {
        if (this.objects[id]) {
            return this.objects[id]
        }

        let response =  await axios.get(`${API_HOST}/${this.url}/${id}`, config).catch(e => {
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
const PagesCollection = new ObjectCollection('pages')
const PhotoAlbumsCollection = new ObjectCollection('photoalbums')


export {
    API_HOST,
    NewsItemsCollection,
    AgendaItemsCollection,
    PagesCollection,
    PhotoAlbumsCollection,
    getAPIHostUrl
}