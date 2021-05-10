import { data } from './data';


export function getAllProperties () {
    return data;
}

export function getOnePropertyById(id) {
    const property = data.filter(property => property.id === id);
    return property;
}