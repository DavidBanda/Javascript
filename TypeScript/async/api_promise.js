console.log('start')

const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log('Getting stuff from youtube');
        resolve({ videos: [1, 2, 3, 4] });
    }, 2000);
});

const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log('Getting stuff from facebook');
        resolve({ name: 'David Banda' });
    }, 1000);
});

Promise.all([yt, fb]).then(result => console.log(result));

console.log('end')