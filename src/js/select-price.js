//--------------------------select-price------------------------------


const defaultSelectprice = () => {
    const element = document.querySelector('.select-amount-night');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });
};
defaultSelectprice();