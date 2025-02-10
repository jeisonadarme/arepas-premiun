"use client"

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

import { useState } from "react";

export const Carousel = ({ children: images }: any) => {
    const [current, setCurrent] = useState(0);

    const prev = () =>
        setCurrent((curr) => (
            curr === 0 ? images.length - 1 : curr - 1
        ));

    const next = () => {
        setCurrent((curr) => (
            curr === images.length - 1 ? 0 : curr + 1
        ))
    };

    return (
            <div className="overflow-hidden relative">
                <div className="flex transition-transform ease-out duration-500"
                    style={{transform: `translateX(-${current * 100}%)`}}
                >
                    {images}
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-2">
                    <button onClick={prev} className="cursor-pointer bg-white/80 rounded-full shadow text-gray-800 hover:bg-white">
                        <RxCaretLeft size={40} />
                    </button>
                    <button onClick={next} className="cursor-pointer bg-white/80 rounded-full shadow text-gray-800 hover:bg-white">
                        <RxCaretRight size={40} />
                    </button>
                </div>
            </div>
    )
}