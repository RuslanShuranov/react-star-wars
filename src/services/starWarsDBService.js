export default class StarWarsDBService {

    _apiBase = 'https://starwars-databank-server.vercel.app/api/v1'

    _peopleCache = new Map();
    _planetsCache = new Map();
    _starshipsCache = new Map();

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Coudn't fetch ${url} recieved ${res.status}`)
        }
        return await res.json()
    }

    getPeople = async (page = 1, limit = 10) => {
        const response = await this.getResource(`/characters?page=${page}&limit=${limit}`);
        const transformedData = response.data.map(this._transformEntity);

        transformedData.forEach(person => {
            this._peopleCache.set(person.id, person);
        });

        return {
            data: transformedData,
            info: response.info
        };
    }

    getPerson = async (id) => {
        if (this._peopleCache.has(id)) {
            return this._peopleCache.get(id);
        }

        const person = await this.getResource(`/characters/${id}`);
        const transformedPerson = this._transformEntity(person);

        this._peopleCache.set(id, transformedPerson);

        return transformedPerson;
    }

    getPlanets = async (page = 1, limit = 10) => {
        const response = await this.getResource(`/locations?page=${page}&limit=${limit}`);
        const transformedData = response.data.map(this._transformEntity);

        transformedData.forEach(planet => {
            this._planetsCache.set(planet.id, planet);
        });

        return {
            data: transformedData,
            info: response.info
        };
    }

    getPlanet = async (id) => {
        if (this._planetsCache.has(id)) {
            return this._planetsCache.get(id);
        }

        const planet = await this.getResource(`/locations/${id}`);
        const transformedPlanet = this._transformEntity(planet);

        this._planetsCache.set(id, transformedPlanet);

        return transformedPlanet;
    }

    getStarships = async (page = 1, limit = 10) => {
        const response = await this.getResource(`/vehicles?page=${page}&limit=${limit}`);
        const transformedData = response.data.map(this._transformEntity);

        transformedData.forEach(starship => {
            this._starshipsCache.set(starship.id, starship);
        });

        return {
            data: transformedData,
            info: response.info
        };
    }

    getStarship = async (id) => {
        if (this._starshipsCache.has(id)) {
            return this._starshipsCache.get(id);
        }

        const starship = await this.getResource(`/vehicles/${id}`);
        const transformedStarship = this._transformEntity(starship);

        this._starshipsCache.set(id, transformedStarship);

        return transformedStarship;
    }

    _transformEntity = (entity) => {
        return {
            id: entity._id,
            name: entity.name,
            description: entity.description,
            image: entity.image
        }
    }
}
