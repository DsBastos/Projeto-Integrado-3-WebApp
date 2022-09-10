import React from 'react';

export default function InputDashboard(props) {
    return (
        <div className="row mb-3 mt-3 justify-content-center" key={props.index}>
            <label
                className="col-sm-5 col-form-label"
                htmlFor={props.id}
            >
                {props.descricao}
            </label>
            <div className="col-sm-4">
                <input
                    type="text"
                    className="form-control"
                    id={props.id}
                    defaultValue={props.valor}
                    onChange={value => props.onChange(value)}
                />
            </div>
        </div>
    );
}