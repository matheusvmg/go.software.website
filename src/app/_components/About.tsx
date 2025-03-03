import Image from "next/image";
import bottomImg from "../../../public/bottom.svg";

export function About() {
  return (
    <section className="bg-light-gray w-full h-full">
      <div className="mx-6 my-6 lg:mx-[88px]">
        <h1 className="text-standard-blue font-extrabold text-3xl text-center pt-9 lg:text-[40px]">
          Quem somos e como podemos ajudar seu negócio?
        </h1>
        <p className="mt-8">
          Somos uma empresa especializada no desenvolvimento de software sob
          medida, criando sites, aplicativos e sistemas personalizados para
          empresas que desejam crescer no digital.
        </p>
        <p className="mt-4 lg:mt-1">
          Com foco em tecnologia, inovação e usabilidade, desenvolvemos soluções
          que ajudam nossos clientes a automatizar processos, melhorar a
          experiência do usuário e aumentar seus resultados.
        </p>
        <h3 className="font-semibold text-2xl text-standard-blue mt-8">
          Diferenciais
        </h3>
        <div className="mt-6">
          <p>
            ✅ Desenvolvimento personalizado – Criamos soluções sob medida para
            cada necessidade.
          </p>
          <p>
            ✅ Experiência e qualidade – Utilizamos tecnologias modernas para
            entregar projetos robustos e eficientes.
          </p>
          <p>
            ✅ Foco no cliente – Nosso compromisso é transformar sua ideia em
            uma ferramenta digital poderosa.
          </p>
          <p>
            ✅ Suporte e evolução contínua – Não entregamos apenas um projeto,
            mas um parceiro para o seu crescimento.
          </p>
        </div>
      </div>
      <div className="w-full flex items-end h-[50px] mt-[70px] min-[500px]:mt-[140px] min-[700px]:mt-[200px] lg:mt-[250px]">
        <Image
          src={bottomImg}
          alt="Parte de baixo da seção sobre"
          priority
          quality={100}
        />
      </div>
    </section>
  );
}
