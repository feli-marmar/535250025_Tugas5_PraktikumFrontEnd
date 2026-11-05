import Container from "./Container";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-purple-400 to-pink-300 py-12 text-black sm:py-16">
      <Container>
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-black">{subtitle}</p>}
      </Container>
    </section>
  );
}