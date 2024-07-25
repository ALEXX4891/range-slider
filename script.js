const rangeSlider = document.querySelector(".range-slider");
// текстовые инпуты:
const priceInputs = document.querySelectorAll(".price-inputs-wrap input");
textInputMin = document.querySelector(".min-input");
textInputMax = document.querySelector(".max-input");

// рендж инпуты:
const rangeInputs = document.querySelectorAll(".range-inputs-wrap input");
rangeInputMin = document.querySelector(".min-range");
rangeInputMax = document.querySelector(".max-range");

// основные параметры:
const priceGap = 1;
const minRange = 26;
const maxRange = 81;

// присваиваем значения инпутам:
textInputMin.value = minRange;
textInputMax.value = maxRange;
rangeInputMin.value = minRange;
rangeInputMax.value = maxRange;

textInputMin.min = minRange;
textInputMin.min = minRange;
rangeInputMin.min = minRange;
rangeInputMax.min = minRange;

textInputMin.max = maxRange;
textInputMax.max = maxRange;
rangeInputMin.max = maxRange;
rangeInputMax.max = maxRange;

textInputMin.step = priceGap;
textInputMax.step = priceGap;
rangeInputMin.step = priceGap;
rangeInputMax.step = priceGap;

// обработка событий текстовых инпутов:
priceInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    //получаем значения из текстовых инпутов:
    let minVal = parseInt(textInputMin.value);
    let maxVal = parseInt(textInputMax.value);
    let diff = maxVal - minVal;

    // ограничиваем значение min инпута:
    if (minVal < minRange) {
      textInputMin.value = minRange;
      minVal = minRange;
      // console.log(minVal);
    }

    // ограничиваем значение max инпута:
    if (maxVal > maxRange) {
      textInputMax.value = maxRange;
      maxVal = maxRange;
      // console.log(maxVal);
    }

    // ограничиваем максимальное значение min инпута:
    if (e.target === textInputMin) {
      if (minVal > maxVal - priceGap) {
        textInputMin.value = maxVal - priceGap;
        minVal = maxVal - priceGap;
        // console.log(minVal);
      }
    }

    // ограничиваем минимальное значение max инпута:
    if (e.target === textInputMax) {
      if (maxVal < minVal + priceGap) {
        textInputMax.value = minVal + priceGap;
        maxVal = minVal + priceGap;
        // console.log(maxVal);
      }
    }

    // вычисляем положение рендж инпутов:
    if (diff >= priceGap) {
      rangeInputMax.value = maxVal;
      rangeInputMin.value = minVal;
      rangeSlider.style.right = `${
        100 - ((maxVal - minRange) * 100) / (maxRange - minRange)
      }%`;
      rangeSlider.style.left = `${
        ((minVal - minRange) * 100) / (maxRange - minRange)
      }%`;
      // console.log("gogogogo");
    }
  });
});

rangeInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    //получаем значения из текстовых инпутов:
    let minVal = parseInt(rangeInputMin.value);
    let maxVal = parseInt(rangeInputMax.value);
    let diff = maxVal - minVal;

    // ограничиваем значение min инпута:
    if (minVal < minRange) {
      rangeInputMin.value = minRange;
      minVal = minRange;
      console.log(minVal);
    }

    // ограничиваем значение max инпута:
    if (maxVal > maxRange) {
      rangeInputMax.value = maxRange;
      maxVal = maxRange;
      console.log(maxVal);
    }

    // ограничиваем максимальное значение min инпута:
    if (e.target === rangeInputMin) {
      if (minVal > maxVal - priceGap) {
        rangeInputMin.value = maxVal - priceGap;
        minVal = maxVal - priceGap;
        console.log(minVal);
      }
    }

    // ограничиваем минимальное значение max инпута:
    if (e.target === rangeInputMax) {
      if (maxVal < minVal + priceGap) {
        rangeInputMax.value = minVal + priceGap;
        maxVal = minVal + priceGap;
        console.log(maxVal);
      }
    }

    // вычисляем положение рендж инпутов:
    if (diff >= priceGap) {
      textInputMin.value = minVal;
      textInputMax.value = maxVal;
      rangeSlider.style.right = `${
        100 - ((maxVal - minRange) * 100) / (maxRange - minRange)
      }%`;
      rangeSlider.style.left = `${
        ((minVal - minRange) * 100) / (maxRange - minRange)
      }%`;
      console.log("gogogogo");
    }
  });
});
