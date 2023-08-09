import { content } from "@/constant/content";
import React from "react";

export const Footer = () => {
    return <div className="footer-container">
        <div className="flex items-center justify-between text">
            {
                content.map((item: any) => {
                    return <h3 className="text-black cursor-pointer" key={item.name}>
                        <a href={item.url}>{item.name}</a>
                    </h3>
                })
            }
        </div>

        <div className="border-top" />

        <div className="copyrigth-wrapper text-center">
            Copyright © { new Date().getFullYear() } KeDA Tech. All Rights Reserved.
        </div>
    </div>
}