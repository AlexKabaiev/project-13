const defaultSelectpersons = () => {
    const element = document.querySelector('.select-persons');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });
};

defaultSelectpersons();

const defaultSelectdate = () => {
    const element = document.querySelector('.select-date');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });
};

defaultSelectdate();