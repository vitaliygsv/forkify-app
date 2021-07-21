import View from "./View.js";
import previewView from "./previewView.js";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _message = "";
  _errorMessage = "Sorry, no recipes found for your query. Try another one!";

  _generateMarkup() {
    return this._data
      .map((result) => previewView.render(result, false))
      .join("");
  }
}

export default new ResultsView();
