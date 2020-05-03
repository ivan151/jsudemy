function filter_list(l) {
    for (i = 1; i < length(l); i++) {
        if (typeof(l[i]) == string) {
            console.log(l[i]);
        }

    }
  }

 let  l = [1,2,'aasf','1','123',123];

 console.log(filter_list(l));