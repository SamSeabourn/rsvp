import React from 'react'

interface Props  {
    placeholder: string;
    type: string;
}

export const StyledInput = ({ placeholder, type }: Props): JSX.Element => {
    return (
        <div>
            <input maxLength={50} placeholder={placeholder} type={type} alt={placeholder}/>
        </div>
    )
}

export default StyledInput;
