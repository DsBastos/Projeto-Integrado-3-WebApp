import React from 'react';

export default function InputChecke(props) {
    return (
        <div className="d-flex">
            <div className="form-check form-switch">

                <label className="form-check-label" htmlFor={props.id}>
                    <h5>{props.nome}</h5>
                </label>
                <input
                    className="form-check-input"
                    type="checkbox"
                    id={props.id}
                    value={props.id}
                    checked={props.checked}
                    name={props.nome}
                    onChange={(value) => 
                        props.onChange(value)
                    }
                />

            </div>
        </div>
    );
}