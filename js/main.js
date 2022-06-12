const SIMILAR_AD_COUNT = 10;

const TITLES = [
  'Невероятно горячее предложение',
  'Бесплатная отмена бронирования',
  'Страховой залог и предоплата не требуется',
  'Лучшее предложение этого месяца',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_PERIODS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Кондиционер и сейф для личных вещей',
  'Розетки около кровати',
  'Звукоизоляция во всем помещении',
  'C видом на живописный парк',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


const getRandomInt = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.abs(Math.round(rand));
};


const getRandomFloat = (min, max, fix) => {
  const randomNum = (Math.random() * (max - min) + min).toFixed(fix);
  return Math.abs(randomNum);
};


const getRandomElement = (element) => {
  const randomElement = Math.floor(Math.random() * element.length);
  return element[randomElement];
};


let number = 0;
const getUniqueAvatarNumber = () => {
  for (let i = 1; i <= SIMILAR_AD_COUNT; i++) {
    number += 1;
    if (number < 10) {
      return`img/avatars/user0${number}.png`;
    }
    return`img/avatars/user${number}.png`;
  }
};


const getRandomArray = (array) => {
  const randomArray = new Array (getRandomInt(1, array.length)).fill(' ').map(() => (getRandomElement(array)));
  const uniqueElementsArray = [...new Set(randomArray)];
  return uniqueElementsArray;
};



const createAd = () => {
  const x = getRandomFloat(35.65000, 35.70000, 5);
  const y = getRandomFloat(139.7000, 139.80000, 5);

  return {
    author: {
      avatar: getUniqueAvatarNumber(),
    },
    offer: {
      title: getRandomElement(TITLES),
      address: `${x}, ${y}`,
      price: getRandomInt(1000,100000),
      type: getRandomElement(TYPES),
      rooms:getRandomInt(1,10),
      guests: getRandomInt(1,20),
      checkin: getRandomElement(CHECK_PERIODS),
      checkout: getRandomElement(CHECK_PERIODS),
      features: getRandomArray(FEATURES),
      description: getRandomElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat: x,
      lng: y,
    },
  };
};


const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());
similarAds;
