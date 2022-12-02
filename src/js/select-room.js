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