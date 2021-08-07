/**
 * <div class="lightbox">
        <div class="lightbox-content">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80" alt=""
         class="lightbox-image">
        </div>
    </div>
 */
const images = document.querySelectorAll(".content img");
images.forEach(item => item .addEventListener('click',handleZoomImage));
function handleZoomImage (event){
    console.log(event.target );
    const image = event.target.getAttribute('src');
    const template = `<div class="lightbox">
    <div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-prev"></i>
        <img src="${image}"
         alt =""
     class="lightbox-image">
    <i class="fa fa-angle-right lightbox-next"></i>
    </div>
</div>`;
document.body.insertAdjacentHTML('beforeend',template);
}


// click vào img rồi click ra để xóa khỏi đó 
let index = 0 ;
document.body.addEventListener('click',function(e){
    const lightImage = document.querySelector('.lightbox-image');
    let lightSrc = '';
    if(e.target.matches('.lightbox')){
        // xoas khoit DOM
        e.target.parentNode.removeChild(e.target);
    }else 
    
    if (e.target.matches('.lightbox-next')){
        // dùng để next hình ảnh
        lightSrc = lightImage.getAttribute('src');
        index = [...images].findIndex((item) => item.getAttribute('src')===lightSrc)
      // console.log(index ); dùng để kiểm tra nếu ra số là đúng 

        index = index + 1;
        if(index > images.length - 1) return ;
        // { index = 0 } sẽ lập lại 
        const newSrc  =[...images][index ].getAttribute('src');
        lightImage.setAttribute('src',newSrc );
    }else
    
    
    if  (e.target.matches('.lightbox-prev')){
        // dùng để quay lại       
        lightSrc = lightImage.getAttribute('src');
        index = [...images].findIndex((item) => item.getAttribute('src')===lightSrc)
      // console.log(index ); dùng để kiểm tra nếu ra số là đúng 

        index = index - 1;
        if(index < 0) {
            index = images.length - 1 ; 
            return ;
        }
        const newSrc  =[...images][index ].getAttribute('src');
        lightImage.setAttribute('src',newSrc );  
    }
     
});