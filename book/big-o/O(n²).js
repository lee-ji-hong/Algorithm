// 이중 for문
function bigoExample(n) {
    for( var i=0; i<n; i++){
        console.log(i);
        for(var j=0; j<n; j++){
            console.log(j);
        }
    }
}
bigoExample(5);