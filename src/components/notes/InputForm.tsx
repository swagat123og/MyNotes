import { Star, Trash2 } from "lucide-react";
import { useState } from "react";

const tabs = [
  { color: "#1D2C47", label: "Work" },
  { color: "#2A2649", label: "Personal" },
  { color: "#43242F", label: "Study" },
  { color: "#3E391B", label: "Ideas" },
];

const InputForm = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ backgroundColor: activeTab.color }}
      className="flex w-full flex-col gap-3.5 rounded-[28px] p-[26px] text-[#ECEFFD] shadow-[0_40px_80px_-30px_rgba(10,15,50,0.7)] transition-colors duration-300"
    >
      {/* Title */}
      <input
        type="text"
        placeholder="Untitled"
        className="w-full bg-transparent pr-10 font-['Bricolage_Grotesque'] text-[28px] font-extrabold leading-tight tracking-[-0.03em] text-[#ECEFFD] outline-none placeholder:text-[#A0A5C4] sm:text-[30px]"
      />

      {/* Note Content */}
      <textarea
        rows={5}
        placeholder="Start writing..."
        className="min-h-[110px] w-full resize-none bg-transparent text-base leading-6 text-[#ECEFFD] outline-none placeholder:text-[#A0A5C4]"
      />

      {/* Task Input */}
      <div className="border-t border-dashed border-white/25 pt-2.5">
        <input
          type="text"
          placeholder="Add a task and press Enter"
          className="w-full bg-transparent text-base text-[#ECEFFD] outline-none placeholder:text-[#A0A5C4]"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap items-center gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab.label === tab.label;

          return (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-3.5 py-1 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "border-[#ECEFFD] bg-[#ECEFFD] text-[#171827]"
                  : "border-white/20 bg-transparent text-[#D7D8EA] hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap items-center gap-2">
          {/* Favorite */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold text-[#ECEFFD] transition-colors hover:bg-white/10"
          >
            <Star size={16} strokeWidth={2.2} />
            Favorite
          </button>

          {/* Move to Trash */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold text-[#ECEFFD] transition-colors hover:bg-white/10 hover:text-rose-300"
          >
            <Trash2 size={16} strokeWidth={2} />
            Move to trash
          </button>
        </div>

        {/* Done */}
        <button
          type="submit"
          className="rounded-full bg-[#8B98FF] px-6 py-2.5 text-sm font-bold text-[#10132A] transition-colors hover:bg-[#A2ACFF]"
        >
          Done
        </button>
      </div>
    </form>
  );
};

export default InputForm;