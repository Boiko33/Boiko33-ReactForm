import React from "react";
import style from "./SimpleForm.module.css";

const TextField = ({ name, onChange, onBlur, error, label }) => {
    return (
        <div className={style.secondDiv}>
            <label>
                {label}
                <input
                    className={style.input}
                    type="text"
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur} />
                {error &&
                    <div className={style.errorText}>
                        {error}
                    </div>}
            </label>
        </div>
    );
}

export default TextField;