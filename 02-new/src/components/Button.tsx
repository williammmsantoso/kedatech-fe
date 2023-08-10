import React from "react";

interface ButtonInterface {
    children: any;
    classNameWrapper?: string;
    className?: string;

    id?: string;
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    formaction?: string;
    formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
    formmethod?: 'get' | 'post';
    formnovalidate?: boolean;
    formtarget?: '_blank' | '_self' | '_parent' | '_top';
    name?: string;
    type?: 'button' | 'reset' | 'submit';
    value?: string;
    onClick?: any;
    styles?: any;
}

export const Button = ({
    className,
    classNameWrapper,
    children,
    id,
    autofocus,
    disabled,
    form,
    formaction,
    formenctype,
    formmethod,
    formnovalidate,
    formtarget,
    name,
    type,
    value,
    onClick,
    styles,
}: ButtonInterface) => {
    return <div className={`button-wrapper ${classNameWrapper}`}>
        <button
            className={`inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 ${className} ${disabled ? 'disabled' : ''}`}
            id={id}
            autoFocus={autofocus}
            disabled={disabled}
            form={form}
            formAction={formaction}
            formEncType={formenctype}
            formMethod={formmethod}
            formNoValidate={formnovalidate}
            formTarget={formtarget}
            name={name}
            type={type}
            value={value}
            onClick={onClick}
            style={{ ...styles }}
        >
            {children}
        </button>
    </div>
}