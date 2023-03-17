/**
 * @jest-environment jsdom
 */

import Form from "../Form";

test("method Form.addForm()", () => {
  document.body.innerHTML = `<div class="container"></div>`;
  const container = document.querySelector(".container");
  const form = new Form(container);
  const formEl = form.addForm();
  expect(formEl.innerHTML).toEqual(Form.elementHTML);
});

test("method Form.onSubmit() positive", () => {
  document.body.innerHTML = `<div class="container"></div>`;
  const container = document.querySelector(".container");
  const form = new Form(container);
  const formEl = form.addForm();

  formEl.addEventListener("submit", (e) => {
    expect(form.onSubmit(e)).toEqual(true);
  });

  formEl.elements.input.value = "4539148803436467";

  formEl.submit();
});

test("method Form.onSubmit() negative", () => {
  document.body.innerHTML = `<div class="container"></div>`;
  const container = document.querySelector(".container");
  const form = new Form(container);
  const formEl = form.addForm();

  formEl.addEventListener("submit", (e) => {
    expect(form.onSubmit(e)).toEqual(false);
  });

  formEl.elements.input.value = "8273123273520569";

  formEl.submit();
});
