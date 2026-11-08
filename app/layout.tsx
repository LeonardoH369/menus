import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Navigation from './nav';
import './globals.css';

export const metadata: Metadata = {
    title: { default: 'Cuaderno de diseño', template: '%s | Cuaderno de diseño' },
    description: 'Tres secciones de una actividad de desarrollo web con Next.js, Express y MySQL.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="es">
            <body>
                <header className="site-header">
                    <div className="wrap header-inner">
                        <Link className="brand" href="/">
                            <span className="mark" aria-hidden="true">✳</span> Cuaderno de diseño
                        </Link>
                        <Navigation />
                    </div>
                </header>
                <main className="wrap">{children}</main>
                <footer className="site-footer">
                    <div className="wrap footer-inner">
                        <span><strong>Leonardo Hinojosa Castro</strong> · Actividad 11</span>
                        <span>Next.js · Express · MySQL</span>
                    </div>
                </footer>
            </body>
        </html>
    );
}
