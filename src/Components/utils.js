const cardData = [
  {
    id: 'nauvw0',
    img: 'nausicaa',
    name: 'Nausicaä of the Valley of the Wind',
  },
  {
    id: 'lcits0',
    img: 'laputa',
    name: 'Laputa: Castle in the Sky',
  },
  {
    id: 'mnttr0',
    img: 'totoro',
    name: 'My Neighbor Totoro',
  },
  {
    id: 'kkids0',
    img: 'kiki',
    name: "Kiki's Delivery Service",
  },
  {
    id: 'pcoro0',
    img: 'porco',
    name: 'Porco Rosso',
  },
  {
    id: 'whoth0',
    img: 'whisper',
    name: 'Whisper of the Heart',
  },
  {
    id: 'pmnok0',
    img: 'mononoke',
    name: 'Princess Mononoke',
  },
  {
    id: 'stcnk0',
    img: 'noface',
    name: 'Spirited Away',
  },
  {
    id: 'hmctl0',
    img: 'howls',
    name: "Howl's Moving Castle",
  },
  {
    id: 'potbs0',
    img: 'ponyo',
    name: 'Ponyo',
  },
  {
    id: 'twdrs0',
    img: 'twr',
    name: 'The Wind Rises',
  },
  {
    id: 'kghnm0',
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
