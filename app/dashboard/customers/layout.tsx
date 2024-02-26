export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      Este es el footer de las rutas internas de customers 😎
    </section>
  );
}
