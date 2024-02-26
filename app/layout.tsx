import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>un encabezado para todas las rutas</h1>
        {children}
        <footer className="flex justify-center">
          Hecho con ❤ por la gente de Vercel
        </footer>
      </body>
    </html>
  );
}
