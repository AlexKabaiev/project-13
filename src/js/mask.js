document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.querySelector('.tel-mask-table') // ищем наш единственный input
  const maskOptions = { // создаем объект параметров
      mask: '+{38} (000) 000-00-00', // задаем единственный параметр mask
      lazy: false,
  }
  IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами

})

document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.querySelector('.tel-mask-room') // ищем наш единственный input
  const maskOptions = { // создаем объект параметров
      mask: '+{38} (000) 000-00-00', // задаем единственный параметр mask
      lazy: false,
  }
  IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами

})