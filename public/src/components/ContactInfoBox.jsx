import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function ContactInfoBox({ icon, header, info}) {
    return (
        <>
            <div className="w-full flex gap-5">
                <div className="text-white border-2 border-slate-300 px-4 py-2 text-3xl rounded-md vsm:text-lg md:text-xl">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="text-white flex flex-col justify-around">
                    <h4 className='font-medium text-lg vsm:text-md'>
                        {header}
                    </h4>
                    <p className='text-gray-200 vsm:text-sm'>
                        {info}
                    </p>
                </div>
            </div>
        </>
    )
}
