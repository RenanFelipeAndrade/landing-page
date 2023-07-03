import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export const ImageSection = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:gap-32 gap-16 px-8 mt-28 pl-10 lg:pl-36 md:pl-24 mx-auto max-w-screen-2xl">
      <div className="flex sm:grid sm:grid-cols-2 flex-col-reverse gap-2 sm:gap-4 items-center justify-center">
        <div className="rounded-lg mt-6">
          <h2 className="mb-2 text-2xl sm:text-4xl lg:mb-12 font-semibold">
            Receba treinos de casa
          </h2>
          <p className="text-gray-400 text-sm">
            Receber treinos personalizados em casa oferece a conveniência e a
            flexibilidade de se exercitar no conforto do seu lar. Com acesso à
            nossa plataforma, você pode desfrutar de treinos adaptados às suas
            necessidades, sem precisar se deslocar até uma academia. Nossos
            personal trainers especializados fornecerão orientação profissional
            para garantir que você alcance seus objetivos de condicionamento
            físico, tudo isso no ambiente familiar e conveniente da sua própria
            casa.
          </p>
          <span className="flex items-center gap-2 mt-6">
            <button
              type="button"
              className="text-blue hover:text-sky-300 transition-colors"
            >
              Saiba mais{" "}
            </button>
            <BsArrowRight />
          </span>
        </div>
        <div className="relative h-64 w-full sm:min-h-full">
          <Image
            src={"/img-section-1.png"}
            className="object-cover sm:object-contain rounded-sm"
            fill
            alt="imagem de mulher sentada alongando as costas"
          />
        </div>
      </div>

      <div className="flex sm:grid sm:grid-cols-2 flex-col gap-2 sm:gap-4 items-center justify-center">
        <div className="relative h-64 w-full sm:min-h-full">
          <Image
            src={"/img-section-2.png"}
            className="object-cover sm:object-contain rounded-sm"
            fill
            alt="imagem de mulher sentada alongando as costas"
          />
        </div>
        <div className="rounded-lg mt-6">
          <h2 className="mb-2 text-2xl sm:text-4xl lg:mb-12 font-semibold">
            Atinja seus objetivos com suporte especializado
          </h2>
          <p className="text-gray-400 text-sm">
            Na nossa plataforma, você tem a oportunidade de fazer treinos
            acompanhados por um personal trainer de sua escolha. Acreditamos na
            importância do suporte especializado e personalizado para maximizar
            seus resultados. Com uma variedade de personal trainers qualificados
            e experientes disponíveis, você pode selecionar aquele que melhor se
            adequa às suas necessidades, preferências e metas. Essa abordagem
            personalizada oferece a motivação adicional e o conhecimento técnico
            necessário para levar seu condicionamento físico a um nível
            superior. Desfrute de treinos exclusivos com um profissional que irá
            ajudá-lo(a) a superar desafios, acompanhar seu progresso e garantir
            que você esteja no caminho certo para alcançar seus objetivos.
          </p>
          <span className="flex items-center gap-2 mt-6">
            <button className="text-blue hover:text-sky-300 transition-colors">
              Saiba mais{" "}
            </button>
            <BsArrowRight />
          </span>
        </div>
      </div>
    </section>
  );
};
