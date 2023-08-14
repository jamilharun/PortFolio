import React from "react";


const Biography = () => {
    return (

        // reminder: future jamil. di pa to final. gagawin mo pa itong Flipbook 

        <div className="bio">
            <div 
                className="modal hover:shadow-sm hover:shadow-cyber-easth-midnight_express 
                    hover:ease-in ease-out duration-200 hover:border-cyber-easth-palatinate_Purple
                    place-items-center"
            >
            <span 
                className="text-cyber-easth-midnight_express hover:text-cyber-easth-deap_Lilac 
                    ease-out hover:ease-in duration-300 " 
                onClick={closeBio}>&times;</span>
            <h3>Biography</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                elit. Ea, enim, deleniti corporis qui dolore asperiores
                similique beatae tempora quasi dolor laudantium eligendi 
                nulla fugiat numquam molestiae, ratione eaque quam vel.</p> 

            </div>
        </div>
    )
    
}

let modal = document.querySelector('.modal')
const bio = document.querySelector('.bio')

function closeBio(){
    let span = document.querySelector('.bio');
    span.style.display = 'none'
}

// script for movable div
// 2nd movable div code
bio?.addEventListener('mousedown', mousedown)

function mousedown(e){
    window.addEventListener('mousemove', mousemove)
    window.addEventListener('mouseup', mouseup)

    let prevX = e.clientX
    let prevY = e.clientY

    console.log("1");

    function mousemove(e) {
        console.log("2");

        let newX = prevX - e.clientX
        let newY = prevY - e.clientY

        const rect = bio.getBoundingClientRect();

        bio.style.left = rect.left - newX + "px"
        bio.style.top = rect.top = newY + "px"
        
        prevX = e.clientX
        prevY = e.clientY
    }
    function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

// 1st movable div code
// function onDrag({movementX, movementY}){
//     let getStyle = window.getComputedStyle(bio);
//     let leftValue = parseInt(getStyle.left);
//     let topValue = parseInt(getStyle.top);

//     bio.style.left = `${leftValue + movementX}px`;
//     bio.style.top =  `${topValue + movementY}px`;
// } 

// if (bio){                                       //Cannot read property ‘addEventListener’ of null
//     bio?.addEventListener('mousedown', ()=> {   //i still cant find the solution for this
//         modal.style.cursor = 'all-scroll';      //sometimes its working sometimes its not.
//         modal.addEventListener('mousemove', onDrag);
        
//     })
//     document.addEventListener('mouseup', ()=> {
//         modal.style.cursor = 'default';
//         modal.removeEventListener('mousemove', onDrag);
//     })
// } else {
//     console.log(bio + " script failed");
//     console.error(bio);
//     bio?.addEventListener('click', ()=> {
//         console.error(bio);
//     })
// }

// scalable script
// var x , y , h , w ;

// function ts(e){
//     x = e.touches[0].clientX; //Cannot read property ‘0’ of undefined
//     y = e.touches[0].clientY;

//     h = bio.clientHeight;
//     w = bio.clientWidth;
// } 

// function tm(e){
//     mx = e.touches[0].clientX;
//     my = e.touches[0].clientY;
    
//     cx = mx - x ;
//     cy = my - y ;
    
//     bio.style.width = cx + w ;
//     bio.style.hight = cy + h ;
// }

export default Biography