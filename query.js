$(document).ready(function(){
	var width1 = screen.width;
	var height1 = screen.height;

	$('#jage').text("My name is Harsh");
	//var name =  document.getElementById("query").value;
	//document.getElementById("query").focus();
	$('#query').keyup(function(event) {
		var val = document.getElementById('query').value;
		//url: "http://"+lang+"."+site+".org/w/api.php?action=opensearch&search="+svalue+"&namespace=0&limit=7&suggest=",
		var msg ="Click here for "+val + " in more languages"  ;
		//$('#jname').text(msg);
		$('#name').text(msg);
		$('#harsh').html("<iframe src='http://en.wikipedia.org/wiki/"+val+"' height=600 width='100%' ></iframe>");
		
	});
});