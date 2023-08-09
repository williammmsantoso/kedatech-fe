'use client';

import { content } from "@/constant/content";
import React, { useState } from "react";

export const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return <nav className="navigation">
        <div className="home-text-wrapper">
            {/* <div className="blue-bg"/>
            <div className="blue-bg second"/> */}
            <a href="/" className="home-name">
                Home
            </a>
        </div>
        <button
            className="hamburger"
            onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
            >
            <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
            </svg>
        </button>
        <div
            className={`navigation-menu ${isNavExpanded ? 'expanded' : ' '}`}>
            <ul>
                {
                    content.map((item: any) => {
                        return item.id >= 0 && <li key={item.name}>
                            <a className="routing" href={item.url}>{item.name}</a>
                        </li>
                    })
                }
                <li>
                    <button className="button-login">Login</button>
                </li>
            </ul>
        </div>
    </nav>
}