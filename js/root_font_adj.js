const doc = window.document // 文档对象
			const docEl = doc.documentElement // 文档对象元素
			var screenWid = window.screen.availWidth
			
			// 根据视窗宽度，设置根字体大小
			  const refreshRem = () => {
			    const rem = docEl.getBoundingClientRect().width / screenWid * 16
			    docEl.style.fontSize = rem + 'px'
			  }
			
			  refreshRem() // 首次加载设置根字体模块
			
			  // 监听resize事件，设置根字体大小
			  window.addEventListener('resize', () => {
			    window.clearTimeout(tid)
			    var tid = window.setTimeout(refreshRem, 300)
			  })
			  
function IsPC () {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
			// alert('请使用电脑浏览')
            break;
        }
    }
    return flag;
}
let res = IsPC();
console.log(res);