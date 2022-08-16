export interface productTypings {
    id?:string
    adminId?:string
    name:string
    price:string
    description?:string
    status?:boolean
    type:string
    image?:string
    createdAt?:Date
    updatedAt?:Date
    currency?:string
}

export type fetchProductTypings ={
    message:string
    products:productTypings[]
}

export interface productColumns {
    name:string
    price:string
    type:string
    onsales:string
}



interface changeProductStatusTypings {
    productId: productIdTypings;
    status: string;
}