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