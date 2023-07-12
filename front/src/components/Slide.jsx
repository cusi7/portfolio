import React, {useRef} from "react";
import '../styles/slide.css';

export default function Slide(props){

    const widthSlides = props.img.length * 100;

    const slider = useRef(null);
    const slide = useRef(null);
    const ancho = useRef(null);

    
    const theSlides=[]; 
    if(slider.current){
        for(let i=0; i<slider.current.children.length; i++){
            theSlides.push(slider.current.children[i]);
        }

    }

    let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID,
    currentIndex = 0,
    move = 0;

theSlides.forEach((slide, index) => {
const slideImage = slide.querySelector('img');

slideImage.addEventListener('dragstart', (e) => e.preventDefault());

slide.addEventListener('mousedown', pointerDown(index));
slide.addEventListener('mouseup', pointerUp);
slide.addEventListener('mouseleave', pointerUp);
slide.addEventListener('mousemove', pointerMove);

slide.addEventListener('touchstart', pointerDown(index));
slide.addEventListener('touchend', pointerUp);
slide.addEventListener('touchleave', pointerUp);
slide.addEventListener('touchmove', pointerMove);
})

// make responsive to viewport changes
window.addEventListener('resize', setPositionByIndex);

// prevent menu popup on long press
window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}


function setPositionByIndex() {
    if(ancho.current){
        currentTranslate = currentIndex * -ancho.current.clientWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    }   
}

function pointerDown(index) {
    return function (event) {
      currentIndex = index;
      startPos = getPositionX(event);
      isDragging = true;
      animationID = requestAnimationFrame(animation);
      slider.current.classList.add('grabbing');

    }
}

function getPositionX(event){
    return event.type.includes('mouse')? event.clientX : event.touches[0].clientX;
}

function pointerUp() {
    cancelAnimationFrame(animationID);
    isDragging = false;
    
    const movedBy = currentTranslate - prevTranslate;
    
    if (movedBy < -100 && currentIndex < theSlides.length - 1) currentIndex += 1;
    
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
    
    setPositionByIndex();
    
    slider.current.classList.remove('grabbing');
    
    }

function pointerMove(event) {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      currentTranslate = prevTranslate + currentPosition - startPos;
    }

}

function animation() {
setSliderPosition()
if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
slider.current.style.transform = `translateX(${currentTranslate}px)`;
}

    return (
        <>
        <div className="slider" ref={ancho}>
            <div className="slides" style={{
                width: widthSlides + '%'
                }} ref={slider}>
                
                {props.img.map((image)=>{
                        return(
                            <div className="slide" style={{
                                width: 100 / props.img.length + '%'
                                }} ref={slide}>
                                <img src={image} alt="imgProyect"/>
                            </div>
                        )    
                })}
            </div>
         </div>
        </>
    )
}