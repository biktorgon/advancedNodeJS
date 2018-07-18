//simple function
function hideString(str) {
    return str.replace(/[a-zA-Z]/g, 'X');
}

//modify high function
function mHideString(str, done) {
    done(str.replace(/[a-zA-Z]/g, 'X'));
}

//next loop
function nHideString(str, done) {
    process.nextTick(() => {
        done(str.replace(/[a-zA-Z]/g, 'X'));
    });
}

//async function
function delay(seconds, callback) {
    setTimeout(callback, seconds * 1000);
}


const simpleHidden = hideString('Hello worls');
console.log(`simple function ${simpleHidden}`);

mHideString('Hello world', (hidden) => {
    console.log(`modify start function ${hidden}`);
});
console.log('modify end function');

nHideString('Hello world', (hidden) => {
    console.log(`next loop start function ${hidden}`);
});
console.log('next loop end function');

//callback hell
console.log('starting delays');
delay(2, () => {
    console.log('two seconds');
    delay(1, () => {
        console.log('three seconds');
        delay(1, () => {
           console.log('four seconds');
        });
    });
});