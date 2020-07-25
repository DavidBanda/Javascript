console.log('start');

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Now we have the data: ${email}, ${password}`);
            resolve({ userEmail: email, userPassword: password });
        }, 2000);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Videos from user: ${email}`);
            resolve([
                'Shawshank Redemption',
                'GoodFellas',
                'Saving Private Ryan',
            ]);
        }, 2000);
    });
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Title: ${video}`);
        }, 2000);
    });
}

// Get data through promises
// loginUser('David Banda', 'aaron123')
//     .then(user => getUserVideos(user.userEmail))
//     .then(videos => videoDetails(videos[1]))
//     .then(title => console.log(title));

async function displayUser() {
    try {
        const user = await loginUser('David Banda', 'aaron123');
        const videos = await getUserVideos(user.userEmail);
        const detail = await videoDetails(videos[1]);
        console.log(detail);
    } catch (err) {
        console.log('We could not get the details of the video');
    }
}

displayUser();

console.log('end');
