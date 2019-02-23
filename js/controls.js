export function Button(buttonSelector) {
  this.btn = document.querySelector(buttonSelector);

  this.onClick = (callback) => {
    this.btn.addEventListener('click', callback);
  };

  this.keyPress = (key) => {
    document.addEventListener ('keydown', (event) => {
      event.preventDefault();
      if (key === event.code) this.btn.click();
    });
  };

  this.disabled = (status) => {
    this.btn.disabled = status;
  };
};

export default {
  Button
};