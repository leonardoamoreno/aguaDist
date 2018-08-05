export class Review {
    public $id : string;
    constructor(        
        public comment: string,        
        public date: string,
        public name: string,
        public rating: string
        
    ){}
}