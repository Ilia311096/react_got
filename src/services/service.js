export default class GotService{
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    getResource = async (url) => {
        const res = await fetch (`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}` `,received ${res.status}`);
        }
        return await res.json();
    }
    getAllCharacters = async ()=>{
        const res= await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter)
    }
    getCharacter = async (id)=>{
        const char= await this.getResource(`/characters/${id}`);
        return this._transformCharacter(char);
    }
    getAllHouses = async ()=>{
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse);
    }
    getHouse = async (id)=>{
        const res = await this.getResource(`/houses/${id}`);
        return this._transformHouse(res);
    }
    getAllBooks = async ()=>{
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }
    getBook = async (id)=>{
        const res = await this.getResource(`/books/${id}`);
        return this._transformBook(res);
    }

    isSet=(data)=>{
        if(data){
            return data
        }else {
            return "no info"
        }
    }
    _extractId = (item)=>{
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter=(char)=>{
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        }
    }
    
    _transformHouse=(house)=>{
        return {
            id: this._extractId(house),
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            overloard: this.isSet(house.overloard),
        }
    }
    _transformBook=(book)=>{
        return {
            id: this._extractId(book),
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released),
        }
    }
}


    
