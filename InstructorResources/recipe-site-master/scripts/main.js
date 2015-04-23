document.addEventListener("DOMContentLoaded", function(event) { 
  var image = document.querySelector("img");
  console.log(image);
  image.src = getRandomCookieImage();
  var button = document.getElementsByTagName("button")[0];
  console.log(button)
  button.addEventListener('click', function(e){
    hideImage();
  })
});

function getRandomCookieImage() {
  var imageArray = ['src/cookies.jpg', 'src/cookies2.jpg', 'src/cookies3.png', 'src/cookies4.jpg'];
  var randomNumber = Math.floor(Math.random() * (4 - 0));
  return imageArray[randomNumber]
}

function hideImage() {
  var image = document.getElementsByClassName("group")[0].children[0].children[0];
  image.style.display="none";
  var aside = document.getElementsByClassName("group")[0].children[1]
  aside.style.clear="both"
}


