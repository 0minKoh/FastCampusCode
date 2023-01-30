AOS.init()

$(window).ready(() => {
  $('.img-item.img1').fadeIn(500, () => {
    $('.img-item.img2').fadeIn(500, () => {
      $('.img-item.img3').fadeIn()
    })
  })
})

$('.menu-all').hover(() => {
  $('.sub-menu-pc').slideDown(100, 'linear')
}, () => {
  $('.sub-menu-pc').slideUp(100, 'linear')
})

$('.menu-listener').hover(() => {
  $('.sub-menu').fadeIn()
})

let dropActive = true
$('.ads-dropdown').click(() => {
  if (dropActive) {
    $('.ads-reward').slideUp(100)
    $('.ads-dropdown').css("transform", "rotate(180deg)")
  } else {
    $('.ads-reward').slideDown(100)
    $('.ads-dropdown').css("transform", "rotate(0deg)")
  }
  dropActive = !dropActive
})