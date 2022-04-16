# 术语

## DOM

The **Document Object Model** (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

aka, 文档对象模型

## jQuery

# 操作系统兼容性

## new Date（）

在ios中，直接使用new Date()可能会出现NaN，如下：

```js
var date =new Date("2016-05-31 08:00");
var date =new Date("2016\05\31 08:00");
```

解决方法

```js
var date =new Date("2016/05/31 08:00");
```

```js
let dateStr = '2016-05-31 08:00'
var date = new Date(dateStr.replace(/\-/g, "/"))
```

Ref：https://blog.csdn.net/zhoukun1008/article/details/51537862

# 符号

## $

### JQUERY中

$在JS中本身只是一个符号而异，在JS里什么也不是。但在JS应用库JQUERY的作者将之做为一个**自定义函数名**了，这个函数是**获取指定网页元素的函数**

三种使用方法：

1. $()可以是$(expression)，即css选择器、Xpath或html元素，也就是通过上述表达式来匹配目标元素。 

   $()中的是一个查询表达式

2. $()可以是$(element)，即一个特定的DOM元素。如常用的DOM对象有document、location、form等。

3. $()可以是$(function)，即一个函数，它是$(document).ready()的一个速记方式

Ref: https://www.cnblogs.com/jokerjason/p/7404649.html

### uni.$emit(eventName,OBJECT)

触发全局的自定事件。附加参数都会传给监听器回调。

```js
uni.$emit('update',{msg:'页面更新'})
```

# 函数

## uni.navigateToMiniProgram

```js
uni.navigateToMiniProgram({
  appId: '',//你要跳转的小程序的appid
  path: '',//需要跳转appid的路径，不写默认跳转小程序的首页
  extraData: {
    'data1': 'test'
  },
  envVersion: '', //develop（开发版），trial（体验版），release（正式版，默认）。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
  success(res) {
    // 打开成功
  }
})
```

Ref: https://uniapp.dcloud.io/api/other/open-miniprogram?id=navigatetominiprogram

跳转到的目标小程序，可在 `App.vue` 的 `onLaunch`或`onShow`中获取到这份数据。

```js
onLoad(option){
	console.log(option);  //获取的option长这样  q: "https%3A%2F%2Fwww.cailanzi001.com%2Fqrcode%2F
	const url = decodeURIComponent(option.q);//需要转换一下 然后截取url后面的参数即可
	let code = url.substring(35)//获取参数
}
```

Ref: https://blog.csdn.net/weixin_46391646/article/details/109489268

## promise

```js
_self.$http.post({
	url:"member.php",
	data: data_memberInfo
}).then(res=>{
	console.log(res[1].data.data.map.mem_name)
})
```

### 循环+异步解决方法

```js
// 写在function里
async example(count){
  let length = 20
  if(count<length){
    this.$http.post().then(res=>{
      console.log('some codes')
      
      count ++
      this.example(count)
    })
  }
}

this.example(0)
```

Ref: https://blog.csdn.net/canot/article/details/73505891

### 获取微信手机号

```vue
<button class="btn-wechat" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信登陆</button>
```

```js
getPhoneNumber: function(e) {
	if(e.detail.errMsg == 'getPhoneNumber:fail user deny'){
		uni.showModal({
			title: '提示',
			showCancel: false,
			content: '未授权',
		})
	} 
	else{
		var _self = this
		uni.showModal({
			title: '提示',
      showCancel: false,
      content: '同意授权',
      success: function (res) { 
        uni.login({
          success(logRes) {
            // 通过公众号管理平台获取了AppID，AppSecret
            let AppID = ''
            let AppSecret = ''
            var dataToGetPhoneNum = {
              appid: AppID,
              secret: AppSecret,
              encryptedData: e.detail.encryptedData,
              iv: e.detail.iv,
              sessionCode:logRes.code
            }
            // 获取sessionKey
            uni.request({
              url: "https://api.weixin.qq.com/sns/jscode2session?appid="+dataToGetPhoneNum.appid+"&secret="+dataToGetPhoneNum.secret+"&js_code="+dataToGetPhoneNum.sessionCode+"&grant_type=authorization_code",
              method: 'GET',
              success:function(keyRes){
                const WXBizDataCrypt = require('../../util/WXBizDataCrypt.js')
                const pc = new WXBizDataCrypt(dataToGetPhoneNum.appid, keyRes.data.session_key)
                const data= pc.decryptData(dataToGetPhoneNum.encryptedData , dataToGetPhoneNum.iv)
                console.log('解密后 data: ', data)
              }
            })
          }
        })
      }
    })
  }
}
```

Ref: https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html

Ref: https://blog.csdn.net/lk888666/article/details/102875116

Ref: https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html

### 手机号正则检验

```js
phoneFun(phones){
  var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  if (!myreg.test(phones)) {
    console.log('手机号格式不正确')
    return false;
  } 
  else {
    console.log('手机号格式正确')
    return true;
  }
},
```

Ref：https://blog.csdn.net/weixin_34392906/article/details/94263573

# canvas

HTML部分

```html
<canvas id="a" width="300" height="300">您的浏览器不支持 canvas</canvas>
```

JS部分

```js
var a = document.getElementById('a');
var a_context = a.getContext("2d");	// 必须为2d，可能会有3d
```

# 业务功能

### 小程序推送消息

Ref：https://cloud.tencent.com/developer/article/1474397

Ref：https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html
