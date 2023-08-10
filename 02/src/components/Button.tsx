import React from "react";

interface ButtonPropsInterface {
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    formaction?: string;
    formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
    formmethod?: 'get' | 'post';
    formnovalidate?: string;
    formtarget?: '_blank' | '_self' | '_parent' | '_top';
    name?: string;
    type?: 'button' | 'reset' | 'submit';
    value?: string;
}

interface ButtonInterface {
    children: any;
    classNameWrapper?: string;
    className?: string;
    props?: ButtonPropsInterface;
}

export const Button = ({ props, className, classNameWrapper, children }: ButtonInterface) => {
    return <div className={`button-wrapper ${classNameWrapper}`}>
        <button
            className={`inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 ${className}`}
            {...props}
        >
            {children}
        </button>
    </div>
}