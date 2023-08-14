bio.addEventListener('mousedown', mousedown)

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

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(bio);
    let leftValue = parseInt(getStyle.left);
    let topValue = parseInt(getStyle.top);

    bio.style.left = `${leftValue + movementX}px`;
    bio.style.top =  `${topValue + movementY}px`;
} 

if (bio){
    bio?.addEventListener('mousedown', ()=> { //Cannot read property ‘addEventListener’ of null
        modal.style.cursor = 'all-scroll';
        modal.addEventListener('mousemove', onDrag); 
    })
    document.addEventListener('mouseup', ()=> {
        modal.style.cursor = 'default';
        modal.removeEventListener('mousemove', onDrag);
    })
} else {
    console.log(bio + " script failed");
    console.error(bio);
    bio?.addEventListener('click', ()=> {
        console.error(bio);
    })
}
