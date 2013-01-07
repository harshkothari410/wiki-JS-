function langwiki(){

	var name = $('#query').val();
	url1 = 'http://en.wikipedia.org/w/api.php?action=query&prop=langlinks&format=json&lllimit=50&titles='+name;
	ec = $.ajax({
	//type : "GET",
	url:url1,
	dataType: "jsonp",
	cache: false,
	async:false,
	success:function(data){
		var result = JSON.stringify(data);
		alert("Under Construction");
		
	},
	error:function(error){
		alert(error);
	
	}

});
}