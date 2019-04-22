/*
 * @Author: Administrator
 * @Date:   2019-04-15 15:10:57
 * @Last Modified by:   375956133
 * @Last Modified time: 2019-04-18 11:54:29
 */

// 提交表单
function checkForm() {
	// alert(2);
	var numj = $("input[name='numj']").val();
	var timer = $("input[name='timer']").val();
	var timelong = $("input[name='timelong']").val();
	if (numj == "" || numj == null || numj == undefined) {
		alert("请选择节数！");
		return false; /*阻止表单提交*/
	} else if (timer == "" || timer == null || timer == undefined) {
		alert("请选择开始时间！");
		return false;
	} else if (timelong == "" || timelong == null || timelong== undefined) {
		alert("请选择时长！");
		return false;
	} else {
		alert("提交成功！")
		$("#Form").submit();
		$(this).parent().parent().parent().parent().parent().parent().hide();
	}

}
// 获取当下点击的td所在的行号跟列号
//页面装载就加载函数
$(document).ready(function() {
//给所有的td单元格绑定一个click事件
//如果这个table的id为table1，那单给table1的所有td加click事件代码为：
var tds = $("#tabl").find("td");
var tds = $("td");
tds.click(tdclick);
});

function tdclick() {
//var td = $(this);
//var text = td.text();
// $(this)表示这个td单元格，
// .parent("tr")表示这个td的父节点
// .prevAll()表示这个tr前面有多少个tr
var hang = $(this).parent("tr").prevAll().length;
var lie = $(this).prevAll().length;
hang = Number(hang)+1;//字符串变为数字
lie = Number(lie)+1;
console.log("第"+hang+"行"+"第"+lie+"列");
}


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
					// $(this).text(2); 把提交的数据放入点击的td中

				})
			}

		} else {
			// console.log(obj);
			var ary = obj;
			console.log(ary);

			for (var i = 0; i < ary.length; i++) {
				// 点击触发模态框
				$(ary[i]).click(function() {
					$('#myModal2').modal();
					var _this = this; //改变this指向
					// 点击取消按钮 让td清空
					$("#tdhasval").click(function() {
						console.log(3);

						// 让模态框消失
						$(this).parent().parent().parent().parent().hide('400', function() {
							console.log(3);
							$(".modal-backdrop").hide();
						});
						// 清空td中的内容
						$(_this).text("");
						// location.reload(); //重新渲染一次页面
					})

				})
			}
		}

	});
// 获取一共有几行几列
var table =document.getElementById("tab1");
 var rows = table.rows.length;
 console.log('行数'+rows);
 var colums = table.rows[0].cells.length;
 console.log('列数'+colums);



// 获取table中的值     table.rows[0].cells[0].innerText   或者 innerHTML



})