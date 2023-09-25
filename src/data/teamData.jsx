import user1 from '../img/HomePage/Team/1.jpg';
import user2 from '../img/HomePage/Team/2.jpg';
import user3 from '../img/HomePage/Team/3.jpg';
import user4 from '../img/TeamPage/4.jpg';
import user5 from '../img/TeamPage/5.jpg';
import user6 from '../img/TeamPage/6.jpg';

import { ReactComponent as Ln } from '../img/HomePage/Team/In.svg';
import { ReactComponent as Tw } from '../img/HomePage/Team/tw.svg';
import { ReactComponent as Fb } from '../img/HomePage/Team/fb.svg';
import { ReactComponent as Inst } from '../img/HomePage/Team/inst.svg';

const cards = [
  {
    name: 'Jessca Arow',
    img: user1,
    position: 'Warehouse Head',
    linkedin: false,
    twitter: <Tw />,
    facebook: <Fb />,
    instagram: <Inst />,
  },
  {
    name: 'Kathleen Smith',
    img: user2,
    position: 'Transport Manager',
    linkedin: <Ln />,
    twitter: <Tw />,
    facebook: <Fb />,
    instagram: <Inst />,
  },
  {
    name: 'Rebecca Tylor',
    img: user3,
    position: 'Cargo Head',
    linkedin: false,
    twitter: false,
    facebook: <Fb />,
    instagram: <Inst />,
  },
];

const teamPageCards = [
  {
    name: 'Jessca Arow',
    img: user1,
    position: 'Warehouse Head',
    linkedin: false,
    twitter: <Tw />,
    facebook: <Fb />,
    instagram: <Inst />,
  },
  {
    name: 'Kathleen Smith',
    img: user2,
    position: 'Transport Manager',
    linkedin: <Ln />,
    twitter: <Tw />,
    facebook: <Fb />,
    instagram: <Inst />,
  },
  {
    name: 'Rebecca Tylor',
    img: user3,
    position: 'Cargo Head',
    linkedin: false,
    twitter: false,
    facebook: <Fb />,
    instagram: <Inst />,
  },
  {
    name: 'Ria Jackson',
    img: user4,
    position: 'Operational Head',
    linkedin: false,
    twitter: <Tw />,
    facebook: <Fb />,
    instagram: <Inst />,
  },
  {
    name: 'Kane William',
    img: user5,
    position: 'Country Head',
    linkedin: false,
    twitter: <Tw />,
    facebook: <Fb />,
    instagram: <Inst />,
  },
  {
    name: 'Lisara Tylor',
    img: user6,
    position: 'Finance Manager',
    linkedin: false,
    twitter: false,
    facebook: <Fb />,
    instagram: <Inst />,
  },
];

export { cards, teamPageCards };
