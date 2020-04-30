function learn(lang, callback) {
    console.log('I learn something' + lang);
    callback();
}

learn('Javascript', function() {
    console.log('Done.');
})