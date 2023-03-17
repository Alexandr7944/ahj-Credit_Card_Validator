/**
 * @jest-environment jsdom
 */

import Cards from "../Cards";
import cardsList from "../cardsList";

document.body.innerHTML = `
  <div class="container">
    <ul class="card__list">
      <li class="card__item mir">
        <img src="./img/logo-mir.png" alt="mir">
      </li>
      <li class="card__item visa">
        <img src="./img/visa-curved.png" alt="">
      </li>
      <li class="card__item master-card">
        <img src="./img/mastercard-curved.png" alt="">
      </li>
      <li class="card__item jcb">
        <img src="./img/pepsized-jcb.png" alt="">
      </li>
      <li class="card__item discover">
        <img src="./img/discover.png" alt="">
      </li>
      <li class="card__item diners-club">
        <img src="./img/diners-club.png" alt="">
      </li>
      <li class="card__item american-express">
        <img src="./img/american-express-curved-64px.png" alt="">
      </li>
    </ul>
  </div>
`;

test("method Cards.showCard()", () => {
  const num = 30;
  new Cards().showCard(num);
  const items = document.querySelectorAll(".card__item");
  let result;

  items.forEach((item) => {
    if (item.classList.contains(cardsList[num])) {
      result = item.classList.contains("filter");
    }
  });

  expect(result).toEqual(false);
});

test("method Cards.showCard() value = '11'", () => {
  const num = 11;
  new Cards().showCard(num);
  const items = document.querySelectorAll(".card__item");
  let result;

  items.forEach((item) => {
    if (!item.classList.contains("filter")) result = false;
  });

  expect(result).toEqual(false);
});

test("method Cards.showCard() value = ''", () => {
  new Cards().showCard("");
  expect(new Cards().showCard("")).toEqual(undefined);
});
