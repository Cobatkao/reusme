# reusme

[我的简历XD——点我预览](http://isaacgao.cn/reusme//resume.html)

我的简历XD

## 效果

1. loading 动画
2. sticky navbar
    - 获取用户滚动的高度
    - window.scrollY
3. 导航栏下划线效果
4. 会动的二级菜单
5. 点击导航栏上某个菜单即滚动到指定位置
    - css无法实现，js可以做更精准的定位
    - 缓动效果
6. 滑动页面时，菜单对应项高亮（highlight类）
7. 滑动时元素上升效果
8. 技能进度条右扩动画

## 细节

### 滚动动画的缓动效果

- 运用缓动函数，如linear（匀速），easein（淡入，从慢到块），easeout（淡出，从快到慢），easeinout（慢快慢），更多请[点击查看](https://easings.net/zh-cn)
- 本项目中，我们引入tweenjs，让tweenjs来计算中间滚动距离，取代定时器+scrollTo；

### 事件

运用了`mouseenter`、`mouseleave`，`e.target`，代表用户操作的元素，`e.currenttarget`用户监听的元素，一般建议先用这个。

### 动画

因为使用原生JS，所以项目中大量动画都是通过JS，aniamtion，transform+trnasition完成。

### 一个元素直接点href和点getattribute的区别

a.href 返回结果带域名
a.getAttribute() 不带http和域名

### element.getBoundingClientRect()

返回一个hash，元素在页面中的宽高及相对于视口的位置；

## 技巧

- absolute后写top：100%是技巧 不是bottom：0;
- 动效大多是用js控制切换class，然后css写效果完成的！

### js找弟弟技巧

- `node.nextSibling`，但是它容易有bug，会找到的下一个节点可能是回车（代码格式问题）或空白符，所以有可能会看到`node.nextSbling.nextSibling`；
- 可以使用递归的思路，`nodetype`可以确定一个元素是什么节点类型，用来做判断，1是元素节点，3是文本节点；

  ![pic](https://ws4.sinaimg.cn/large/006tNbRwgy1fwcipdsmhfj30t20d4gv1.jpg)

  ⚠️ 这里不能用if，要用while，循环。

## 典型bug

![pic](https://ws2.sinaimg.cn/large/006tNbRwgy1fwcjcesw2cj30hm0mqwkj.jpg)

- 出现背景：导航栏为a，下拉列表为ul结构，mouseenter mouseleave 移出后下拉列表也消失
- 原因：ul和a之中存在缝隙，所以会自动消失
- 解决：监听对象放倒a和ul的父标签上！！！也就是li元素上。