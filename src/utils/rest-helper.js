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

class ObjectCollection {
    constructor(url) {
        this.objects = {};
        this.url = url;
        this.listeners = [];
    }

    getAll(params, sort_func) {
        axios.get(`${API_HOST}/${this.url}/`, {...config, params}).then(response => {
            let changed = false;
            response.data.forEach(object => {
                object = transformObject(object);
                if (!this.objects[object.id] || this.objects[object.id].updated_at < object.updated_at) {
                    this.objects[object.id] = object;
                    changed = true;
                }
            });
            if (changed) {
                this.notifyChangeListeners();
            }

        }).catch(() => {
            return {data: []};
        });

        let objects = Object.values(this.objects)
        if (sort_func) {
            objects = objects.sort(sort_func);
        } else {
            objects = objects.sort((a, b) => a.id - b.id);
        }
        return objects;
    }

    notifyChangeListeners() {
        this.listeners.forEach(handleChange => {
            handleChange();
        })
    }

    addChangeListener(listener) {
        this.listeners.push(listener);
    }

    removeChangeListener(listener) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }

    get(id, params) {
        axios.get(`${API_HOST}/${this.url}/${id}`, {...config, params}).then(response => {
            let changed = false;
            if (response.data) {
                let object = transformObject(response.data);

                if (!this.objects[object.id] || this.objects[object.id].updated_at < object.updated_at || JSON.stringify(this.objects[object.id]) !== JSON.stringify(object)) {
                    this.objects[object.id] = object;
                    changed = true;
                }
            }

            if (changed) {
                this.notifyChangeListeners();
            }
        }).catch(e => {
            return {data: null};
        });
        return this.objects[id];
    }
}


function getAPIHostUrl(url) {
    return 'http://localhost:3000' + url;
}

const NewsItemsCollection = new ObjectCollection('newsitems');
const AgendaItemsCollection = new ObjectCollection('agendaitems');
const PagesCollection = new ObjectCollection('pages');

class PhotoAlbums extends ObjectCollection {
    get(id, params) {
        axios.get(`${API_HOST}/${this.url}/${id}`, {...config, params}).then(response => {
            let photoAlbum = response.data && response.data.photoalbum && transformObject(response.data.photoalbum);
            let photos = response.data && response.data.photos;
            let changed = false;
            if (photoAlbum && photos && (!this.objects[id] || !this.objects[id].photos)) {
                this.objects[id] = transformObject(response.data.photoalbum);
                this.objects[id].photos = photos;
                changed = true;
            }
            if (changed) {
                this.notifyChangeListeners();
            }
        }).catch(e => {
            return {data: null};
        });

        return this.objects[id];
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