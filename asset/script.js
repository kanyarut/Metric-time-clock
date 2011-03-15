// when html loaded
$(document).ready(function() {	
	calTime();
	setInterval( "calTime()", 864 );
});
 
// when all page elements loaded
$(window).load(function() {
 
});
function calTime(){
	var date = new Date();
	var centi = (date.getSeconds()/864)+(date.getMinutes()/14.4)+(date.getHours()/0.24);
	
	//hours
	var deci = Math.floor(centi / 10);
	
	//minute
	var milli = Math.floor((centi % 10)*10);
	
	//second
	var micro = Math.floor((((centi % 10)*10)%10)*100);
	
	if(deci < 10)deci = '0'+deci;
	if(milli < 10)milli = '0'+milli;
	if(micro < 10)micro = '0'+micro;
	
	var deci_degree = (3.6*(centi % 10));
	var milli_degree = 3.6*milli;
	var micro_degree = .36*micro;
	
	$("#hour").css("-moz-transform","rotate("+deci_degree+"deg)").css("-webkit-transform","rotate("+deci_degree+"deg)");
	$("#min").css("-moz-transform","rotate("+milli_degree+"deg)").css("-webkit-transform","rotate("+milli_degree+"deg)");
	$("#sec").css("-moz-transform","rotate("+micro_degree+"deg)").css("-webkit-transform","rotate("+micro_degree+"deg)");
	
	$('title').text(deci+':'+milli+':'+micro + ' - Metric time');
	
	$('#digital span').html(deci+':'+milli+':'+micro);
}