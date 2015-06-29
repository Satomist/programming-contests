function Main(input) {
	input = input.split("\n");
	const N = input[0]
	const Tests = input.slice(1).map(function(test) {
	    return test.split(' ')
	});

	for(var i=0; i<N; i++){
		Tests[i] = Tests[i].reverse().join(' ');
		console.log("Case #%d: ", (i+1), Tests[i])
	}

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));