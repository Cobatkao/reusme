document.addEventListener('scroll', (e) => {
  window.scrollY?topNavBar.classList.add('sticky'):topNavBar.classList.remove('sticky')
})

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

portfolioAll.onclick = ()=>{portfolioBar.className = 'bar state-1'}
portfolioFramework.onclick = ()=>{portfolioBar.className = 'bar state-2'}
portfolioVallina.onclick = ()=>{portfolioBar.className = 'bar state-3'}

setTimeout(() => {
  siteWelcome.classList.remove('show')
}, 1000)