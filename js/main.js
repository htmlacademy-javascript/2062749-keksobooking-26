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

const createObj = (id) => {
  const lat = getRandomPositiveFloat(35.65000, 35.70000);
  const lng = getRandomPositiveFloat(139.70000, 139.80000);

  return {
    author: {
      avatar: `img/avatars/user${String(id).padStart(2, '0')}.png`
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

const createAds = (SIMILAR_OBJECT_COUNT) => {
    Array.from(
      { length: SIMILAR_OBJECT_COUNT },
        (_, index) => createObj(index));
};

createAds();
