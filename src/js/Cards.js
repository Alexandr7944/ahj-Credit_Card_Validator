import cardsList from "./cardsList";

class Cards {
  showCard(inputValue) {
    this.removeFiler();
    for (let key in cardsList) {
      const reg = new RegExp(`^${key}`);
      if (!reg.test(inputValue)) continue;

      this.addFilter(cardsList[key]);
    }
  }

  addFilter(name) {
    const items = document.querySelectorAll(".card__item");
    items.forEach((item) => {
      if (item.classList.contains(name)) return;
      item.classList.add("filter");
    });
  }

  removeFiler() {
    const items = document.querySelectorAll(".card__item");
    items.forEach((item) => item.classList.remove("filter"));
  }
}

export default Cards;
