/*
 * @Author: Administrator
 * @Date:   2019-04-15 15:10:57
 * @Last Modified by:   Administrator
 * @Last Modified time: 2019-04-16 15:32:49
 */

$(function() {
	var tdObj = $(".table td");
	// console.log(tdObj);
	$(tdObj).each(function(i, n) {
		console.log(i);
		console.log(n);
		var obj = $(n);
		var val = obj.text();
		console.log(val)
		if (val == '' || val == null || val == undefined) {
			// console.log(obj);
			var arr = obj;
			console.log(arr);
			for (var j = 0; j < arr.length; j++) {
				$(arr[j]).click(function() {
					$('#myModal').modal();
				})
			}

		} else {
			// console.log(obj);
			var ary = obj;
			console.log(ary);
			for (var i = 0; i < ary.length; i++) {
				$(ary[i]).click(function() {
					$('#myModal2').modal();
						// $(this).text("");

					$("#tdhasval").click(function() {
						console.log(3);
						$(this).parent().parent().parent().parent().hide('400', function() {
							console.log(3);
							$(".modal-backdrop").hide();
						

						})
					})

				})
			}
		}

	});

	for (var i = 0; i < tdObj.length; i++) {
		// console.log(tdObj[i]);
		// console.log(tdObj.innerHTML());
		// var valObj=$(tdObj[i]).val();
		// console.log(valObj)
		$(tdObj[i]).click(function() {
			// alert(2);
			// $(this).html()  后端把用户名跟 时间 放入即可
			// console.log(tdObj);

		});

		// $(".hasval").click(function() {
		// 	console.log(3);
		// 	$('#myModal2').modal();
		// 	$("#tdhasval").click(function() {
		// 		console.log(3);
		// 		$(this).parent().parent().parent().parent().hide('400', function() {
		// 			console.log(3);
		// 			$(".modal-backdrop").hide();
		// 			$(".hasval").html("")
		// 		})
		// 	})
		// })


	}

})