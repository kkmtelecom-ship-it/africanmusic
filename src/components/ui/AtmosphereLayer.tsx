export default function AtmosphereLayer() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.16),transparent_45%)]" />

      <div className="pointer-events-none absolute left-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#c6a972]/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-10%] right-[-5%] h-[420px] w-[420px] rounded-full bg-[#c6a972]/10 blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/images/grid/noise.png')]" />
    </>
  );
}
