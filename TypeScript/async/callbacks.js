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

function getUserArea(areas, callback) {
    setTimeout(() => {
        callback(areas)
    }, 1000);
}

//Callback has a nested structure
// Sometimes when we get data from a db or api, there are some
// errors, we need to manage the success and failure
const user = getUserName('David', 'Banda', user => {
    console.log(user)
    getUserLangProg(['Python', 'Javascript'], langs => {
        prog = 'Prog. Lang: ' + langs
        console.log(prog)
        getUserArea(['Front End', 'Back End'], areas => {
            areas = 'Areas: ' + areas
            console.log(areas)
        })
    })
})

console.log('end')