var i = 0
var images = []
var time = 3000

images[0] = 'school-front.jpg'
images[1] = 'Espinosa-gets-award.jpg'
images[2] = 'rams-become-coogs.jpg'
images[3] = 'Graduation4.jpg'

// var pictures = []

// pictures[0] = 'school-front.jpg'
// pictures[1] = 'Espinosa-gets-award.jpg'
// pictures[2] = 'rams-become-coogs.jpg'
// pictures[3] = 'Graduation4.jpg'

function changeImg () {
  document.slide.src = images[i]

  if (i < images.length - 1) {
    i++
  } else {
    i = 0
  }

  setTimeout('changeImg()', time)
}

// function imgChange () {
//   document.slide2.src = pictures[i]

//   if (i < pictures.length - 1) {
//     i++
//   } else {
//     i = 0
//   }
//   setTimeout('imgChange()', time)
// }

// setInterval(function () {
//   // console.log(i)
//   document.slide.src = images[(i + 2) % images.length]
//   document.slide2.src = images[(i + 1) % images.length]
//   document.slide3.src = images[i % images.length ]
//   i++
// }, time)

window.onload = changeImg
// window.onload = imgChange
