function Main(input) {

	input = input.split("\n");
	const X = input[0];
	const T = input.slice(1);

	for(var i=0; i<30; i++){
		var dictionary = {}
	  	var tmp = []
	  	var tmp_in_base_10 = []
	  	var counter = parseInt(-1, 10);
	  	var ans = 0;
	  	var base = 0;

		tmp = T[i].split('')
		
		dictionary[tmp[0]] = 1;
		tmp[0] = 1;

		for(var j=1; j < T[i].length; j++){
			if(dictionary[tmp[j]]==undefined){
				if(counter === 0){
					counter++
				}
				counter++
				dictionary[tmp[j]] = counter
				tmp[j] = counter
			}else{
				tmp[j] = dictionary[tmp[j]]
			}
		}

		if(counter < 1){
			base = 2
		}else{
			base = counter + 1
		}

		tmp_in_base_10 = tmp
		console.log(tmp)
		for(var j=(T[i].length-1); j >= 0; j--){
			for(var m=0; m<=(j-1); m++){
				tmp_in_base_10[m] = tmp_in_base_10[m] * base
			}
			ans += tmp_in_base_10[j]
			
		}
		console.log(tmp_in_base_10)
		console.log('Case #%d: %d base: %d', (i+1), ans, base)
		
//		console.log('Case #%d: %d ', (i+1), ans);
	}

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));