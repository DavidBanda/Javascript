console.log('start')

// Promises are an objects
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve({
                username: 'dbanda'
            });
        } else {
            reject(new Error('User error'))
        }
    }, 2000);
});

promise
    .then(user => {
        console.log(user);
        return user.username;
    })
    .then(username => {
        setTimeout(() => {
            console.log(username)
        }, 1000);
    })
    .catch(err => {
        console.log(err.message)
    })

console.log('end')