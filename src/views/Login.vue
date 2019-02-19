<template>
	<div id="login">
		<div class="layui-card  user-login-form">
			<!--<div class="layui-card-header">用户登录</div>-->
			<div class="layui-card-body">
				<form class="layui-form" action="">
					<div class="layui-form-item">
						<label class="layui-form-label">用户名</label>
						<div class="layui-input-block">
							<input type="text" name="user" required placeholder="请输入用户名" autocomplete="off" class="layui-input">
						</div>
					</div>
					<div class="layui-form-item">
						<label class="layui-form-label">密码</label>
						<div class="layui-input-block">
							<input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
						</div>
					</div>
					<div class="layui-form-item verfication-box" style="width:200px; position:relative;">
						<label class="layui-form-label">验证码</label>
						<div class="layui-input-block">
							<input type="text" name="verfication" required lay-verify="required" autocomplete="off" class="layui-input">
						</div>
						<img class="verfication" src="../assets/images/verfication.png" style="width:72px;height:26px; position:absolute; top:6px; left:212px;">
					</div>

					<div class="layui-form-item">
						<div class="layui-input-block">
							<button class="layui-btn" lay-submit lay-filter="formDemo" @click="login">立即提交</button>
							<button type="reset" class="layui-btn layui-btn-primary">重置</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		methods: {
			login() {
				axios.post("http://192.168.1.112:5757/index.php/api/login/login", qs.stringify({
					key: then(res => {
						console.log(res);
					})
					.catch(err=>{
						console.log(err)
					})
				}))
			}
		}
	}
</script>
<style scoped="">
	#login {
		padding: 1px 0px;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-sizing: border-box;
		background-image: url(../assets/images/user-bg.png);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	
	.user-login-form {
		width: 450px;
		margin: 100px auto 0px;
	}
	
	.layui-card {
		background-image: url(../assets/images/login-bg.png);
		background-size: cover;
		width: 450px;
		height: 335px;
		position: relative;
		margin-top: 360px;
	}
	
	.layui-card-body {
		position: absolute;
		top: 88px;
		left: 30px;
	}
</style>