import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react/cjs/react.development';
import './style.scss'
SlideShow.propTypes = {
    slideShow: PropTypes.any,
};

function SlideShow(props) {
    const {slideShow} = props;
    const refWidth = useRef();
    let widthSlide;
    let quantityElement;

    useEffect(() => {
        widthSlide = refWidth.current.offsetWidth;
        quantityElement =refWidth.current.querySelectorAll('.slider__show-item');  
    })

    function renderSlider(slideShow){
        return slideShow.map(slider => ( 
             <div className="slider__show-item" style={{background: `${slider.colorSlide}`,color: `${slider.colorText}`}}>
             <div className="slider__show__left">
                     <div className="slider__show__left-about" >
                         <h2 className="slider__show__left-heading">
                             {slider.heading}
                         </h2>
 
                         <p className="slider__show__left-desc">
                             {slider.desc}
                         </p>
 
                         <div className="slider__show__left-btn">
                             <a  href="">{slider.titleBtn}</a>
                         </div>
                     </div>
             </div>
             <div className="slider__show__right">
                 <a href="" >
                     <img className="slider__show__right-img" src={slider.image} alt="" />
                 </a>
             </div>
         </div>
     ))
     }
    
    function handleMoveSlideLeft(){
        let maxWidth =  (quantityElement.length - 1) * widthSlide;
        let widthChange = 0;
        if(widthChange < maxWidth){

        }
        console.log(maxWidth);      
    }


    return (
        <div className="Home__slider__show">
               <div className="slider__show">
                   <div className="slider__show-move">
                        <button className="slider__show-move-btn-left" onClick={handleMoveSlideLeft}><i class="fas fa-chevron-left"></i></button>
                        <div ref={refWidth} className="slider__show-move-box">
                            {renderSlider(slideShow)}
                        </div>
                        <button className="slider__show-move-btn-right"><i class="fas fa-chevron-right"></i></button>
                        <ul className="slider__show-move-btn-key">
                            <li><button>1</button></li>
                            <li><button>2</button></li>
                            <li><button>3</button></li>
                        </ul>
                   </div>
               </div>
           </div>
    );
}

export default SlideShow;