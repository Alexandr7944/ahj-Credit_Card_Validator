import Cards from "./Cards";
import Form from "./Form";
import Hint from "./Hint";

const container = document.querySelector(".container");
const form = new Form(container);
const formEl = form.addForm();

const cards = new Cards(container);

formEl.input.addEventListener("input", () => {
  const inputValue = formEl.input.value;
  if (inputValue.length > 2) return;
  cards.showCard(inputValue);
});

formEl.addEventListener("submit", (e) => {
  form.onSubmit(e)
    ? new Hint(container).addHint("С номером все впорядке")
    : new Hint(container).addHint("Есть ошибка в номере карты");

  formEl.reset();
});
