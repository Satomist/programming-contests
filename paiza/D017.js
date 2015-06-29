function main(a) {
      var max=a[0];
          var min=a[0];
              for(var i = 1; i<a.length; i++){
                    if(parseInt(a[i]) > max){
                                  max = a[i];
                                      }
                        if(parseInt(a[i]) < min){
                              min = a[i];
                                  }
                            }
              console.log(max);
              console.log(min);
}

var input = ';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data',  function(chunk) {
    input += chunk;
});
process.stdin.on('end',  function() {
    input = input.split('\n');
      main(input);
});
