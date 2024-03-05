var AgeUnit;
(function (AgeUnit) {
    AgeUnit["months"] = "months";
    AgeUnit["years"] = "years";
})(AgeUnit || (AgeUnit = {}));
function convertAgeToMonths(person) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.months;
    return person;
}
var techPerson = {
    name: "Bob",
    age: 27,
    ageUnit: AgeUnit.years,
    country: "india",
    greet: function (greeting) { return "".concat(greeting, " ").concat(techPerson.name); }
};
var result = techPerson.greet("welcome aboard Mr.");
console.log(result);
