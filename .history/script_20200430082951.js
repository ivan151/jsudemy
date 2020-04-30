function learn(lang, callback) {
    console.log('I learn something ' + lang);
    callback();
}

function done() {
    console.log('OMG!');
}
learn('Javascript', function() {
    console.log('Done.');
});

