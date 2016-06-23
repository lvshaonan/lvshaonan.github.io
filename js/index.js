var fss;
$(function() {
	fss = new ddfullscreenslider({
		sliderid: 'dowebok',
		onslide: function($slide, index) {
			if(index==0){
				$(".about").fadeIn(1500);
			}else if(index==1){
				$(".skill_text").fadeIn("slow");
				$("#list1").animate({width:"85%"},2000);
				$("#list2").animate({width:"65%"},2000);
				$("#list3").animate({width:"65%"},2000);
				$("#list4").animate({width:"40%"},2000);
				$("#list5").animate({width:"45%"},2000);
				$("#list6").animate({width:"30%"},2000);
			}else if(index==2){
				$(".work_list").fadeIn(1500);
			}else if(index==3){
				$(".reason").fadeIn(1500);
				$("#reason_tab_bar1").click(function(){
					$(".reason_tab_list1").show();
					$(".reason_tab_list2").hide();
					$("#reason_tab_bar1").css({"background-color":"#fff","color":"#993366"});
					$("#reason_tab_bar2").css({"background-color":"transparent","color":"#fff"});
				});
				$("#reason_tab_bar2").click(function(){
					$(".reason_tab_list2").show();
					$(".reason_tab_list1").hide();
					$("#reason_tab_bar2").css({"background-color":"#fff","color":"#993366"});
					$("#reason_tab_bar1").css({"background-color":"transparent","color":"#fff"});
				});
			}else if(index==4){
				$(".thank").fadeIn(1500);
			
			}

		}

	});
});
