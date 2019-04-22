/*
 * @Author: Administrator
 * @Date:   2019-04-12 16:33:32
 * @Last Modified by:   375956133
 * @Last Modified time: 2019-04-19 10:38:16
 */

function resetform() {
	// alert(3);
	var opwd = $("input[name='opwd']").val();
	var npwd = $("input[name='npwd']").val();
	if (opwd == '' || opwd == null || opwd == undefined) {
		alert("请输入旧密码！！！");
		return false;
	} else if (npwd == "" || npwd == null || npwd == undefined) {
		alert("请输入新密码！！！");
		return false;
	} else {
		var userid = window.localStorage.getItem("id"); //把用户登录时候存储到本地的id取出来 
		console.log(userid);
		axios.get("http://localhost:3000/yzm", {
				params: {
					id: userid,
					opwd: opwd,
					npwd: npwd
				}
			})
			.then(function(res) {
				console.log(res);
			})
			.catch(function(err) {
				console.log(err);
			})
			alert("提交成功！！！");
			window.location.href="stu-index.html";
	}


}