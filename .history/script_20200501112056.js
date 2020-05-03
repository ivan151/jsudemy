function filter_list(l) {
    for (i = 1; i < 5; i++) {
        if (typeof(l[i]) == string) {
            console.log(l[i]);
        }

    }
  }

 let  l = [1,2,'aasf','1','123',123];
 let al = [];
for (let i in l) {
    if (typeof(l[i]) != 'string') {
        al.push(l[i]);
    }
}
console.log(al);
console.log(l);

function list_filter(l) {
    return l.filter(function(v) {return typeof v == 'number'})
}

console.log(list_filter(l));

// return masked string
function maskify(cc) {

}

let str = 'fuwgfuwgefgwgefyuwgeyfghuy!';




let strTwo = '';

for (let i in str) {
    if (i < str.length - 4) {
        strTwo += str[i];
    }
}

console.log(strTwo);
