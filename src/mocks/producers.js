const genereateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const producers = {
  title: 'Producers',
  list: [
    {
      name: 'Grenn',
      imagem: 'Grenn',
      distance: `${genereateRandomNumber(1, 500)}m`,
      stars: genereateRandomNumber(1, 5),
    },
    {
      name: 'Salad',
      imagem: 'Salad',
      distance: `${genereateRandomNumber(1, 500)}m`,
      stars: genereateRandomNumber(1, 5),
    },
    {
      name: 'Jenny Jack',
      imagem: 'green',
      distance: `${genereateRandomNumber(1, 500)}m`,
      stars: genereateRandomNumber(1, 5),
    },
    {
      name: 'Grow',
      imagem: 'Grow',
      distance: `${genereateRandomNumber(1, 500)}m`,
      stars: genereateRandomNumber(1, 5),
    },
  ],
};

export default producers;
