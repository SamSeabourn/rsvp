import React from 'react'

interface Props  {
    placeholder: string;
    type: string;
    inputStyles?: string
}

export const StyledInput = ({ placeholder, type, inputStyles }: Props): JSX.Element => {
    return (
        <div>
            <input className={inputStyles} maxLength={50} placeholder={placeholder} type={type} alt={placeholder}/>
        </div>
    )
}

export default StyledInput;
