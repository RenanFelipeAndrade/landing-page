import { Card } from "./Card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { KeenSliderInstance } from "keen-slider";

interface FeatureInfo {
  title: string;
  subtitle: string;
  link: string;
}
export const Feature = () => {
  let intervalIds: number[] = [];
  const features: FeatureInfo[] = [
    {
      title: "Objetivos personalizados",
      subtitle: "Treinos personalizados e eficazes para transformar seu corpo",
      link: "/#",
    },
    {
      title: "Acompanhamento profissional",
      subtitle: "Personal trainers experientes ao seu lado",
      link: "/#",
    },
    {
      title: "Treine no seu ritmo",
      subtitle: "Acesso aos treinos quando e onde você quiser",
      link: "/#",
    },
    {
      title: "Resultados comprovados",
      subtitle: "Baseado em ciência para o máximo desempenho",
      link: "/#",
    },
    {
      title: "Comunidade motivada",
      subtitle: "Conecte-se e compartilhe conquistas",
      link: "/#",
    },
    {
      title: "Saúde e bem-estar",
      subtitle: "Treinos personalizados para transformação",
      link: "/#",
    },
  ];

  const [sliderRef] = useKeenSlider({
    loop: true,
    created: (event) => {
      autoPlay(true, event);
    },
    dragStarted: (event) => {
      autoPlay(false, event);
    },
    dragEnded: (event) => {
      autoPlay(true, event);
    },
    breakpoints: {
      "(min-width: 540px)": {
        slides: {
          perView: 2.2,
          spacing: 16,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3.3,
          spacing: 16,
        },
      },
      "(min-width: 1240px)": {
        slides: {
          perView: 4.4,
          spacing: 16,
        },
      },
      "(min-width: 1536px)": {
        slides: {
          perView: 5.5,
          spacing: 16,
        },
      },
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
  });

  function clearIntervals(intervals: number[]) {
    intervals.forEach((intervalId: number) => clearInterval(intervalId));
  }

  function autoPlay(run: boolean, event: KeenSliderInstance) {
    clearIntervals(intervalIds);
    if (run && intervalIds.length === 0) {
      const newIntervalId = setInterval(event.next, 5000);
      intervalIds.push(Number(newIntervalId));
    }
  }

  return (
    <section className="lg:pl-36 md:pl-24 mt-20">
      <div className="px-10">
        <h3 className="text-xl font-bold mb-4">
          Treinos personalizados projetados para você
        </h3>
        <p className="text-text-gray max-w-lg">
          Desbloqueie seu potencial máximo com treinos adaptados às suas
          necessidades e objetivos únicos acompanhados de um orientador
          profissional da área.
        </p>
      </div>
      <div className="min-[540px]:pl-10">
      <ul
        ref={sliderRef}
        className="max-w-[300px] min-[540px]:max-w-none mx-auto mt-10 overflow-hidden keen-slider"
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            subtitle={feature.subtitle}
            title={feature.title}
            className="sm:min-w-[300px] sm:h-48 bg-dark-gray keen-slider__slide"
            link={feature.link}
          />
        ))}
      </ul>
      </div>
    </section>
  );
};
