"use client"

import { useEffect, useState } from "react";

import Image from "next/image";
import { Missing } from "@/components/missing";
import { Product } from "@/types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getProduct } from "@/lib/product-api";

export default function Details({ params }: {
    params: Promise<{ slug: string }>
}) {
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        params.then(param => {
            const { slug } = param;
            getAllProductAsync(slug);
        });
    }, []);

    const getAllProductAsync = async (slug: string) => {
        const product = await getProduct(slug);
        setProduct(product);
    }

    return (
        <>
            <div className="banner">
                <div className="max-w-screen-xl px-8 xl:px-16 mx-auto pt-20 pb-4" id="about">
                    <div className="flex justify-center">
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
            {
                product == null ? <Missing />
                    : (
                        <div className="bg-gradient-to-b from-white-300 to-white-500 bg-gray-100">
                            <div className="max-w-screen-xl px-8 xl:px-16 mx-auto py-8 p-8">
                                <div className="bg-white rounded-md p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="relative">
                                            <Image
                                                src={product.productImage.url}
                                                width={400}
                                                height={300}
                                                className=""
                                                alt="Picture of the author"
                                                layout="responsive"
                                            />
                                        </div>

                                        <div className="p-6 flex flex-col justify-between">
                                            <div>
                                                <h1 className="text-4xl font-bold text-center text-yellow-300">{product.title}</h1>
                                                <h1 className=" font-semibold text-center text-black text-sm">{product.subTitle}</h1>
                                                {
                                                    product.details === null ? <></> : 
                                                    <div className="text-center mt-4 text-gray-800 prose">
                                                        {documentToReactComponents(product.details.json)}
                                                    </div>
                                                }
                                                <div className="p-6 flex justify-center">
                                                    <button className="tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white transition-all hover:shadow-orange cursor-pointer font-semibold">Hacer Pedido</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    );
}