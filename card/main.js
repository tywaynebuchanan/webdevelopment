const card = document.querySelector('.card-img');
const getPhotos = async()=>{
    let response = await fetch("https://picsum.photos/id/2/200/300")
    let data = await response.json();

   data.forEach(photos =>{
       console.log(photos);
   })

}

getPhotos();