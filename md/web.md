设置根元素字体大小～rem的应用

```js
const doc = window.document // 文档对象
			const docEl = doc.documentElement // 文档对象元素
			var screenWid = 1440
			uni.getSystemInfo({
				success(res) {
					screenWid = res.screenWidth
				}
			})
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
```

