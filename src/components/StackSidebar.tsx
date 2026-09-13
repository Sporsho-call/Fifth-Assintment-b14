import type { Technology } from '../types/technology';

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export const StackSidebar = ({
  stack,
  onRemove,
  onRemoveAll
}: StackSidebarProps) => {
  return (
    <aside className="stack-sidebar">

      <div className="mb-5">

        <h2 className="text-[14px] font-bold text-slate-800">
          Your Stack
        </h2>

        <p className="mt-1 text-[9px] font-medium text-slate-400">
          {stack.length}{' '}
          {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
        </p>

      </div>

      {stack.length === 0 ? (

        <div className="rounded-lg border border-dashed border-slate-200 px-4 py-8 text-center">

          <p className="text-[10px] text-slate-400">
            No technology added yet.
          </p>

        </div>

      ) : (

        <div>

          <div className="space-y-2">

            {stack.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-white p-2.5"
              >

                <div className="flex min-w-0 items-center gap-2.5">

                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-6 w-6 object-contain"
                  />

                  <div className="min-w-0">

                    <h4 className="truncate text-[10px] font-bold text-slate-700">
                      {item.name}
                    </h4>

                    <span className="text-[8px] text-slate-400">
                      {item.category}
                    </span>

                  </div>

                </div>

                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="px-1.5 text-sm text-slate-300 transition-colors hover:text-red-500"
                  aria-label={`Remove ${item.name}`}
                >
                  ×
                </button>

              </div>

            ))}

          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-md border border-red-200 py-2 text-[10px] font-semibold text-red-500 transition-colors hover:bg-red-50"
          >
            Remove All
          </button>

        </div>

      )}

    </aside>
  );
};