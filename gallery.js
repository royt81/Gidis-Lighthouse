

const gallery = document.getElementById('gallery');

let images = gallery.children



for(let i = 0; i < images.length; i++){
    const image = images[i]
    console.log(image.src)

    image.addEventListener('click', ()=>{

        gallery.innerHTML = '';

        const imageDiv = document.createElement('div');
        const largeImage = document.createElement('img');

        largeImage.id = 'largeImage';
        largeImage.src = `${image.src}`;
        imageDiv.appendChild(largeImage);

        const homeButton = document.createElement('button')
        homeButton.id = 'homeButton'
        homeButton.innerText = 'Back to gallery'
        homeButton.addEventListener('click', ()=>{
            window.location.href = '/gallery.html'
        })
        imageDiv.appendChild(homeButton);

        imageDiv.id = 'imageDiv'

        gallery.appendChild(imageDiv)
    })
}




