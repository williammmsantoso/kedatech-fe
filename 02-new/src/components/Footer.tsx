import React from "react";
import { content } from "../constant/content";

export const Footer = () => {
    return <div className="footer-container default-container-wrapper">
        <div className="flex items-center justify-between text">
            {
                content.map((item: any) => {
                    return <h3 className="text-black cursor-pointer text-center" key={item.name}>
                        <a className="url" href={item.url}>{item.name}</a>
                        <div className="sub-url">lorem</div>
                        <div className="sub-url">lorem</div>
                        <div className="sub-url">lorem</div>
                        <div className="sub-url">lorem</div>
                        <div className="sub-url">lorem</div>
                        <div className="sub-url">lorem</div>
                    </h3>
                })
            }
        </div>

        <div className="border-top" />

        <div className="copyright-wrapper text-center">
            Copyright © { new Date().getFullYear() } KeDA Tech. All Rights Reserved.
        </div>
    </div>
}