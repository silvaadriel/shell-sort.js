export function Button(buttonSelector) {
  this.btn = document.querySelector(buttonSelector);

  this.onClick = (callback) => {
    this.btn.addEventListener('click', callback);
  };

  this.keyPress = (key) => {
    document.addEventListener ('keydown', (event) => {
      if (key === event.code) {
        event.preventDefault();
        this.btn.click();
      }
    });
  };

  this.disabled = (status) => {
    this.btn.disabled = status;
  };
};

export function SlideControl(sliderSelector) {
  this.getSlider = (sliderSelector) => {
    return document.querySelector(sliderSelector);
  };
  this.slider = this.getSlider(sliderSelector);

  this.getNumberOfSlides = (slider) => {
    return slider.childElementCount;
  };
  this.numberOfSlides = this.getNumberOfSlides(this.slider);

  this.setCurrentSlideToOne = () => {
    this.currentSlide = 1;
  };
  this.setCurrentSlideToOne();

  this.createAnchorElement = () => {
    return document.createElement('a');
  };
  this.anchor = this.createAnchorElement();

  this.nextSlide = () => {
    if (!this.slider.classList.contains('active')) return;
    if (this.currentSlide === this.numberOfSlides) {
      this.setCurrentSlideToOne();
      this.anchor.href = `#${this.currentSlide}`;
      this.anchor.click();
    } else {
      this.currentSlide += 1
      this.anchor.href = `#${this.currentSlide}`;
      this.anchor.click();
    }
  };

  this.setNextSlideKey = (key) => {
    document.addEventListener('keydown', (e) => {
      if (key === e.code) {
        e.preventDefault();
        this.nextSlide();
      }
    });
  };

  this.previousSlide = () => {
    if (!this.slider.classList.contains('active')) return;
    if (this.currentSlide === 1) {
      this.currentSlide = this.numberOfSlides;
      this.anchor.href = `#${this.currentSlide}`;
      this.anchor.click();
    } else {
      this.currentSlide -= 1
      this.anchor.href = `#${this.currentSlide}`;
      this.anchor.click();
    }
  };

  this.setPreviousSlideKey = (key) => {
    document.addEventListener('keydown', (e) => {
      if (key === e.code) {
        e.preventDefault();
        this.previousSlide();
      }
    });
  };
}

export default {
  Button
};