console.log('start')

function getUserName(name, last_name, callback) {
    setTimeout(() => {
        callback(name + ' ' + last_name)
    }, 2000);
}

function getUserLangProg(langs, callback) {
    setTimeout(() => {
        callback(langs)
    }, 1000);
}

const user = getUserName('David', 'Banda', user => {
    console.log(user)
    getUserLangProg(['Python', 'Javascript'], langs => {
        prog = 'Prog. Lang: '
        langs.forEach(lang => {
            prog += lang + ' '
        });
        console.log(prog)
    })
})

console.log('end')