import { Product } from './product.model';
export class Store {    
    
    public $id: string;

    constructor(
        public name: string,
        public lat: string,
        public lng: string,
        public logo: string,
        public openTime: string,
        public closeTime: string,
        public rating: string,
        public products: Product[]
    ){}
}