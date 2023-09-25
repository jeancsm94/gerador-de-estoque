import ListProducts from "./../../database/database";

// create list home page
export function loadHomeProducts() {
    const setlist = ListProducts.sort( x => x.rating.count);    
    const setList2 = ListProducts.filter( x => x.rating.count < 10).sort(x => x.rating.count);

    let listNew = setlist.slice(0,5);
    let listLow = setList2.slice(0,5);
    return [listNew, listLow];
}

export function loadListProducts(){
    return ListProducts;
}


export default function loadProduct({ params }){
    const product = ListProducts.find(x => x.id === + params.id);

    if(!product){
        throw new Response('404 Product not found', {
            status: 404
        });
    }

    return product;
}