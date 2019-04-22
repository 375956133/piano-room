/*
 * @Author: 375956133
 * @Date:   2019-04-18 13:15:55
 * @Last Modified by:   375956133
 * @Last Modified time: 2019-04-19 10:57:40
 */

function submite() {

	// alert(2);
	var user = $("input[name = 'username']").val();
	var pwd = $("input[name = 'password']").val();
	if (user == "" || user == null || user == undefined) {
		alert("用户名不能为空！！！");
		return false; /*阻止表单提交*/
	} else if (pwd == '' || pwd == null || pwd == undefined) {
		alert("请输入密码！！！");
		return false; /*阻止表单提交*/
	} else {
		// http://47.105.211.251/piano/app/logins?username=0003&password=1234&imei=860604015021379
		axios.get("http://localhost:3000/yzm")
			.then(function(res) {
				console.log(res);
				// id = res.data.id       //83354413bad34a819875e0de6136a81a;
				var data=res.data;
				var status=res.data[0].status;
				var status1=res.data[0];
				console.log(data);
				console.log(status);
				console.log(status1);
				console.log(status1.id);
				var id=status1.id;
				window.localStorage.setItem("id",id);  //把用户id 存储都本地 为了修改密码时候用
				var userid=window.localStorage.getItem("id");
				console.log(userid);
			
				if (status ==0) {
					window.location.href = "stu-index.html"
				}
			})
			.catch(function(err) {
				console.log(err)
			});
		alert("提交成功！");

	}
}