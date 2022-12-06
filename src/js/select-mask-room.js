//--------------------------slect-room--------------------------------


const defaultSelectpersonsroom = () => {
    const element = document.querySelector('.select-persons-room');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });
};
defaultSelectpersonsroom();

const defaultSelectdateroom = () => {
    const element = document.querySelector('.select-date-room');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });
};
defaultSelectdateroom();

const defaultSelectdateroomfirst = () => {
    const element = document.querySelector('.select-date-room-first');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });
};
defaultSelectdateroomfirst();

//-------------------------mask-------------------------------

document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.querySelector('.tel-mask-room') // ищем наш единственный input
  const maskOptions = { // создаем объект параметров
      mask: '+{38} (000) 000-00-00', // задаем единственный параметр mask
      lazy: false,
  }
  IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами

})
