import View from "./View";
import icons from "url:../../img/icons.svg";
import { mark } from "regenerator-runtime";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generatemarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    const prevButton = `
    <button data-goto="${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>;
     `;
    const nextButton = `
    <button data-goto ="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    `;

    // Page 1, and has other pages
    if (curPage === 1 && numPages > 1) {
      return nextButton;
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return prevButton;
    }
    // Has previous and next pages
    if (curPage < numPages) {
      return [prevButton, nextButton];
    }
    // Page 1, and hasn't other pages
    return "";
  }
}

export default new PaginationView();
