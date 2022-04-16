# 单位

## 视口viewport

视口(viewport)代表当前可见的计算机图形区域

```css
.class{
  height: 30vh,
  width: 30vw
}
```



# 一些样式

## 蒙板

```css
.mask{
  position: fixed;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
	background-color: #757575;
	opacity: 0.5;
	//z-index: 4;
}
```

## 一个标签多种class

根据不同属性进行选择

```html
<view class='general' :class="{
                              'class1': condition1,
                              'class2': condition2,
                              'class3': condition3
                              }"/>

<!-- 一定要是双引号,class是单引号 -->
```

## 颜色渐变的圆

锥形渐变语法

`conic-gradient( [ from <angle> ]? [ at <position> ]?, <angular-color-stop-list> )`

- 起始角度（可省略）
- 中心位置（可省略）
- 角渐变点

```css
.ringBk{
	width: 172rpx;
	height: 172rpx;
	border-radius: 50%;
	background: conic-gradient(#61e2ea, #7974f0);
}
```

Ref：https://www.zhangxinxu.com/wordpress/2020/04/css-conic-gradient/

# 一些组件

## picker-view

若要在上方加入按键，按键wrapper加入`position: absolute;`

## button

去掉边框不能直接使用 `border: none`，而是需要使用`button::after{border: none}`来实现

