import React, { useState, useEffect, useRef } from 'react'
import {SliderImages, DetailsImages} from "../../images"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "./slider.css"


export let cartItems = []





function Slider() {

    const [toggle, setToggle] = useState(false)

    const [filteredImages, setFilteredImages] = useState([])

    useEffect(() => {
        const filtered = DetailsImages.filter(item => item.id === 2);
        setFilteredImages(prevFilteredImages => {
            if (!arraysAreEqual(prevFilteredImages, filtered)) {
                return filtered;
            }
            return prevFilteredImages;
        });
    }, [DetailsImages]);

    const arraysAreEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    };

    const [slideNumber, setSlideNumber] = useState(0)

    const containerRef = useRef()
    const handleClick = (direction) => {
        let distance = containerRef.current.getBoundingClientRect().x - 22
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            containerRef.current.style.transform = `translateX(${180 + distance}px)`
        }
        if (direction === "right" && slideNumber < 0) {
            setSlideNumber(slideNumber + 1)
            containerRef.current.style.transform = `translateX(${-180 + distance}px)`
        }
    }

    const handleButtonClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div>
            <div className='slider'>
                <div className={`${toggle ? `popup` : `popup hide`}`}>
                <div className='close' onClick={() => setToggle(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquam perspiciatis voluptas ipsum tempore eveniet doloremque iste, aperiam optio numquam.
                </div>
                <div className="left icon" onClick={() => handleClick("left")}>{"<"}</div>
                <div className="container" ref={containerRef}>
                    {
                        SliderImages.map(item => {
                            return (
                                <div className="card" key={item.id} onClick={() => setToggle(true)}>
                                    <div className='card-header'>
                                        <img className='image' src={item.src} alt="" /> 
                                    </div>
                                    <div className='card-body'>
                                        <h4 className="title">{item.title}</h4>
                                        <p className="desc">{item.desc}</p>
                                        <div className="card-footer">
                                            <span className="price">{item.price}</span>
                                            <button onClick={handleButtonClick}>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="right icon" onClick={() => handleClick("right")}>{">"}</div>
            </div>
            <div className="details">
                {
                    filteredImages.map(item => {
                        return (
                            <img className='img' src={item.src} key={item.key} />
                        )
                    })
                }
            </div>
        </div>
  )
}

export default Slider