export interface Product {
    sys: Sys
    title: string
    subTitle: string
    slug: string
    price: string
    productImage: ProductImage
    details: any
  }
  
  export interface Sys {
    id: string
  }
  
  export interface ProductImage {
    url: string
  }
  