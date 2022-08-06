const cardData = [
  {
    id: 'nauvw',
    img: 'nausicaa',
    name: 'Nausicaä of the Valley of the Wind',
  },
  {
    id: 'lcits',
    img: 'laputa',
    name: 'Laputa: Castle in the Sky',
  },
  {
    id: 'mnttr',
    img: 'totoro',
    name: 'My Neighbor Totoro',
  },
  {
    id: 'kkids',
    img: 'kiki',
    name: "Kiki's Delivery Service",
  },
  {
    id: 'pcoro',
    img: 'porco',
    name: 'Porco Rosso',
  },
  {
    id: 'whoth',
    img: 'whisper',
    name: 'Whisper of the Heart',
  },
  {
    id: 'pmnok',
    img: 'mononoke',
    name: 'Princess Mononoke',
  },
  {
    id: 'stcnk',
    img: 'noface',
    name: 'Spirited Away',
  },
  {
    id: 'hmctl',
    img: 'howls',
    name: "Howl's Moving Castle",
  },
  {
    id: 'potbs',
    img: 'ponyo',
    name: 'Ponyo',
  },
  {
    id: 'twdrs',
    img: 'twr',
    name: 'The Wind Rises',
  },
  {
    id: 'kghnm',
    img: 'kaguya',
    name: 'The Tale of Princess Kaguya',
  },
];

const shuffle = (input) => {
  const output = [...input];
  for (let i = output.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }
  return output;
};

export { cardData, shuffle };
