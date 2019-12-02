<template>
  <div class="main-agileinfo slider ">
    <div class="items-group">
      <div class="item agileits-w3layouts">
        <div class="block text main-agileits">
          <span class="circleLight"></span>
          <!-- login form -->
          <div class="login-form loginw3-agile">
            <div class="agile-row">
              <h1>Dome Login</h1>
              <div class="login-agileits-top">
                <form action="#" method="post">
                  <p>User Name </p>
<!--                  <input type="text" class="name" name="username" required=""/>-->
                  <el-input placeholder="请输入用户名" v-model="username" name="username" required="" clearable></el-input>
                  <p>Password</p>
<!--                  <input type="password" class="password" name="Password" required=""/>-->
                  <el-input placeholder="请输入密码" name="Password" required="" v-model="psd" show-password></el-input>
                  <input type="submit" value="Login" >
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <p> &copy; 2019 Shadow Login Form. All Rights Reserved | Design by <a href="http://ahuiyo.cn" target="=_blank">ahuiyo</a></p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        data (){
            return {
                username : '',
                psd : ''
            }
        },
        methods :{

        }
    }
</script>

<style scoped>
  .name{
    background-color: #111;
  }
  /*--end reset--*/
  .main-agileinfo {
    font-family: 'Arsenal', sans-serif;
    background:#fff;
    background: url(./images/bg.jpg) repeat 0px 0px;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-attachment: fixed;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }
  h1 {
    font-size: 3em;
    text-align: center;
    color: #fff;
    font-weight: 100;
  }
  /*-- main --*/
  .login-form h1 {
    font-size: 3em;
    color: #fff;
    text-align: center;
    margin-bottom: 50px;
    line-height: 0.7em;
  }
  .login-form input[type="text"], .login-form input[type="password"] {
    outline: none;
    font-size: 1em;
    color: #000;
    padding: .6em;
    margin: 0;
    width: 100%;
    border: none;
    -webkit-appearance: none;
    display: block;
    background: #fff;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -o-border-radius: 2px;
    -ms-border-radius: 2px;
    border-radius: 2px;
  }
  .login-form p {
    font-size: 0.9em;
    color: #fff;
    margin:1.8em 0 .5em;
    letter-spacing: 1px;
  }

  .login-form input[type="submit"] {
    font-size: 1em;
    color: #fff;
    background: #E91E63;
    border: 1px solid #E91E63;
    outline: none;
    cursor: pointer;
    padding: .6em 1em;
    margin-top: 40px;
    -webkit-appearance: none;
    width: 100%;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
    border-radius: 2px;
  }
  .login-form input[type="submit"]:hover {
    background: transparent;
    color: #E91E63;
    transition: 0.5s all ;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
  }

  .footer p {
    line-height: 1.8em;
    margin: 3em 0;
    text-align: center;
    font-size:1em;
    color: #fff;
    letter-spacing: 1px;
  }
  .footer p a {
    text-decoration: unset;
    color: #FFF;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
    transition: 0.5s all ;
  }
  .footer p a:hover {
    color: #e91e63;
  }
  /*-- effect --*/
  .slider .items-group {
    width: 100%;
    position: relative;
  }
  .item {
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    transition: 0.5s;
    visibility: hidden;
    position: relative;
    opacity: 1;
    visibility: visible;
  }
  .item:hover .bg {
    opacity: 0.2;
  }
  .item:hover .block {
    -webkit-box-shadow: 0px 0px 50px #333;
    -moz-box-shadow: 0px 0px 50px #333;
    -o-box-shadow: 0px 0px 50px #333;
    -ms-box-shadow: 0px 0px 50px #333;
    box-shadow: 0px 0px 50px #333;
  }
  .item .bg {
    top: 0px;
    left: 0px;
    opacity: 1;
    z-index: -1;
    width: 100%;
    height: 100%;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    transition: 0.5s;
    position: absolute;
    -webkit-transform: scale(1.03);
    -moz-transform: scale(1.03);
    -o-transform: scale(1.03);
    -ms-transform: scale(1.03);
    transform: scale(1.03);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  .item .blur {
    top: 0px;
    left: 0px;
    z-index: -1;
    width: 100%;
    height: 100%;
    -webkit-transition: 0.5s;
    -moz-transition:0.5s;
    -o-transition:0.5s;
    -ms-transition:0.5s;
    transition:0.5s;
    -webkit-filter: blur(5px);
    filter: blur(5px);
    position: absolute;
    -webkit-transform: scale(1.03);
    -moz-transform: scale(1.03);
    -o-transform: scale(1.03);
    -ms-transform: scale(1.03);
    transform: scale(1.03);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  .item .block {
    width: 30%;
    padding: 50px 40px;
    margin: 80px auto;
    color: #fff;
    -webkit-transition: box-shadow 0.5s;
    transition: box-shadow 0.5s;
    overflow: hidden;
    border-radius: 10px;
    -webkit-transform: scale(1.03);
    -moz-transform: scale(1.03);
    -o-transform: scale(1.03);
    -ms-transform: scale(1.03);
    transform: scale(1.03);
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    box-shadow: none;
  }

  .item .block:hover {
    -webkit-box-shadow: 0px 0px 70px #000;
    -moz-box-shadow: 0px 0px 70px #000;
    -o-box-shadow: 0px 0px 70px #000;
    -ms-box-shadow: 0px 0px 70px #000;
    box-shadow: 0px 0px 70px #000;
  }
  .item .block:hover .circleLight {
    opacity: 0.4;
  }
  .item .block .circleLight {
    top: 0px;
    left: 0px;
    opacity: 0;
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    transition: 0.5s;
    border-radius: 10px;
    background: radial-gradient(circle at 80px 40px, #ffffff, rgba(0, 0, 0, 0));
  }
</style>
