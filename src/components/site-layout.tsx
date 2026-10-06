import { useEffect, useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation, organizationName, programmes } from '@/lib/iydi-content';
import { contact } from '@/lib/iydi-details';
import logo from '@/assets/iydi-official-logo.webp.asset.json';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="top-strip"><div className="site-container"><span>YOUTH. OPPORTUNITY. IMPACT.</span><span>Nigeria · Community & national development</span></div></div>
    <header className="site-header">
      <div className="site-container header-inner">
        <Link to="/" className="brand" aria-label="IYDI home"><img src={logo.url} alt="Official IYDI logo" width="58" height="58" /><span><strong>IYDI<span className="brand-dot">.</span></strong><small>Impact Youth Development Initiative</small></span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} activeProps={{ className: 'nav-active', 'aria-current': 'page' }}>{item.label}</Link>)}</nav>
        <Button className="menu-toggle" variant="ghost" size="icon" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} activeProps={{ className: 'nav-active', 'aria-current': 'page' }}>{item.label}<ArrowUpRight size={18} /></Link>)}<Button asChild size="lg"><Link to="/programmes">Explore Our Programmes <ArrowUpRight /></Link></Button></nav>}
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container footer-main">
    <div><Link className="brand footer-brand" to="/"><img src={logo.url} alt="IYDI" width="64" height="64" /><span><strong>IYDI<span className="brand-dot">.</span></strong><small>{organizationName}</small></span></Link><p>Empowering young people and women.<br />Enabling sustainable development.</p><span className="footer-location">Rooted in Nigeria. Focused on opportunity.</span></div>
    <div><span className="eyebrow">The organization</span><div className="footer-links">{navigation.filter(n => ['About', 'Impact', 'Leadership', 'Contact'].includes(n.label)).map(n => <Link key={n.to} to={n.to}>{n.label}</Link>)}</div></div>
    <div><span className="eyebrow">Programmes</span><div className="footer-links footer-programmes">{programmes.map((programme, index) => <Link key={programme.title} to="/programmes" hash={`programme-${index + 1}`}>{programme.title}</Link>)}</div></div>
    <div className="footer-contact"><span className="eyebrow">Contact IYDI</span><address><p>{contact.address}</p><a href={contact.phoneHref}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a></address><p className="footer-social">Official social links forthcoming.</p><Link className="text-link" to="/contact">Connect with IYDI <ArrowUpRight size={16} /></Link></div>
  </div><div className="site-container footer-bottom"><span>© {new Date().getUTCFullYear()} Impact Youth Development Initiative.</span><span>Youth empowerment · Sustainable development</span></div></footer>;
}