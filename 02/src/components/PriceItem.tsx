import React from "react";
import { Button } from "./Button";

interface PriceItemInterface {
    id: number,
    name: string;
    title: string;
    price: string;
    features: string[];
    className?: string;
}

export const PriceItem = ({ id, name, title, price, features, className } : PriceItemInterface) => {
    return <div key={name} className={`price-item ${className}`}>
        <div className="title-wrapper">
            <div className="flex items-end gap-2">
                <div className="price">{price}</div>
                <p>/ month</p>
            </div>
            <div className="billed-text">billed monthly</div>
        </div>
        
        <div className="name">{title}</div>
        <ol className="feature-list">
            {
                features.map((item: string, idx: number) => {
                    return <li key={idx}>{item}</li>
                })
            }
        </ol>

        <Button classNameWrapper="grid">Sign In</Button>
    </div>
}