document.addEventListener('scroll', (e) => {
  window.scrollY?topNavBar.classList.add('sticky'):topNavBar.classList.remove('sticky')
})

//下拉二级菜单
let liTages = document.getElementsByClassName('submenu') // 拿到li
for(let i = 0; i < liTages.length; i++) {
  liTages[i].addEventListener('mouseenter', (e) => {
    let li = e.currentTarget
    let ul = li.getElementsByTagName('ul')[0]
    ul.classList.add('active')
  })
  liTages[i].addEventListener('mouseleave', (e) => {
    let li = e.currentTarget
    let ul = li.getElementsByTagName('ul')[0]
    ul.classList.remove('active')
  })
}

//tweenjs
function animate(time) {
  requestAnimationFrame(animate)
  TWEEN.update(time)
}
requestAnimationFrame(animate)

//点击后滚动
let aTages = document.querySelectorAll('.topNavBar  nav > ul > li > a')
for(let i = 0; i < aTages.length; i++) {
  aTages[i].addEventListener('click', (e) => {
    e.preventDefault()
    let top = document.querySelector(e.currentTarget.getAttribute('href')).offsetTop

    // //总移动次数
    // let n = 25
    // //多少时间动一次
    // let duration = 500 / n
    // //获取用户点击navbar时距离
    let currentDistance = window.scrollY
    //滚动目标距离
    let targetDisctance = top - 80
    let s = targetDisctance - currentDistance
    console.log(s);
    
    // //delay时间内每次移动的距离
    // let s = S / n
    // let i = 0
    // let scrollId = setInterval(() => {
    //   if(i === n) {
    //     window.clearInterval(scrollId)
    //     return
    //   }
    //   i += 1
    //   window.scrollTo(0, currentDistance + s * i)
    // }, duration)
    var t = Math.abs((s / 100) * 200)
    t > 500 ? 500 : t
    var coords = {y: currentDistance}
    var tween = new TWEEN.Tween(coords)
    .to({y: targetDisctance}, t)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(function() {
      window.scrollTo(0, coords.y)
    })
    .start()
  })
}


portfolioAll.onclick = ()=>{portfolioBar.className = 'bar state-1'}
portfolioFramework.onclick = ()=>{portfolioBar.className = 'bar state-2'}
portfolioVallina.onclick = ()=>{portfolioBar.className = 'bar state-3'}

setTimeout(() => {
  siteWelcome.classList.remove('show')
}, 1000)