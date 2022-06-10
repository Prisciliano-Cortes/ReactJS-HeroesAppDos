import { heroes } from "../data/heroes"

export const getHeroesByPublisher = ( publisher ) => {

    const validatePublishers = ['DC Comics', 'Marvel Comics'];
    if (!validatePublishers.includes(publisher)) {
        throw new Error(`${publisher} no está definido`)
    }
    
    return heroes.filter(hero => hero.publisher === publisher);
}