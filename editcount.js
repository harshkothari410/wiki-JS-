function editcount(){
	var lang = $('#lang1').val();
	//alert(lang);
	var username = $('#username').val();
	//alert(username);
	url1 = "http://"+lang+".wikipedia.org/w/api.php?action=query&list=users&format=json&usprop=editcount&ususers="+username;
//alert(url1);
ec = $.ajax({
	//type : "GET",
	url:url1,
	dataType: "jsonp",
	cache: false,
	async:false,
	success:function(data){
		var result = JSON.stringify(data);
		//alert(result);
		if(data.query.users[0].editcount==undefined){
			alert("Your account is not in "+lang+":wiki");
		}
		else
		alert("Your Contributions:"+data.query.users[0].editcount);
		//alert( + "Hello Harsh4101991");
	},
	error:function(error){
		alert(error);
	
	}

});
};


//});