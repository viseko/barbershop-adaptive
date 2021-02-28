const SLIDER_CLASS = '.slider';
const SLIDE_CLASS = '.slider__item';
const SLIDER_BTN_CLASS = '.slider__toggle';
const MODIFICATOR = '--active';
const SLIDE_ACTIVE = SLIDE_CLASS + MODIFICATOR;
const CONTROL_ACTIVE = SLIDER_BTN_CLASS + MODIFICATOR;

const sliders = document.querySelectorAll(SLIDER_CLASS);
for (let i = 0; i < sliders.length; i++) {
    const slider = sliders[i];

    const slides = slider.querySelectorAll(SLIDE_CLASS);
    const controls = slider.querySelectorAll(SLIDER_BTN_CLASS);

    for (let j = 0; j < controls.length; j++) {
        const control = controls[j];

        control.addEventListener("click", function() {
            slider.querySelector(SLIDE_ACTIVE)
                .classList.remove(SLIDE_ACTIVE.slice(1));

            slides[j].classList.add(SLIDE_ACTIVE.slice(1));

            slider.querySelector(CONTROL_ACTIVE)
                .classList.remove(CONTROL_ACTIVE.slice(1));
            
            this.classList.add(CONTROL_ACTIVE.slice(1));
        });
    }
}