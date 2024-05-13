
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText=initPerson.patronymic;
    document.getElementById('genderOutput').innerText=initPerson.gender;
    document.getElementById('birthYearOutput').innerText=initPerson.year;
    document.getElementById('ProfOutput').innerText=initPerson.prof;
};
