console.log('start')

function getUserName(name, last_name, lang) {
    setTimeout(() => {
        const langs = getUserLangProg
        return name + '' + last_name + 'Prog: ' + langs
    }, 2000);
}

function getUserLangProg(lang) {
    setTimeout(() => {
        return lang
    }, 1000);
}

const user = getUserName('David', 'Banda', ['Python', 'Javascript'])
console.log(user)

console.log('end')