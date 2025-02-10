import Image from "next/image"

export const Header = () => {
    return (<header className="fixed top-0 w-full  z-30 bg-white-500 transition-all pt-0 bg-white">
            <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-1">
              <div className="col-start-1 col-end-2 flex items-center">
                <Image
                  src="/images/logo3.png"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
              <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
                <button className="tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white transition-all hover:shadow-orange cursor-pointer font-semibold">Hacer Pedido</button>
              </div>
            </nav>
          </header>)
}