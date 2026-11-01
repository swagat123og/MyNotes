
import { Bell } from "lucide-react";

const SetBellIcon = () => {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="group mr-8 relative flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#292D47] bg-[#181C30] text-[#9AA0C0] transition-all duration-200 hover:border-[#41496D] hover:bg-[#222640] hover:text-[#8B98FF]"
    >
      {/* Bell Icon */}
      <Bell
        size={25}
        strokeWidth={1.8}
        className="transition-transform duration-200 group-hover:-rotate-6"
      />

      {/* Notification Indicator */}
      <span className="absolute right-2 top-8 h-2 w-2 rounded-full border border-[#181C30] bg-[#8B98FF]" />
    </button>
  );
};

export default SetBellIcon;

