//------------------------select-table-----------------------------


const defaultSelectpersonstable = () => {
    const element = document.querySelector('.select-persons-table');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });
};
defaultSelectpersonstable();

const defaultSelectdatetable = () => {
    const element = document.querySelector('.select-date-table');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });
};
defaultSelectdatetable();

//-------------------------mask-------------------------------

document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.querySelector('.tel-mask-table') // ищем наш единственный input
  const maskOptions = { // создаем объект параметров
      mask: '+{38} (000) 000-00-00', // задаем единственный параметр mask
      lazy: false,
  }
  IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами

})
