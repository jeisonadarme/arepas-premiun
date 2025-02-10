import { SiInstagram } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

export const Footer = () => {
    return (
        <footer className="max-w-screen-xl px-8 xl:px-16 mx-auto py-4">
            <div className="text-center mb-4">
            <p className="text-gray-600">Domicilios en Cali, Candelaria, El Cerrito, Palmira, Pradera y Villa Gorgona</p>
            </div>
            <div className="border-t border-gray-200 py-4 flex justify-between text-gray-500">
                <div>© 2025 Blue Labs, Inc. All rights reserved.</div>
                <div className="flex gap-2">
                    <a className="cursor-pointer text-gray-500 hover:text-gray-800">
                        <SiInstagram size={20}/>
                    </a>
                    <a className="cursor-pointer text-gray-500 hover:text-gray-800">
                        <SiWhatsapp size={20}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}