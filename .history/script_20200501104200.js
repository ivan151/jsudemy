function filter_list(l) {
    for (i = 1; i < 5; i++) {
        if (typeof(l[i]) == string) {
            console.log(l[i]);
        }

    }
  }

 let  l = [1,2,'aasf','1','123',123];

for (let i in l) {
    console.log(l[i]);
}