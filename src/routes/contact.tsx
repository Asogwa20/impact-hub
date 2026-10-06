import { useState, type FormEvent } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageIntro } from '@/components/iydi-sections';
import { pageHead } from '@/lib/iydi-content';
import { contact } from '@/lib/iydi-details';

export const Route = createFileRoute('/contact')({ head: () => pageHead('Connect with IYDI', 'Contact Impact Youth Development Initiative in Enugu, Nigeria. Call 08056833892 or email impactyouthd@gmail.com for programmes and partnership enquiries.'), component: Contact });
function Contact() {
  const [draftReady, setDraftReady] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`IYDI enquiry: ${String(data.get('subject'))}`);
    const body = encodeURIComponent(`Name: ${String(data.get('name'))}\nEmail: ${String(data.get('email'))}\n\n${String(data.get('message'))}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setDraftReady(true);
  }
  return <><PageIntro label="Connect with IYDI" title="Let’s create impact together."><p>Explore programmes, attend events or collaborate around opportunities for young people and women.</p></PageIntro><section className="section"><div className="site-container"><div className="contact-cards"><article><MapPin size={26} strokeWidth={1.4} /><span className="eyebrow">Visit us</span><h3>Enugu, Nigeria</h3><p>{contact.address}</p><a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="text-link">View location <ArrowUpRight size={17} /></a></article><article><Phone size={26} strokeWidth={1.4} /><span className="eyebrow">Call IYDI</span><h3><a href={contact.phoneHref}>{contact.phone}</a></h3><p>Programme and partnership enquiries.</p></article><article><Mail size={26} strokeWidth={1.4} /><span className="eyebrow">Email IYDI</span><h3><a href={`mailto:${contact.email}`}>{contact.email}</a></h3><p>Connect with our organization.</p></article></div></div></section><section className="section purpose-section"><div className="site-container contact-grid"><div><span className="eyebrow">A conversation with purpose</span><h2>Partnership.<br />Participation.<br /><span className="muted-heading">Possibility.</span></h2><p>We welcome interest in youth empowerment, women’s empowerment, enterprise, innovation and sustainable community development.</p><div className="contact-location"><span className="eyebrow">Social media</span><p>Official social media links will be published when confirmed.</p></div></div><form className="contact-form" onSubmit={prepareEmail}><h3>Contact IYDI</h3><div className="form-row"><label>Full name<input name="name" autoComplete="name" required maxLength={150} /></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label></div><label>Subject<select name="subject" defaultValue="Programme enquiry"><option>Programme enquiry</option><option>Partnership enquiry</option><option>Event enquiry</option><option>General enquiry</option></select></label><label>Message<textarea name="message" rows={5} required maxLength={5000} /></label><Button size="lg" type="submit">Prepare email <ArrowUpRight /></Button>{draftReady && <p role="status">Your email draft is ready for your email app. It has not been sent.</p>}</form></div></section><section className="section"><div className="site-container location-band"><div><span className="eyebrow">Our location</span><h2>Rooted in Enugu.<br />Focused on opportunity.</h2><p>{contact.address}</p></div><Button asChild variant="outline" size="lg"><a href={contact.mapUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps <ArrowUpRight /></a></Button></div></section></>;
}