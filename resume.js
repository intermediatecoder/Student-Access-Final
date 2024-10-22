
const popup = document.querySelector(".popup");
const fullImage = document.querySelector(".full-image");

const images = document.querySelectorAll(".profile-image");

for(const profileImage of images) {
  profileImage.addEventListener("click", (event) => {
    handleProfile({
      url: profileImage.src,
      show: true,
    });
	});
}

function handleProfile({
	url,
  show
}) {
  if(show) {
  	fullImage.src = url;
    popup.classList.remove("hidden");
  } else {
    popup.classList.add("hidden");
  }
}

popup.addEventListener("click", (event) => {
	if(event.target !== fullImage) {
  	handleProfile({
    	show: false,
    });
  }
});
