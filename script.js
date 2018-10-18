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

//点击后滚动
let aTages = document.querySelectorAll('.topNavBar  nav > ul > li > a')
for(let i = 0; i < aTages.length; i++) {
  aTages[i].addEventListener('click', (e) => {
    e.preventDefault()
    let clickA = e.currentTarget    
    let hrefA = clickA.getAttribute('href')
    //获取点击的元素
    let element = document.querySelector(hrefA)
    let top = element.offsetTop
    console.log(top);
    window.scrollTo(0, top - 80)
  })
}


portfolioAll.onclick = ()=>{portfolioBar.className = 'bar state-1'}
portfolioFramework.onclick = ()=>{portfolioBar.className = 'bar state-2'}
portfolioVallina.onclick = ()=>{portfolioBar.className = 'bar state-3'}

setTimeout(() => {
  siteWelcome.classList.remove('show')
}, 1000)