import { BsArrowRight } from "react-icons/bs";

interface CardProps {
  title: string;
  subtitle: string;
  className?: string;
  link?: string;
}

export const Card = ({ className, title, subtitle, link }: CardProps) => {
  return (
    <div
      className={`grow px-4 py-6 sm:px-10 sm:py-12 rounded-lg gap-3 items-center flex sm:flex-row flex-col justify-center ${className}`}
    >
      <div>
        <h4 className="font-semibold mb-3">{title}</h4>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
      {link && (
        <div className="flex items-end mt-2">
          <button>
            <BsArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
