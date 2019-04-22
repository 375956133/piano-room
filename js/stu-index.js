/*
 * @Author: 375956133
 * @Date:   2019-04-19 14:14:13
 * @Last Modified by:   375956133
 * @Last Modified time: 2019-04-22 11:23:52
 */

$(function() {

	window.onload = function() {
		axios.get("http://localhost:3000/data")
			.then(function(res) {
				// console.log(res);
				console.log(res.data);
				var qname = res.data[0].name;
				console.log(qname);
				$(".louname").html(qname);
				// cg = res.data[0].listChil[0].name;
				// console.log(cg);
				// $(".cg").html(cg);
				var louceng=res.data[0].listChil;
				console.log(louceng);
				var c1=res.data[0].listChil[0].name;
				console.log(c1);
				var c2=res.data[0].listChil[1].name;
				var c3=res.data[0].listChil[2].name;
				var c4=res.data[0].listChil[3].name;
				var c5=res.data[0].listChil[4].name;
				var c6=res.data[0].listChil[5].name;

				var data1=res.data[0].listChil[0].listChil;
				var data2=res.data[0].listChil[1].listChil;
				var data3=res.data[0].listChil[2].listChil;
				var data4=res.data[0].listChil[3].listChil;
				var data5=res.data[0].listChil[4].listChil;
				var data6=res.data[0].listChil[5].listChil;
				console.log(data1);
				// console.log(res.data[0].listChil[0].listChil[0].name);

				// room1 = res.data[0].listChil[0].listChil[0].name;
				// room2 = res.data[0].listChil[0].listChil[1].name;
				// $(".ul1 .table tr td a").html(room1);
				// console.log(room2);
				
				stuindex.items1=data1;
				stuindex.items2=data2;
				stuindex.items3=data3;
				stuindex.items4=data4;
				stuindex.items5=data5;
				stuindex.items6=data6;
				// 楼层开始
				stuindex.citems1=c1;
				stuindex.citems2=c2;
				stuindex.citems3=c3;
				stuindex.citems4=c4;
				stuindex.citems5=c5;
				stuindex.citems6=c6;
			
			
			})
			.catch(function(err) {
				console.log(err)
			})
	}

	var trObj = $(".qroom tr td a");
	// console.log(trObj);
	for (var i = 0; i < trObj.length; i++) {
		$(trObj[i]).click(function() {
			// alert(3);
			var roomid = $(this).html();
			alert(roomid);
			console.log(roomid); //获取到每间琴房的id
			//http://47.105.211.251/piano/app/rooms  

			// window.location.href="yuyue-infor.html";
		})
	}

})