import { Banner, Team } from '../../components/TeamPage';
import { teamPageCards } from '../../data/teamData';

export default function TeamPage() {
  return (
    <>
      <Banner />
      <Team cards={teamPageCards} />
    </>
  );
}
