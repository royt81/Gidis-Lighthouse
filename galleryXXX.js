
const body = document.getElementsByName('body')
const galleryPage = document.getElementById('galleryPage');




function runPage(){

fetch('images/gallery/')
      .then(response => response.text())
      .then(data => {
        var imageFileNames = extractImageFileNames(data);

        imageFileNames.forEach(function(fileName) {
            const image = document.createElement('img')
            image.className = 'galleryPicture'
            image.src = fileName;
            image.addEventListener('mouseover', (event) =>{
                event.target.style.border = '3px solid orange';
                event.target.style.curser = 'pointer'
                setTimeout(()=>{
                    event.target.style.border = ''
                }, 600);
            })
            image.addEventListener('click', ()=>{
              inlargePicture(fileName)

            })
            galleryPage.appendChild(image);
        });
      })
      
      .catch(error => {
        console.error('Error fetching image file names:', error);
      });
   
}

function extractImageFileNames(html) {
  var regex = /href="([^"]+\.(?:jpg|jpeg|png|gif))"/g;
  var matches;
  var imageFileNames = [];

  while ((matches = regex.exec(html)) !== null) {
    imageFileNames.push(matches[1]);
  }

  return imageFileNames;

}
function inlargePicture(fileName){
  galleryPage.innerHTML = '';
  const displayPage = document.createElement('div');
  displayPage.className = 'displayPage';
  const largePicturePage = document.createElement('img');
  largePicturePage.className = 'largePicturePage';
  largePicturePage.src = fileName;

  // galleryPage.style.justifyContent = 'center';

  const dblClickText = document.createElement('button');
  dblClickText.innerText = 'Click to go back';
  dblClickText.className = 'dblClickText';
     
  dblClickText.addEventListener('click', ()=>{
    window.location.assign("/gallery.html");
  })
  // galleryPage.addEventListener('dblclick', ()=>{
  //  <div class="headline"><button id="homeButton" onclick="window.location.href='/' ">Home</button><h1 class="galleryH1">our Gallery</h1></div>

  //   galleryPage.innerHTML = ''
  //   runPage()
  //   galleryPage.style.justifyContent = 'space-around'
  // })

  
  // galleryPage.className = 'flexColumn'
  displayPage.appendChild(dblClickText)
  displayPage.appendChild(largePicturePage)
  galleryPage.appendChild(displayPage)
}

runPage()


