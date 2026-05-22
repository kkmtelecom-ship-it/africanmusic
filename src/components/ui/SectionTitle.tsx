interface SectionTitleProps {
  eyebrow: string;
  title: string;
}

export default function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="mb-16">
      <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#c6a972]">
        {eyebrow}
      </p>

      <h2 className="max-w-3xl text-4xl font-black leading-[1.05] md:text-5xl xl:text-6xl">
        {title}
      </h2>
    </div>
  );
}
