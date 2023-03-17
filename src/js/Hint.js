class Hint {
  constructor(element) {
    this.element = element;
  }

  addHint(text) {
    this.hint = document.createElement("div");
    this.hint.className = "hint";
    this.hint.textContent = text;
    this.element.append(this.hint);
    document.addEventListener("click", this.removeHint, { once: true });
    this.hint.left = this.element.offsetWidth / 2 - this.hint.offsetWidth / 2;
    return this.hint;
  }

  removeHint() {
    const hint = document.querySelector(".hint");
    if (!hint) return;
    hint.style.opacity = 0;
    setTimeout(() => hint.remove(), 300);
  }
}

export default Hint;
