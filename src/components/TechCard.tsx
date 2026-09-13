import type { Technology } from '../types/technology';

interface TechCardProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isAdded: boolean;
}

export const TechCard = ({
  tech,
  onAdd,
  isAdded
}: TechCardProps) => {

  const getBadgeClass = () => {
    switch (tech.badge) {
      case 'Popular':
        return 'badge-blue';

      case 'Versatile':
        return 'badge-green';

      case 'Fast':
        return 'badge-orange';

      case 'Cache':
        return 'badge-red';

      case 'Essential':
        return 'badge-blue';

      case 'Modern':
        return 'badge-cyan';

      case 'Containers':
        return 'badge-cyan';

      case 'Top SQL':
        return 'badge-blue';

      case 'Standard':
        return 'badge-green';

      default:
        return 'badge-blue';
    }
  };

  return (
    <article className="tech-card">

      {/* TOP */}
      <div>

        <div className="mb-4 flex items-start justify-between gap-3">

          <div className="flex h-9 w-9 items-center justify-center">
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-8 w-8 object-contain"
            />
          </div>

          <span className={`tech-badge ${getBadgeClass()}`}>
            {tech.badge}
          </span>

        </div>

        <h3 className="mb-2 text-[15px] font-bold text-slate-800">
          {tech.name}
        </h3>

        <p className="min-h-[54px] text-[10px] leading-[1.65] text-slate-400">
          {tech.description}
        </p>

      </div>

      {/* BOTTOM */}
      <div>

        <div className="my-4 border-t border-slate-100 pt-3">

          <div className="flex items-center justify-between gap-2 text-[9px] text-slate-400">

            <span className="rounded bg-slate-100 px-2 py-1 font-medium text-slate-500">
              {tech.category}
            </span>

            <span>
              {tech.difficulty}
            </span>

            <span className="font-semibold text-slate-600">
              <span className="rating-star">★</span>{' '}
              {tech.rating.toFixed(1)}
            </span>

          </div>

        </div>

        <button
          type="button"
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full rounded-md py-2.5 text-[10px] font-semibold transition-all ${
            isAdded
              ? 'cursor-not-allowed border border-emerald-200 bg-emerald-50 text-emerald-600'
              : 'stack-button hover:-translate-y-0.5'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>

      </div>

    </article>
  );
};