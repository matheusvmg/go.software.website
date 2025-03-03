import Image from "next/image";
import awardImg from "../../../public/achievement.svg";

export function LandingPage() {
  return (
    <section className="bg-light-gray w-full h-full md:flex items-center justify-center md:h-[600px] relative">
      <div className="mx-4 min-[500px]:mx-8 min-[600px]:mx-12">
        <h1 className="font-medium text-standard-blue text-3xl text-center mt-8 md:text-5xl">
          Por que você <span className="font-extrabold">precisa</span> de um
          site para o seu negócio?
        </h1>
        <div className="rounded-2xl bg-white h-full mt-[56px] drop-shadow-xl px-4 py-4 md:absolute top-[85px] left-6 md:h-[120px] md:w-[300px]">
          <div className="flex flex-row justify-between items-center">
            <h3 className="font-semibold">Credibilidade</h3>
            <Image src={awardImg} alt="ícone de premiação" />
          </div>
          <p className="font-light text-[14px] mt-4">
            Um site passa mais confiança do que apenas redes sociais.
          </p>
        </div>
        <div className="rounded-2xl bg-white h-full mt-2 drop-shadow-xl px-4 py-4 md:absolute top-[130px] right-6 md:h-[120px] md:w-[300px]">
          <div className="flex flex-row justify-between items-center">
            <h3 className="font-semibold">Disponibilidade 24/7</h3>
            <Image src={awardImg} alt="ícone de premiação" />
          </div>
          <p className="font-light text-[14px] mt-4">
            Clientes podem encontrar informações sobre seus serviços a qualquer
            momento.
          </p>
        </div>
        <div className="rounded-2xl bg-white h-full mt-2 mb-12 drop-shadow-xl px-4 py-4 md:absolute bottom-[46px] md:left-1/2 md:transform md:-translate-x-1/2 md:h-[120px] md:w-[300px]">
          <div className="flex flex-row justify-between items-center">
            <h3 className="font-semibold">Expansão do alcance</h3>
            <Image src={awardImg} alt="ícone de premiação" />
          </div>
          <p className="font-light text-[14px] mt-4">
            Um site bem otimizado atrai clientes via Google (SEO).
          </p>
        </div>
      </div>
    </section>
  );
}
