export class Testimonial {
  #author;
  #occupation;
  #content;
  #review;

  constructor(author, occupation, content, review) {
    this.#author = author;
    this.#occupation = occupation;
    this.#content = content;
    this.#review = review;
  }

  // Valida si un Testimonio se formó correctamente
  isValid() {
    return (
      this.#author && this.#content && this.#review >= 1 && this.#review <= 5
    );
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    this.#author = value;
  }

  get occupation() {
    return this.#occupation;
  }

  set occupation(value) {
    this.#occupation = value;
  }

  get content() {
    return this.#content;
  }

  set content(value) {
    this.#content = value;
  }

  get review() {
    return this.#review;
  }

  set review(value) {
    this.#review = value;
  }
}
