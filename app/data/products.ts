import {IFooterLinks, IProduct, IWork} from "@/app/types/product";

export const products: IProduct[] = [
  {
    id: 1,
    image: '/images/image-1.png',
    name: 'Столешницы',
    description: 'Незаменимый атрибут на вашей кухне. Столешница будет выполнена в уникальном дизайне. Совместит в себе качество, прочность и экологичность.'
  },
  {
    id: 2,
    image: '/images/image-2.png',
    name: 'Барные стойки',
    description: 'Поверхность камня непроницаема для бактерий и химикатов, а бесшовные гладкие соединения существенно упростят процесс уборки.'
  },
  {
    id: 3,
    image: '/images/image-3.png',
    name: 'Подоконники',
    description: 'Подоконники из искусственного камня придадут солидный стиль вашему интерьеру, создадут атмосферу комфорта и уюта. '
  },
  {
    id: 4,
    image: '/images/image-4.png',
    name: 'Лестницы',
    description: 'Лестницы из натурального камня широко востребованы. Натуральный камень отличается прочностью и устойчивостью \n' +
        'к истиранию.'
  },
  {
    id: 5,
    image: '/images/image-5.png',
    name: 'Ступени',
    description: 'Ступени из камня прекрасное решение для лестниц внутри и снаружи здания. Цветовая палитра, уникальный рисунок \n' +
        'и прочность. '
  },
  {
    id: 6,
    image: '/images/image-6.png',
    name: 'Санузлы',
    description: 'Отделка ванной камнем придает комнате солидный вид. Свойства каменной плитки предохраняют помещение от образования грибка, плесени.'
  },
];

export const links: IFooterLinks[] = [
  {
    id: 1,
    name: 'Главная',
    url: '/'
  },
  {
    id: 2,
    name: 'О нас',
    url: '/about'
  },
  {
    id: 3,
    name: 'Доставка и оплата',
    url: '/pay'
  },
];

export const works: IWork[] = [
  {
    id: 1,
    image: '/images/work-1.png',
    description: 'Ступени из натурального гранита'
  },
  {
    id: 2,
    image: '/images/work-2.png',
    description: 'Барная стойка из искусственного камня'
  },
  {
    id: 3,
    image: '/images/work-3.png',
    description: 'Столешница'
  },
  {
    id: 4,
    image: '/images/work-4.png',
    description: 'Лестница из натурального гранита'
  },
  {
    id: 5,
    image: '/images/work-5.png',
    description: 'Подоконник из натурального камня'
  },
  {
    id: 6,
    image: '/images/work-6.png',
    description: 'Санузел'
  },
  {
    id: 7,
    image: '/images/work-7.png',
    description: 'Столешница в ванную комнату из искусственного камня'
  },
  {
    id: 8,
    image: '/images/work-8.png',
    description: 'Столешница из гранита'
  },
  {
    id: 9,
    image: '/images/work-9.png',
    description: 'Лестница из натурального камня'
  },
];