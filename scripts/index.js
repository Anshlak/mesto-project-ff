// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(name, link, description, deleteItem) {
  const copyCardTemplate = cardTemplate.cloneNode(true);
  copyCardTemplate.querySelector('.card__title').textContent = name;
  copyCardTemplate.querySelector('.card__image').src = link;
  copyCardTemplate.querySelector('.card__image').alt = description;
  copyCardTemplate.querySelector('.card__delete-button').addEventListener('click', deleteItem);
return copyCardTemplate;
}

// @todo: Функция удаления карточки
function deleteCard (evt) {
  const removeCard = evt.target.closest('.places__item');
  removeCard.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function(item){
  placesList.append(createCard(item.name, item.link, item.description, deleteCard));
});
