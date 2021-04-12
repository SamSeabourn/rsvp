import React from 'react'

interface Props  {
    placeholder: string;
    type: string;
    formId?: string;
}

export const StyledInput = ({ placeholder, type, formId }: Props): JSX.Element => {
    return (
        <div>
            <input id={formId} name={formId} maxLength={50} placeholder={placeholder} type={type} alt={placeholder}/>
        </div>
    )
}

export default StyledInput;
