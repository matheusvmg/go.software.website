import Image from "next/image";
import iPhoneImg from "../../../public/iphone-desktop.svg";

export function Hero() {
  return (
    <section className="bg-light-green h-[350px] w-full md:h-[450px] lg:h-[748px] relative overflow-hidden min-[600px]:h-[270px]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
        <div className="mt-10 mx-6 flex flex-col md:justify-center md:ml-[88px]">
          <h1 className="text-standard-blue font-extrabold text-3xl md:text-4xl lg:text-5xl">
            Soluções Digitais sob medida para o seu negócio
          </h1>
          <p className="text-standard-blue mt-6">
            Desenvolvemos sites, aplicativos e sistemas personalizados para
            transformar sua ideia em realidade. Tecnologia de ponta para
            impulsionar seu crescimento!
          </p>
          <a
            href="#"
            className="flex items-center justify-center bg-standard-blue rounded-lg w-full h-[56px] text-white font-medium mt-4 md:w-[272px] md:mt-6"
          >
            Entre em contato
          </a>
        </div>
        <div className="hidden md:flex justify-center absolute right-0 bottom-0 translate-y-1/5 w-1/2">
          <Image
            src={iPhoneImg}
            alt="imagem de um iPhone"
            className="h-[520px] w-[402px] object-contain lg:h-[920px]"
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
}
