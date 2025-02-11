"use client"

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from 'next/link'
import { Product } from "@/types";
import { getAllProducts } from "@/lib/product-api";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProductsAsync();
  }, [])

  const getAllProductsAsync = async () => {
    const products = await getAllProducts();
    setProducts(products);
  }

  return (
    <>
      <div className="banner">
        <div className="max-w-screen-xl px-8 xl:px-16 mx-auto" id="about">
          <div className="grid grid-cols-1 gap-8 p-8 mt-14 lg:grid-cols-2 lg:mt-0 lg:p-0" >
            <div className="w-full hidden lg:block">
              <Image
                src="/images/arepita.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className=" flex flex-col justify-center items-start">
              <div className="p-4 bg-white rounded-lg flex flex-col items-center justify-center">
                <Image
                  src="/images/logo5.png"
                  width={300}
                  height={300}
                  className=""
                  alt="Picture of the author"
                />
                <p className="text-black-500 mt-4 mb-6 mx-4 text-center font-medium">Disfruta el auténtico sabor casero con nuestras variedades de arepas 100% maíz, sin conservantes y listas para disfrutar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white-300 to-white-500 bg-gray-100">
        <div className="max-w-screen-xl px-8 xl:px-16 mx-auto py-8">
          <div className="flex flex-col items-center">
            <div className="mb-1 text-2xl font-semibold text-gray-900">TODAS NUESTRAS</div>
            <div className="mb-5 text-5xl font-bold text-yellow-300">VARIEDADES</div>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-2">
            {
              products?.map((product: Product) => (
                <div key={product.title} className="bg-white rounded-md flex flex-col items-center shadow hover:shadow-yellow-300 group">
                  <Image
                    src={product.productImage.url}
                    width={400}
                    height={300}
                    className="rounded"
                    alt="Picture of the author"
                    layout="responsive"
                  />
                  <div className="flex flex-col justify-items-center items-center p-4 w-full">
                    <p className="font-semibold">{product.title}</p>
                    <div className="text-gray-600">
                      <span>Precio: </span>
                      <span className="ml-2">{product.price}</span>
                    </div>
                    <Link className="mt-2 tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white transition-all hover:shadow-orange cursor-pointer font-semibold" href={`/${product.slug}`}>Ver Más</Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}