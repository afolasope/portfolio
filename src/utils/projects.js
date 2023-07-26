import space from '../assets/images/space.png';
import worldy from '../assets/images/worldy.png';
import bank from '../assets/images/bank.png';
import todo from '../assets/images/todo.png';
import folarooney from '../assets/images/folarooney.png';
import scrs from '../assets/images/scrs.png';

const projects = [
  {
    id: 11,
    title: 'Scrs - Url shortening app',
    desc: '',
    image: scrs,
    tags: ['mern', 'express', 'react ', 'api'],
    repoLink: 'https://github.com/afolasope/url-shortener-mern',
    liveLink: 'https://scrs-io.onrender.com',
  },
  {
    id: 12,
    title: 'Folarooney - A food ordering app',
    desc: '',
    image: folarooney,
    tags: ['mern', 'socket.io', 'express', 'tailwind'],
    repoLink: 'https://github.com/afolasope/Folarooney',
    liveLink: 'https://folarooney.onrender.com/',
  },
  {
    id: 4,
    title: 'Taskify',
    desc: '',
    image: todo,
    tags: ['tailwind', 'react', 'api'],
    repoLink: 'https://github.com/afolasope/task-manager',
    liveLink: 'https://task-manager-fola.netlify.app/',
  },
  {
    id: 1,
    title: 'Explora',
    desc: '',
    image: space,
    tags: ['html', 'css', 'javascript'],
    repoLink: 'https://github.com/afolasope/space-explorer',
    liveLink:
      'https://afolasope.github.io/space-explorer/starter-code/destination.html',
  },
  {
    id: 2,
    title: 'Worldie ',
    desc: '',
    image: worldy,
    tags: ['html', 'css', 'javascript'],
    repoLink: 'https://github.com/afolasope/worldly',
    liveLink: 'https://worldy.netlify.app/',
  },

  {
    id: 3,
    title: 'Easy Banking',
    desc: '',
    image: bank,
    tags: ['scss', 'html', 'javascript'],
    repoLink: 'https://github.com/afolasope/easy-bank',
    liveLink: 'https://enchanting-easy-banking.netlify.app/',
  },
];

export default projects;
