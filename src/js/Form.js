class Form {
  constructor(element) {
    this.element = element;
  }

  addForm() {
    const form = document.createElement("form");
    form.innerHTML = Form.elementHTML;
    this.element.append(form);
    return form;
  }

  static get elementHTML() {
    return `
    <input type="text" name="input" class="input">
    <input type="submit" name="submit" class="submit" value="Click to Validate">
    `;
  }

  onSubmit(event) {
    event.preventDefault();
    const inputValue = document.forms[0].elements.input.value.trim();
    if (!inputValue) return inputValue;

    const calc = (num) => (num * 2 < 10 ? num * 2 : num * 2 - 9);
    const isValid = (card) => {
      return (
        card
          .split("")
          .map((elem, index) => (index % 2 == 0 ? calc(elem) : parseInt(elem)))
          // eslint-disable-next-line prettier/prettier
          .reduce((prv, cur) => prv + cur) % 10 == 0
      );
    };

    return isValid(inputValue);
  }
}

export default Form;
