import { initialNotes } from "../../data/initialNotes";
import { Star, CheckSquare } from "lucide-react";

// design only: slight sticky-note tilt, repeats every 3 cards
const tilts = ["-rotate-[0.5deg]", "rotate-[0.4deg]", "rotate-0"];

const Cards = () => {
  return (
    // CSS columns = masonry, so each card keeps the height of its own content
    <div className="columns-1 gap-x-[18px] px-4 py-6 sm:columns-2 sm:px-12 xl:columns-3">
      {initialNotes.map((note, index) => (
        <div
          key={note.id}
          style={{ backgroundColor: note.color }}
          className={`group mb-[18px] flex break-inside-avoid flex-col rounded-[24px] border border-white/[0.07] px-5 pb-4 pt-5 transition-[transform,box-shadow] duration-200 hover:-translate-y-[5px] hover:rotate-0 hover:shadow-[0_18px_36px_-18px_rgba(40,50,120,0.55)] ${tilts[index % 3]}`}
        >
          {/* Card Header */}
          <div>
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-['Bricolage_Grotesque'] text-xl font-bold leading-tight tracking-[-0.02em] text-[#ECEFFD] sm:text-[21px]">
                {note.title}
              </h2>

              <button
                type="button"
                aria-label="Favorite note"
                className={`-mr-1 -mt-1 shrink-0 rounded-full p-1.5 transition-colors hover:bg-white/10 ${
                  note.isFavorite
                    ? "text-[#AAB3FF]"
                    : "text-[#9AA0C0] hover:text-[#ECEFFD]"
                }`}
              >
                <Star
                  size={19}
                  strokeWidth={2}
                  fill={note.isFavorite ? "currentColor" : "none"}
                />
              </button>
            </div>

            {/* Note Content: line breaks kept, longer notes make taller cards */}
            <p className="mt-2 line-clamp-5 whitespace-pre-line text-[15px] leading-6 text-[#D7D9EC] empty:hidden">
              {note.content}
            </p>
          </div>

          {/* Tasks Preview */}
          {note.tasks?.length > 0 && (
            <div className="mt-4 flex">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/15 px-3 py-1 text-xs font-medium text-[#C0C4DA]">
                <CheckSquare size={14} />
                {note.tasks.length} tasks
              </span>
            </div>
          )}

          {/* Card Footer */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-white/10 px-3 py-0.5 text-[13px] font-medium text-[#ECEFFD]">
              {note.category}
            </span>

            <span className="text-[13px] text-[#A0A5C4]">{note.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;