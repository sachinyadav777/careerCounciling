import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const Accordian = ({ question, answer, showIndex, setShowIndex, setnull }) => {
    return (
        <div
            className='border-b-[1px] border-border p-5 ease-in-out duration-500'>
            <div
                onClick={() => {
                    return (showIndex === false ? setShowIndex() : setnull())
                }}
                className='flex justify-between items-center cursor-pointer group'>
                <h2
                    className='text-xl heading group-hover:text-primary'>
                    {question}
                </h2>
                <div
                className='group-hover:text-primary'>
                    {
                        showIndex === true
                            ? <FontAwesomeIcon className='' icon={faMinus} />
                            : <FontAwesomeIcon icon={faPlus} />
                    }


                </div>
            </div>
            {/* {
                showIndex && <p
                    className='text my-4 ease-in-out duration-1000'>
                    {answer}
                </p>
            } */}

            <p
                className={`text ease-in-out duration-500 max-h-0 overflow-hidden ${showIndex && "max-h-96 my-4"}`}>
                {answer}
            </p>

        </div>
    )
}

export default Accordian