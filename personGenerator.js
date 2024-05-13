const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
        
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ангелина",
            "id_2": "Анна",
            "id_3": "Любовь",
            "id_4": "Евгения",
            "id_5": "Екатерина",
            "id_6": "Ксения",
            "id_7": "Инна",
            "id_8": "Майя",
            "id_9": "Кристина",
            "id_10": "Карина"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Дмитриевна",
            "id_2": "Евгеньевна",
            "id_3": "Антоновна",
            "id_4": "Даниловна",
            "id_5": "Михайловна",
            "id_6": "Яновна",
            "id_7": "Султановна",
            "id_8": "Сергеевна",
            "id_9": "Григорьевна",
            "id_10": "Валерьевна"
        }
    }`,
    patronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Дмитриевич",
            "id_2": "Евгеньевич",
            "id_3": "Антонович",
            "id_4": "Даниловна",
            "id_5": "Михайлович",
            "id_6": "Янович",
            "id_7": "Султанович",
            "id_8": "Сергеевич",
            "id_9": "Григорьевич",
            "id_10": "Валерьевич"
        }
    }`,
    profMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Механик",
            "id_2": "Повар",
            "id_3": "Кладовщик",
            "id_4": "Программист",
            "id_5": "Управляющий",
            "id_6": "Шахтист",
            "id_7": "Слесарь",
            "id_8": "Электрик",
            "id_9": "Ученый",
            "id_10": "Куратор"
        }
    }`,
    profFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Парикмахер",
            "id_2": "Бухгалетр",
            "id_3": "CMM-спциалист",
            "id_4": "Учитель",
            "id_5": "Швея",
            "id_6": "Продавщица",
            "id_7": "Певица",
            "id_8": "Актриса",
            "id_9": "Секретарь",
            "id_10": "Методист"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() { // имя
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },


    randomSurname: function() {  // фамилия
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },
    randomPatronymic: function() { // отчество
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.patronymicMaleJson);
        } else {
            return this.randomValue(this.patronymicFemaleJson);
        }
    },
    randomProf: function() { // профессия
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.profMaleJson);
        } else {
            return this.randomValue(this.profFemaleJson);
        }
    },
    randomYear: function() { // год
        return this.randomIntNumber(1940, 1999) + " г.р.";
    },


    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.prof = this.randomProf();
        
        this.person.year = this.randomYear();
        return this.person;
    }
};