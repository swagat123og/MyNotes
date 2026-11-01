
import profile_pic from "../../assets/profile.jpg";

const SetProfile = () => {
  return (
    <button
      type="button"
      aria-label="Open profile"
      className="group relative flex shrink-0 items-center justify-center rounded-full p-0.5 transition-all duration-200 hover:bg-[#8B98FF]/15"
    >
      {/* Profile Image */}
      <img
        src={profile_pic}
        alt="Your profile"
        className="h-12 w-12 rounded-full border-2 border-[#292D47] object-cover transition-colors duration-200 group-hover:border-[#8B98FF]"
      />

      {/* Online Status */}
      <span className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#181C30] bg-emerald-400" />
    </button>
  );
};

export default SetProfile;
