// foo -bar 


for (let i = 1; i <= 50; i++) {
    if (i % 3 == 00 && i % 5 == 00) {
        console.log('foo-bar')
    }
    else if (i % 3 == 00) {
        console.log('foo')
    }
    else if (i % 5 == 00) {
        console.log('bar')
    }
    console.log(i);
}