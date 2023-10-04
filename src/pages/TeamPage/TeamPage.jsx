import { Banner, Team, ClientLogo, About } from './components';
import { teamPageCards } from '../../data/teamData';
import items from '../../data/clientLogoData';

export default function TeamPage() {
  return (
    <>
      <Banner />
      <Team cards={teamPageCards} grey />
      <About />
      <ClientLogo items={items} />
    </>
  );
}
