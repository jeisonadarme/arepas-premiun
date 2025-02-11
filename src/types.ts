import { Document } from '@contentful/rich-text-types';

export interface ApiResponse {
  data: Data
}

export interface Data {
  productsCollection: ProductsCollection
}

export interface ProductsCollection {
  items: Product[]
}

export interface Product {
    sys: Sys
    title: string
    subTitle: string
    slug: string
    price: string
    productImage: ProductImage
    details: Details
  }

  export interface Details {
    json: Document
  }

  export interface Sys {
    id: string
  }
  
  export interface ProductImage {
    url: string
  }
  