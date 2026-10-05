import { createFileRoute } from '@tanstack/react-router';
import { UsersRound } from 'lucide-react';
import { PageIntro, JoinCTA } from '@/components/iydi-sections';
import { pageHead } from '@/lib/iydi-content';

export const Route = createFileRoute('/leadership')({ head: () => pageHead('Leadership', 'Official leadership profiles and responsibilities for Impact Youth Development Initiative will be published when available.'), component: Leadership });
function Leadership() { return <><PageIntro label="Our leadership" title="A shared commitment to development."><p>Meet the people guiding Impact Youth Development Initiative.</p></PageIntro><section className="section"><div className="site-container"><div className="information-state"><UsersRound size={32} strokeWidth={1.3} /><div><h3>Leadership profiles to follow.</h3><p>Official names, roles and biographies will be published when available.</p></div></div></div></section><JoinCTA /></>; }