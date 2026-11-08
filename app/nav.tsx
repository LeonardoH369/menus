'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
    { path: '/', label: 'Inicio' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/contacto', label: 'Contacto' },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav aria-label="Menú principal">
            {items.map(({ path, label }) => (
                <Link key={path} href={path} aria-current={pathname === path ? 'page' : undefined}>
                    {label}
                </Link>
            ))}
        </nav>
    );
}
