import { PriceCard } from "./PriceCard";

export const PriceSection = () => {
  return (
    <section className="px-10 sm:px-24 mt-14">
      <h3 className="text-2xl sm:text-4xl font-semibold">Planos</h3>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-16 mt-6">
        <PriceCard.Root className="bg-dark-gray">
          <PriceCard.Title title="Entre de graça" />
          <PriceCard.Description>
            Nossa opção gratuita oferece acesso limitado a treinos
            personalizados, conteúdo inspirador e uma comunidade motivada.
            Queremos garantir que todos tenham a oportunidade de experimentar os
            benefícios de uma vida saudável, independentemente das
            circunstâncias financeiras.
          </PriceCard.Description>
          <PriceCard.Link className=" bg-blue hover:bg-sky-800">
            Comece a treinar!
          </PriceCard.Link>
        </PriceCard.Root>

        <PriceCard.Root className="bg-light-gray">
          <PriceCard.Title title="Sem limites" />
          <PriceCard.Description>
            Tenha acesso completo a todos os recursos da plataforma. Desfrute de
            treinos personalizados, conteúdo exclusivo e suporte prioritário dos
            nossos personal trainers. Maximize sua jornada de condicionamento
            físico com recursos avançados, análise de desempenho, monitoramento
            de progresso e metas personalizadas.
          </PriceCard.Description>
          <PriceCard.Link className="bg-blue hover:bg-sky-800">
            Comece a treinar!
          </PriceCard.Link>
        </PriceCard.Root>
      </div>
    </section>
  );
};
