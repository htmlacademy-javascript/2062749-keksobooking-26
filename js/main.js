const SIMILAR_OBJECT_COUNT = 10;

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKINS_CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const PICTURES = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10'
];

const picturesNotUsed = [];

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomPositiveFloat(a, b, digits = 5) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(digits);
}

const getRandomArrayElement = (elements) =>
  elements [getRandomPositiveInteger(0, elements.length - 1)];

const createObj = () => {
  const lat = getRandomPositiveFloat(35.65000, 35.70000);
  const lng = getRandomPositiveFloat(139.70000, 139.80000);

  return {
    author: {
      avatar: `img/avatars/user${getRandomPicture()}.png`
    },
    offer: {
      title: 'Объявление',
      address: `${lat}, ${lng}`,
      price: getRandomPositiveInteger(0, 10),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(0, 10),
      guests: getRandomPositiveInteger(0, 10),
      checkin: getRandomArrayElement(CHECKINS_CHECKOUTS),
      checkout: getRandomArrayElement(CHECKINS_CHECKOUTS),
      features:
        FEATURES.slice(0, getRandomPositiveInteger(1, FEATURES.length - 1)),
      description: 'Описание помещения',
      photos:
      PHOTOS.slice(0, getRandomPositiveInteger(1, PHOTOS.length - 1)),
    },
    location: {
      lat,
      lng,
    }
  };
};

function getRandomPicture() {
  if (picturesNotUsed.length === 0) {

    for (let i = 0; i < PICTURES.length; ++i) {
      picturesNotUsed.push(PICTURES[i]);
    }
  }

  const index = Math.floor(Math.random() * picturesNotUsed.length);
  const id =  picturesNotUsed[index];

  picturesNotUsed.splice(index, 1);

  return id;
}

const similarObjects = Array.from({length: SIMILAR_OBJECT_COUNT}, createObj);

similarObjects();
