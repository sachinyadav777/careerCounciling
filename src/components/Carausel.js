import React, { useEffect, useRef, useState } from 'react'
import Buttons from './Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Carausel = ({ items }) => {

    const [current, setCurrent] = useState(1);
    const [itemHeight, setItemHeight] = useState(0);
    const [oldValue, setOldValue] = useState(1);

    //for getting item offsetheight
    const itemRef = useRef(null);

    // autoplaying slider
    useEffect(() => {
        const interval = setInterval(() => {
            prev();
        }, 5000)

        return () => clearInterval(interval)
    }, [current, itemHeight])

    // item offset height set in itemheight usestate
    useEffect(() => {
        setItemHeight(() => itemRef.current.firstChild.offsetHeight)
    }, [])

    //for animating carausel text and button
    useEffect(() => {
        itemRef.current.childNodes[oldValue]?.firstChild?.firstChild.classList.remove("textAnimate")
        itemRef.current.childNodes[oldValue]?.firstChild?.lastChild.classList.remove("buttonAnimate")
        itemRef.current.childNodes[current]?.firstChild?.firstChild.classList.add("textAnimate")
        itemRef.current.childNodes[current]?.firstChild?.lastChild.classList.add("buttonAnimate")
        setOldValue(current)
    }, [current])


    //prev button logic
    const prev = () => {
        setCurrent((current) => current - 1)
        itemRef.current.style.transition = 'transform 300ms ease-in'
        itemRef.current.style.transform = `translateY(-${(current - 1) * itemHeight}px)`
    }

    //next button logic
    const next = () => {
        setCurrent((current) => current + 1)
        itemRef.current.style.transition = 'transform 300ms ease-in'
        itemRef.current.style.transform = `translateY(-${(current + 1) * itemHeight}px)`
    }

    // The transitionend event occurs when a CSS transition has completed.
    const handleTransitionEnd = () => {

        if (current >= items.length + 1) {
            setCurrent(1)
            itemRef.current.style.transition = 'none'
            itemRef.current.style.transform = `translateY(-${itemHeight}px)`
        }
        if (current <= 0) {
            setCurrent(items.length)
            itemRef.current.style.transition = 'none'
            itemRef.current.style.transform = `translateY(-${items.length * itemHeight}px)`
        }
    }

    // logic for clicking dots...
    const handleDotsClick = (index) => {
        setCurrent(index + 1)
        itemRef.current.style.transition = 'transform 300ms ease-in'
        itemRef.current.style.transform = `translateY(-${((index + 1) * itemHeight)}px)`
    }

    return (
        <div className=' h-screen overflow-hidden relative' >

            {/* slides */}
            <div
                className="ease-in duration-300"
                style={{ transform: `translateY(-${itemHeight}px)` }}
                ref={itemRef}
                onTransitionEnd={handleTransitionEnd}>

                {/* clone last slide and place it at the beginning */}
                <div className='relative'>
                    <div className='w-full text-center text-white absolute top-2/4 left-2/4 -translate-x-2/4'>
                        <div>
                            <p className='font-medium text-lg tracking-wider m-2' >{items[0].para}</p>
                            <h1 className='font-semibold text-4xl m-2 md:text-7xl md:p-2'>{items[0].heading1}</h1>
                            <h2 className='font-black text-4xl m-2 md:text-7xl md:p-2'>{items[0].heading2}</h2>
                        </div>
                        <div className='my-4 py-4 md:inline-flex'>
                            <div className='m-2 p-2 md:m-1 md:p-0'><Buttons text="Book Appointment" bgColor="primary" color="textWhite" afterBg="afterBgBlack" /></div>
                            <div className='m-2 p-2 md:m-1 md:p-0'><Buttons text="Discover More" bgColor="white" color="textBlack" afterBg="afterBgBlack" hoverText='hoverTextWhite' /></div>
                        </div>
                    </div>
                    <img className='w-full h-screen object-cover' src={items[2].imageURL} alt='slider' />
                </div>

                {/* original slide */}
                {
                    items.map((data, index) => {
                        return <div key={index} className='relative'>
                            <div className='w-full text-center text-white absolute top-2/4 -translate-y-2/4'>
                                <div>
                                    <p className='font-medium text-lg tracking-wider m-2' >{data.para}</p>
                                    <h1 className='font-semibold text-4xl m-2 md:text-7xl md:p-2'>{data.heading1}</h1>
                                    <h2 className='font-black text-4xl m-2 md:text-7xl md:p-2'>{data.heading2}</h2>
                                </div>
                                <div className='my-4 py-4 md:inline-flex'>
                                    <div className='m-2 p-2 md:m-1 md:p-0'><Buttons text="Book Appointment" bgColor="primary" color="textWhite" afterBg="afterBgBlack" /></div>
                                    <div className='m-2 p-2 md:m-1 md:p-0'><Buttons text="Discover More" bgColor="white" color="textBlack" afterBg="afterBgBlack" hoverText='hoverTextWhite' /></div>
                                </div>
                            </div>
                            <img className='w-full h-screen object-cover' src={data.imageURL} alt='slider' />
                        </div>
                    })
                }

                {/* clone first slide and place it at the end */}
                <div className='relative'>
                    <div className='w-full text-center text-white absolute top-2/4 left-2/4 -translate-x-2/4'>
                        <div>
                            <p className='font-medium text-lg tracking-wider m-2' >{items[0].para}</p>
                            <h1 className='font-semibold text-4xl m-2 md:text-7xl md:p-2'>{items[0].heading1}</h1>
                            <h2 className='font-black text-4xl m-2 md:text-7xl md:p-2'>{items[0].heading2}</h2>
                        </div>
                        <div className='my-4 py-4 md:inline-flex'>
                            <div className='m-2 p-2 md:m-1 md:p-0'><Buttons text="Book Appointment" bgColor="primary" color="textWhite" afterBg="afterBgBlack" /></div>
                            <div className='m-2 p-2 md:m-1 md:p-0'><Buttons text="Discover More" bgColor="white" color="textBlack" afterBg="afterBgBlack" hoverText='hoverTextWhite' /></div>
                        </div>
                    </div>
                    <img className='w-full h-screen object-cover' src={items[0].imageURL} alt='slider' />
                </div>

            </div>

            {/* next and prev button */}
            <div className='absolute text-black bottom-0 right-0'>
                <button className='bg-white opacity-50 hover:opacity-100 px-4 py-3 mx-2 text-lg' onClick={next}>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </button>
                <button className='bg-white opacity-50 hover:opacity-100 px-4 py-3 mx-2 text-lg' onClick={prev}>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
            </div>

            {/* dots */}
            <div className='absolute bottom-8 flex md'>
                {
                    items.map((_, index) => {
                        return <div
                            key={index}
                            onClick={() => handleDotsClick(index)}
                            className={`w-3 h-3 rounded-full bg-white m-1
                             ${index === (current - 1) ? 'opacity-100' : 'opacity-[0.5]'}`}>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Carausel