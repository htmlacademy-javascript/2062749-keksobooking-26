import { similarAds } from './data.js';

const POPUP_IMG_WIDTH = 45;

const POPUP_IMG_HEIGHT = 40;

const TYPES_TRANSLATION = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const cardTemplate = document.querySelector('#card').content;
const mapCard = cardTemplate.querySelector('.popup');

const renderFeatures = (items, container) => {
  if (items) {
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
      const element = document.createElement('li');
      element.classList.add('popup__feature');
      element.classList.add(`popup__feature--${item}`);
      fragment.appendChild(element);
    });

    container.appendChild(fragment);

  } else {
    container.classList.add('visually-hidden');
  }
};

const renderPhotos = (items, container) => {
  if (items) {
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();

    items.map((item) => {
      const element = document.createElement('img');
      element.classList.add('popup__photo');
      element.src = item;
      element.width = POPUP_IMG_WIDTH;
      element.height = POPUP_IMG_HEIGHT;
      element.alt = 'Фотография жилья';
      fragment.appendChild(element);
    });

    container.appendChild(fragment);

  } else {
    container.classList.add('visually-hidden');
  }
};

const createCard = (data) => {
  const card = mapCard.cloneNode(true);
  card.querySelector('.popup__avatar').src = data.author.avatar;
  card.querySelector('.popup__title').textContent = data.offer.title;
  card.querySelector('.popup__text--address').textContent = data.offer.address;
  card.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = TYPES_TRANSLATION[data.offer.type];
  card.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;

  const featureCard = card.querySelector('.popup__features');
  renderFeatures(data.offer.features, featureCard);

  const descriptionCard = card.querySelector('.popup__description');
  descriptionCard.textContent = data.offer.description;

  if (data.offer.description.length === 0) {
    descriptionCard.classList.add('visually-hidden');
  }

  const photoCard = card.querySelector('.popup__photos');
  renderPhotos(data.offer.photos, photoCard);

  return card;
};

const map = document.querySelector('#map-canvas');
map.appendChild(createCard(similarAds[0]));

export {
  createCard
};
