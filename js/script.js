$(document).ready(function(){
	$('.slider_of_tours').slick({
		infinite: true,
		slideToShow: 2,
		slideToScroll: 2
	});
});
let n;
prompt(n);
let random_sequence[];
for(let i = 0; i < n; i++){
	random_sequence[i] = Math.random() * (99 - 10) + 10; 
}
for(let i = 0; i < n; i++){
	alert(random_sequence[i]);
}

