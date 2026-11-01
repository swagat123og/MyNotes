
const CategoryNutton = ({
  tab,
  activeTab,
  setActiveTab,
}: {
  tab: { label: string; color: string };
  activeTab: string;
  setActiveTab: (label: string) => void;
}) => {
  return (
    <div>
         <button key={tab.label} onClick={()=>setActiveTab(tab.label)} className={`flex items-center gap-2 rounded-full border border-transparent px-5 py-1 text-sm font-medium text-[#171A2D] transition-colors hover:bg-white ${
    activeTab===tab.label
    ? "bg-[#ECEFFD] text-[#171A2D]"
    :"border-[#292D47] bg-[#171A2D] text-[#ECEFFD]"}`}>
        
    <span className={`h-2 w-2 rounded-full ${tab.color}`}></span>
    <span>{tab.label}</span>
    <span className="text-xs text-[#626780]">10</span>
  </button>
    </div>
  )
}

export default CategoryNutton
