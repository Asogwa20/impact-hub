import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, GalleryNotice, JoinCTA } from '@/components/iydi-sections';
import { pageHead } from '@/lib/iydi-content';

export const Route = createFileRoute('/gallery')({ head: () => pageHead('Official gallery', 'Official photographs from IYDI programmes and events will be shared in the organization’s gallery when available.'), component: Gallery });
function Gallery() { return <><PageIntro label="The IYDI gallery" title="People at the heart of impact."><p>A space for official photographs from our programmes, events and community activities.</p></PageIntro><section className="section"><div className="site-container"><GalleryNotice /></div></section><JoinCTA /></>; }