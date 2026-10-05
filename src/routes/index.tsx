import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProgrammeGrid, ImpactProcess, SummitFeature, Beneficiaries, Purpose, GalleryNotice, JoinCTA } from '@/components/iydi-sections';
import { initiatives, pageHead } from '@/lib/iydi-content';
import logo from '@/assets/iydi-official-logo.webp.asset.json';

export const Route = createFileRoute('/')({
  head: () => pageHead('Impact Youth Development Initiative', 'IYDI empowers young people and women in Nigeria through skills, entrepreneurship, innovation, leadership and mentorship.'),
  component: Index,
});

function Index() {
  return <>
    <section className="home-hero"><div className="site-container">
      <div className="hero-kicker"><span className="label-line" /> IMPACT YOUTH DEVELOPMENT INITIATIVE</div>
      <h1>Empowering young people<br className="desktop-break" /> and women to <span>create impact.</span></h1>
      <p className="hero-copy">Building skills. Nurturing enterprise. Inspiring leadership.<br className="desktop-break" /> Connecting potential with opportunities for a better future.</p>
      <div className="hero-actions"><Button asChild size="lg"><Link to="/programmes">Explore Our Programmes <ArrowUpRight /></Link></Button><Button asChild variant="outline" size="lg"><Link to="/events">View Upcoming Events <ArrowRight /></Link></Button></div>
      <div className="hero-baseline"><span><span className="tiny-mark" /> Rooted in Nigeria. Driven by possibility.</span><span className="hero-scroll">A shared purpose <ArrowRight size={16} /></span></div>
    </div><span className="hero-side-note" aria-hidden="true">POTENTIAL INTO POSSIBILITY</span></section>
    <div className="values-strip"><div className="site-container"><span>Youth empowerment</span><span className="strip-star">✳</span><span>Innovation & enterprise</span><span className="strip-star">✳</span><span>Women’s empowerment</span><span className="strip-star">✳</span><span>Sustainable development</span></div></div>
    <section className="section introduction"><div className="site-container intro-grid"><div><div className="eyebrow"><span className="label-line" />Who we are</div><h2>Potential is everywhere.<br /><span className="muted-heading">Opportunity should be, too.</span></h2></div><div><p className="lead-copy">We are Impact Youth Development Initiative — a Nigerian, youth-focused development organization committed to empowering young people and women.</p><p>We connect skills, entrepreneurship, innovation, leadership and mentorship with opportunities to contribute to sustainable community and national development.</p><Link to="/about" className="text-link">Get to know IYDI <ArrowUpRight size={18} /></Link></div></div></section>
    <section className="section programmes-section"><div className="site-container"><div className="section-heading"><div><div className="eyebrow"><span className="label-line" />What we do</div><h2>Many pathways.<br />One purpose.</h2></div><div><p>Nine programme areas. A shared commitment to<br className="desktop-break" /> empowering people and strengthening communities.</p><Link className="text-link" to="/programmes">Explore all programmes <ArrowUpRight size={18} /></Link></div></div><ProgrammeGrid preview /></div></section>
    <section className="section"><div className="site-container"><div className="section-heading"><div><div className="eyebrow"><span className="label-line" />Our approach</div><h2>How we create impact.</h2></div><Link className="text-link" to="/impact">Our impact approach <ArrowUpRight size={18} /></Link></div><ImpactProcess /></div></section>
    <SummitFeature initiative={initiatives[0]} />
    <section className="section"><div className="site-container serve-grid"><div><div className="eyebrow"><span className="label-line" />Who we serve</div><h2>Ambition has<br />many faces.</h2><p>Our focus is on people and enterprises with the potential to shape stronger, more inclusive communities.</p></div><Beneficiaries /></div></section>
    <section className="section purpose-section"><div className="site-container"><Purpose /></div></section>
    <section className="section"><div className="site-container"><div className="section-heading"><div><div className="eyebrow"><span className="label-line" />Our gallery</div><h2>A closer look at IYDI.</h2></div><img className="gallery-logo" src={logo.url} alt="Official IYDI emblem" width="80" height="80" loading="lazy" /></div><GalleryNotice preview /></div></section>
    <JoinCTA />
  </>;
}
