$(document).ready(
	function(){
		
		var img_full_div_top = $(".image-full-div").position().top;
		var img_full_div_left = $(".image-full-div").position().left;

		$("#crop_tool").css("top", img_full_div_top + 50).css("left", img_full_div_left + 50);

		$("#crop_tool").resizable({containment: "parent"});
		$("#crop_tool").draggable({containment: "parent"});

		$("#crop_btn").click(
			function(){


				var img_full_div_top = parseInt($(".image-full-div").position().top);
				var img_full_div_left = parseInt($(".image-full-div").position().left);
				var crop_tool_top = parseInt($("#crop_tool").position().top);
				var crop_tool_left = parseInt($("#crop_tool").position().left);

				img_full_div_left.toFixed();
				img_full_div_top.toFixed();
				crop_tool_left.toFixed();
				crop_tool_top.toFixed();

				var crop_start_x = crop_tool_left - img_full_div_left;
				var crop_start_y = crop_tool_top - img_full_div_top;

				var crop_tool_width = parseInt($("#crop_tool").width());
				var crop_tool_height = parseInt($("#crop_tool").height());

				crop_tool_width.toFixed();
				crop_tool_height.toFixed();

				var img_name = $("#crop_btn").attr("img_name");

				$.post("libraries/crop.php", {img_name: img_name, crop_start_x: crop_start_x,
					crop_start_y: crop_start_y, crop_tool_width: crop_tool_width,
					crop_tool_height: crop_tool_height}, function(data){

						console.log(data);


				})

			}
		);

	}
);