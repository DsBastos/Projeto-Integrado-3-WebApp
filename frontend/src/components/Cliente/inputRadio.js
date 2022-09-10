import React from 'react';

export default function InputRadio(props) {
    return (
        <div className="form-check me-3 fs-5">
            <input
                className="form-check-input"
                type="radio"
                name={props.name}
                value={props.value}
                checked={props.checked}
                // checked={props.checked}
                id={props.id}
                onChange={(value) => {
                        props.onChange(value)
                        // console.log(value.target.checked)
                    }
                }
            />
            <label className="form-check-label" htmlFor={props.id}>
                {props.number}
            </label>
        </div>
    );
}