//loading animate
setTimeout(() => {
  siteWelcome.classList.remove('show')
}, 1000)

//向下滚动动画
let specialTags = document.querySelectorAll('[data-x]')
  let minIndex = 0
  for(let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
  }

//监听滚动
setTimeout(() => {
  findCloseElement()
}, 1000);
document.addEventListener('scroll', (e) => {
  window.scrollY?topNavBar.classList.add('sticky'):topNavBar.classList.remove('sticky')
  findCloseElement()
})

function findCloseElement() {
  let specialTags = document.querySelectorAll('[data-x]')
  let minIndex = 0
  for(let i = 1; i < specialTags.length; i++) {
    if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
      minIndex = i
    }
  }

  specialTags[minIndex].classList.remove('offset')
  let id = specialTags[minIndex].id
  let a = document.querySelector(`a[href="#${id}"]`)
  let li = a.parentNode
  let siblingNode = li.parentNode.children
  for(let i = 0; i < siblingNode.length; i++) {
    siblingNode[i].classList.remove('highlight')
  }

  li.classList.add('highlight')
}

let liTages = document.querySelectorAll('nav > ul > li')
for(let i = 0; i < liTages.length; i++) {
  liTages[i].addEventListener('mouseenter', (e) => {
    e.currentTarget.classList.add('active')
  })
  liTages[i].addEventListener('mouseleave', (e) => {
    e.currentTarget.classList.remove('active')
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
