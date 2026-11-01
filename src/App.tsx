
import Hero from "./pages/Hero";

const App = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#10121F] text-[#ECEFFD]">
      
      {/* Subtle background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/3 h-[420px] w-[420px] rounded-full bg-[#5968D9]/[0.08] blur-[120px]"
      />

      {/* Secondary ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[420px] h-[300px] w-[300px] rounded-full bg-[#8B98FF]/[0.04] blur-[100px]"
      />

      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#ECEFFD 0.6px, transparent 0.6px)",
          backgroundSize: "24px 24px",
        }}
      />


        <Hero />

    </main>
  );
};

export default App;
