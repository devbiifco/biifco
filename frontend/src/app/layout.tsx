import React from 'react';
import { Metadata } from 'next';
import './globals.css'; // Importa los estilos globales
import { textFont } from '../config/fonts'; // Importa la configuración de fuentes
import Header from '@/components/ui/header'; // Importa el componente Header
import Footer from '@/components/ui/footer'; // Importa el componente Footer

// Metadatos de la página
export const metadata: Metadata = {
  title: 'biifco platform',
  description: 'Unleash the Full Potential of blockchain',
};

// Componente de diseño raíz que envuelve toda la aplicación
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Propiedad que representa los elementos hijos de la página
}>) {
  return (
    <html lang="en"> {/* Define el idioma del documento */}
      <body className={`${textFont.className} flex flex-col min-h-screen`}>
        {/* Incluye el encabezado de la página */}
        <Header />

        {/* Área principal donde se renderizan los hijos */}
        <main className="flex-grow flex justify-center items-center">
          {children}
        </main>

        {/* Incluye el pie de página de la página */}
        <Footer />
      </body>
    </html>
  );
}
