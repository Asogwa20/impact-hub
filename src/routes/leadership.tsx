import { createFileRoute } from '@tanstack/react-router';
import { Image } from 'lucide-react';
import { JoinCTA } from '@/components/iydi-sections';
import { pageHead } from '@/lib/iydi-content';
import { president } from '@/lib/iydi-details';
import { presidentBiography, presidentRoles, presidentCoreAreas, presidentPortrait } from '@/lib/iydi-president';

export const Route = createFileRoute('/leadership')({ head: () => {
  const head = pageHead('Ejike Celestine Nnaji | Leadership', 'Meet Ejike Celestine Nnaji, President of IYDI, CEO of Celvia Koncept Ltd and Convener of the Impact Business Innovation Summit.');
  if (presidentPortrait?.url.startsWith('https://')) head.meta.push({ property: 'og:image', content: presidentPortrait.url }, { name: 'twitter:image', content: presidentPortrait.url });
  return head;
}, component: Leadership });
function Leadership() {
  return <>
    <section className="leader-intro"><div className="site-container"><div className="eyebrow"><span className="label-line" />Our leadership</div><div className="leader-profile">
      <figure className="leader-portrait">{presidentPortrait ? <img src={presidentPortrait.url} alt={presidentPortrait.alt} /> : <div className="portrait-empty"><Image size={38} strokeWidth={1} aria-hidden="true" /><span>Official portrait forthcoming</span></div>}<figcaption><span>President & Convener</span><strong>Impact Youth Development Initiative</strong></figcaption></figure>
      <div className="leader-summary"><span className="eyebrow leader-label">President, IYDI</span><h1>EJIKE<br />CELESTINE<br /><span>NNAJI</span></h1><ul className="leader-roles" aria-label="Professional roles">{presidentRoles.map(role => <li key={role}>{role}</li>)}</ul><div className="leader-short"><p>{presidentBiography[0]}</p></div></div>
    </div></div></section>
    <section className="section"><div className="site-container biography-layout"><div className="biography-heading"><span className="eyebrow">The President</span><h2>Experience.<br />Service.<br /><span className="muted-heading">Purpose.</span></h2><span className="biography-name">{president.name}</span></div><article className="biography-copy" aria-labelledby="biography-title"><h2 id="biography-title">Full biography</h2>{presidentBiography.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</article></div></section>
    <section className="section expertise-section"><div className="site-container"><div className="section-heading"><div><span className="eyebrow">Core areas</span><h2>Areas of expertise.</h2></div></div><ul className="expertise-grid">{presidentCoreAreas.map((area, index) => <li key={area}><span>{String(index + 1).padStart(2, '0')}</span>{area}</li>)}</ul></div></section><JoinCTA />
  </>;
}