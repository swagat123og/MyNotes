
import { useState } from "react";
import { X } from "lucide-react";
import InputForm from "../notes/InputForm";

const SideBar = () => {
  const [acitveTab, setTab] = useState("All");
  const [formVisible, setFormVisible] = useState(false);

  const tabs = ["All", "Favorite", "Trash"];

  return (
    <div className="sticky top-2 z-50 flex w-full justify-center px-2 sm:px-4">
      {/* Navigation */}
      <nav className="flex w-full max-w-[950px] items-center gap-3 rounded-full border border-[#292D47] bg-[#171A2D]/95 px-3 py-2 backdrop-blur-xl sm:gap-3 sm:px-4">

        {/* Filter Tabs */}
        <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#25283B] p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setTab(tab)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                acitveTab === tab
                  ? "bg-[#171A2D] text-[#F0F1FA]"
                  : "bg-transparent text-[#9DA3C0] hover:text-[#F0F1FA]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="min-w-0 flex-1">
          <input
            className="w-full rounded-full border border-[#292D47] bg-transparent px-4 py-3 text-sm font-medium text-[#F0F1FA] outline-none transition-colors placeholder:text-[#858BA8] focus:border-[#454B70] sm:px-5"
            type="text"
            placeholder="Search your notes"
          />
        </div>

        {/* New Note */}
        <button
          type="button"
          onClick={() => setFormVisible(true)}
          className="shrink-0 rounded-full bg-[#8B98FF] px-4 py-3 text-sm font-semibold text-[#10132A] transition-colors hover:bg-[#A2ACFF] sm:px-6"
        >
          New note
        </button>
      </nav>

      {/* Modal */}
      {formVisible && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#121634]/40 p-4 backdrop-blur-[4px] sm:p-6"
          onClick={() => setFormVisible(false)}
        >
          {/* Modal Container (no frame, the form card is the modal) */}
          <div
            className="relative my-auto w-full max-w-[580px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (now inside the card) */}
            <button
              type="button"
              onClick={() => setFormVisible(false)}
              aria-label="Close form"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#ECEFFD] transition-colors hover:bg-white/20"
            >
              <X size={17} />
            </button>

            {/* Note Form */}
            <InputForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
