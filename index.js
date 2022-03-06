function saturdayFun(defualt = 'roller-skate') {
return (`This Saturday, I want to ${defualt}!`)
};
function mondayWork(defualt = 'go to the office'){
    return (`This Monday, I will ${defualt}.`)
};
function wrapAdjective(flair = "*"){
    return function (defualt = 'special') {
        return (`You are ${flair}${defualt}${flair}!`)
    }
}