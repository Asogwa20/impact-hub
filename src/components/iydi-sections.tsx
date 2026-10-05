import type { ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Check, Camera, MoveUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { programmes, impactSteps, beneficiaries, type Initiative } from '@/lib/iydi-content';

export function PageIntro({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return <section className="page-intro"><div className="site-container"><div className="eyebrow"><span className="label-line" />{label}</div><h1>{title}</h1><div className="intro-copy">{children}</div></div></section>;
}
export function ProgrammeGrid({ preview = false }: { preview?: boolean }) {
  return <div className="programme-grid">{programmes.map((programme, index) => <article className="programme-item" key={programme.title}><div className="programme-top"><programme.icon strokeWidth={1.5} size={27} /><span className="item-number">0{index + 1}</span></div><h3>{programme.title}</h3>{!preview && <p>{programme.description}</p>}<Link to="/programmes" hash={preview ? undefined : `programme-${index + 1}`} className="programme-link" aria-label={`Explore ${programme.title}`}><ArrowUpRight size={21} /></Link></article>)}</div>;
}
export function ImpactProcess() {
  return <div className="impact-process">{impactSteps.map((step, i) => <article key={step.title}><div className="step-line"><span>0{i + 1}</span>{i < 4 && <ArrowRight size={20} />}</div><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>;
}
export function SummitFeature({ initiative, detailed = false }: { initiative: Initiative; detailed?: boolean }) {
  const hasRegistration = initiative.registrationUrl?.startsWith('https://');
  return <section className="summit-section"><div className="site-container"><div className="summit-heading"><div><div className="eyebrow"><span className="label-line" />{initiative.label}</div><h2>Impact Business<br />Innovation <em>Summit.</em></h2></div><div className="summit-monogram" aria-hidden="true">IBIS<MoveUpRight size={44} strokeWidth={1} /></div></div><div className="summit-body"><div><p className="summit-description">{initiative.description}</p>{initiative.date && <p>Date: {initiative.date}</p>}{initiative.venue && <p>Venue: {initiative.venue}</p>}<div className="summit-actions">{detailed ? (hasRegistration ? <Button asChild variant="light" size="lg"><a href={initiative.registrationUrl} target="_blank" rel="noopener noreferrer">Register for the summit <ArrowUpRight /></a></Button> : <span className="event-status"><span />Dates & registration to be announced</span>) : <Button asChild variant="light" size="lg"><Link to="/events">Explore the Summit <ArrowUpRight /></Link></Button>}</div></div><div><span className="eyebrow summit-small-label">Ideas. Connections. Opportunity.</span><ul className="activity-list">{initiative.activities.map(activity => <li key={activity}><Check size={15} />{activity}</li>)}</ul></div></div>{detailed && <div className="summit-audience"><span className="eyebrow">Bringing together</span><p>{initiative.audiences.join(' · ')}</p></div>}</div></section>;
}
export function Beneficiaries() {
  return <ul className="beneficiaries">{beneficiaries.map(item => <li key={item}><span className="tiny-mark" />{item}</li>)}</ul>;
}
export function Purpose() {
  return <div className="purpose-grid"><article><span className="eyebrow">Our vision</span><h3>A future shaped by<br />empowered people.</h3><p>Young people and women as productive, innovative and responsible contributors to sustainable community and national development.</p></article><article><span className="eyebrow">Our mission</span><h3>Turning potential<br />into participation.</h3><p>Empowering young people and women through skills, entrepreneurship, innovation, leadership, mentorship and opportunities.</p></article></div>;
}
export function GalleryNotice({ preview = false }: { preview?: boolean }) {
  return <div className="gallery-notice"><div className="gallery-symbol"><Camera size={32} strokeWidth={1.2} /></div><div><span className="eyebrow">The IYDI story, in pictures</span><h3>Real people. Real moments.</h3><p>Official event photographs will be published here when available.</p></div>{preview && <Link to="/gallery" className="text-link">Visit the Gallery <ArrowUpRight size={18} /></Link>}</div>;
}
export function JoinCTA() {
  return <section className="join-section"><div className="site-container"><div><span className="eyebrow">Opportunity starts with connection</span><h2>Be part of <em>the impact.</em></h2><p>Explore a programme. Attend an event. Partner with IYDI.<br />Together, we can create opportunities that matter.</p></div><Button asChild variant="light" size="lg"><Link to="/contact">Connect with IYDI <ArrowUpRight /></Link></Button></div></section>;
}