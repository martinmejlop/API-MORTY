import { Character } from "./Charater";
import { Information } from "./Information";

export class Response{
    constructor(
        public info:Information,
        public results:Character[]
    ){}
}