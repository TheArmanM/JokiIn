// components/PageHeader.tsx
export default function PageHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <section className="bg-navy pt-32 pb-16 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-gray-400 max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}