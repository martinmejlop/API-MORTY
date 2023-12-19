export class Character {

    constructor(
        public id: number,
        public name: string,
        public status: string,
        public species: string,
        public type: string,
        public gender: string,
        public origin: object,
        public location: object,
        public image: string,
        public episode: String[],
        public url: string,
        public created: string
    ) { }

}