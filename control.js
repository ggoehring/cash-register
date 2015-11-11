var item;
var total = 0;
$(".order-button").click(function(){
		item = $(this).attr("id");
		var price;
		if (item == "Chicken"){
			price = 5;
			total += price;	
		} else if (item == "Steak"){
			price = 25;
			total += price;
			}
		$(".item-list").append(
			"<li class='list-item'>"+item+" $"+price+"</li>"
			);
		$(".amount").text(total)

})