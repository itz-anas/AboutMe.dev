export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    repoLink: string;
    liveLink?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 'project1',
      title: 'Acumen University',
      description: 'A Fictional University',
      image: '/project1.png',
      tags: ['HTML', 'CSS'],
      repoLink: 'https://1m-anas.github.io/Acumen-University/',
      
    },
    {
      id: 'project2',
      title: 'Band-Kit',
      description: 'A fully responsive mini band kit.',
      image: '/project2.jpg',
      tags: ['HTML', 'CSS', 'Javascript'],
      repoLink: 'https://1m-anas.github.io/Band-Kit/',
      liveLink: 'https://1m-anas.github.io/Band-Kit/',
    }
  ];