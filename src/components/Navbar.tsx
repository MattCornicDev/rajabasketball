"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Calendrier', href: '/calendrier' },
  { label: 'Équipe', href: '/equipe' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Billetterie', href: '/billeterie' },
  { label: 'Boutique', href: '/boutique' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Partenaires', href: '/partenaire' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname ?? '';

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navigation principale">
        <Link href="/" className="brand" aria-label="Raja Basketball — accueil" onClick={closeMenu}>
          <Image src="/logo-raja.svg" alt="" width={48} height={48} priority />
          <span><strong>RAJA</strong><small>BASKETBALL</small></span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>{isOpen ? '×' : '☰'}</span>
        </button>

        <div id="primary-navigation" className={`nav-links${isOpen ? ' nav-links-open' : ''}`}>
          {menuItems.map((item) => {
            const isActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive ? ' nav-link-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/login" className="button button-primary nav-login" onClick={closeMenu}>
            Espace membre
          </Link>
        </div>
      </nav>
    </header>
  );
}
