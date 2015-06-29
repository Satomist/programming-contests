function Main(input) {
	input = input.split("\n")
	const N = parseInt(input[0],10)

	for(var i=0; i<N; i++){
		var C = parseInt(input[i*3+1],10)
		var I = parseInt(input[i*3+2],10)
		var P = input[i*3+3].split(" ").map(function (i) {
	      return parseInt(i)
	    })
		var item1 = 0
		var item2 = 0

		for(item1=0; item1<(I-1);item1++){
			for(item2=item1+1; item2<I;item2++){
				if((P[item1]+P[item2]) === C){
					console.log('Case #%d: %d %d', (i+1), item1+1, item2+1)
					break
				}
			}
		}
	}
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))