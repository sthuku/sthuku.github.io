$(function(){
	//pagination
	paging("jyo-exp", "hdn-exp");
	paging("jyo-proj", "hdn-proj");
	
	function paging(className, hiddenValue){
		var pages = 0;
		$("." + className).each(function(){
			if($(".jyo-exp").index($(this)) != 0){
				$(this).hide();
			}//if
			pages++;
		});//each
		
		$(".jyo-rgt-btn").click(function(){
			var current = parseInt($("#" + hiddenValue).val());
			if(current != pages - 1){
				$("." + className).each(function(){
					if($("." + className).index($(this)) == current+1) $(this).show();
					else $(this).hide();
				});//each
				$("#" + hiddenValue).val(current + 1);
			}

		});//click
		
		$(".jyo-lft-btn").click(function(){
			var current = parseInt($("#" + hiddenValue).val());
			if(current > 0){
				$("." + className).each(function(){
					if($("." + className).index($(this)) == current -1)$(this).show();
					else $(this).hide();
				});//each
				$("#" + hiddenValue).val(current - 1);
			}
		});//click
	}
	
	//
	$(".jyo-blacken").css("color", "#cc9900");
	//nav
	$( ".jyo-nav" ).fadeOut(0.000000001);
	
	$(".jyo-nav-button").click(function(){
		$(".jyo-nav").fadeIn(2000);
		$(".jyo-blacken").css("color", "#664d00");
		$(".jyo-main-hdng").css("color", "#664d00");
		$(".jyo-sub-hdng").css("color", "#664d00");
	});//click
	
	$(".jyo-white").click(function(){
		$(".jyo-blacken").fadeOut(0.000000001);
		$(".jyo-blacken").css("color", "#cc9900");
		$(".jyo-main-hdng").css("color", "#fff");
		$(".jyo-sub-hdng").css("color", "#02b3ff");
		$(".jyo-blacken").fadeIn(2000);
		$( ".jyo-nav" ).fadeOut(0.000000001);
	});//click
		//show hide
			var content = {"experienceLink" : "experience", "skillsLink" : "skills", "projectsLink" : "projects", "aboutLink" : "about"};

			showHide(content, "experienceLink");
			$.each(content, function(key, value){
				$("#"+key).click(function(){
					showHide(content, key);
					if(key == "skillsLink"){
						$(".pagin").hide();
					} 
					else{
						$(".pagin").show();
					} 
				});//click
			});

			var skills = {"frontEndLink" : "frontEnd", "backEndLink" : "backEnd", "toolsLink" : "tools", "otherLink" : "others"};

			showHide(skills, "frontEndLink");
			$.each(skills, function(key, value){
				$("#"+key).click(function(){
					showHide(skills, key);
				});//click
			});
			
			$("#projectsLink").click(function(){
				$("#jyo-proj-1").show();
			});
	$(".jyo-nav-button").click(function(){
		$("#skills").hide();
	});//click
	
	$(".jyo-nav-button").click(function(){
		$("#about").hide();
	});//click
			
		});

		function showHide(list, item){
			$.each(list, function(key, value){
				if(key == item) $("#"+value).show();
				else $("#"+value).hide();
			});//each function
		}//showHide
