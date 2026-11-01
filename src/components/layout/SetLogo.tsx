
import { NotebookPen } from "lucide-react";

const SetLogo = () => {
  return (
    <div className="group flex shrink-0 cursor-pointer items-center gap-2.5">
      {/* Logo Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8B98FF]/20 bg-[#8B98FF]/10 transition-all duration-300 group-hover:bg-[#8B98FF]/20">
        <NotebookPen
          size={30}
          strokeWidth={2.2}
          className="text-[#8B98FF] transition-transform duration-300 group-hover:-rotate-6"
        />
      </div>

      {/* Logo Text */}
      <div className="flex items-baseline">
        <span className="text-xl font-extrabold tracking-tight text-[#ECEFFD] sm:text-4xl">
          My
        </span>

        <span className="text-xl font-extrabold tracking-tight text-[#8B98FF] sm:text-4xl">
          Notes
        </span>
      </div>
    </div>
  );
};

export default SetLogo;

