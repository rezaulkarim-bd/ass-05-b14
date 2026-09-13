import type { Technology } from "../types/Technology";



interface Props {
  stack: Technology[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export default function StackPanel({ stack, onRemove, onClearAll }: Props) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-6">
      <div className="mb-4">
        <h3 className="font-bold text-gray-900 text-sm">Your Stack</h3>
        <p className="text-xs text-gray-400">{stack.length} Technology Selected</p>
      </div>

      <div className="space-y-3 mb-6">
        {stack.length === 0 ? (
          <p className="text-xs text-gray-400 text-center py-6 border border-dashed border-gray-200 rounded-xl">
            No technologies selected
          </p>
        ) : (
          stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2.5">
                <span className="text-lg">{item.icon}</span>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{item.name}</h4>
                  <span className="text-[10px] text-gray-400">{item.category}</span>
                </div>
              </div>
              <button 
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 text-xs px-1.5"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {stack.length > 0 && (
        <button
          onClick={onClearAll}
          className="w-full py-2 text-xs font-medium text-red-500 border border-red-100 rounded-xl hover:bg-red-50 transition"
        >
          Remove All
        </button>
      )}
    </div>
  );
}


