import React, { useState } from "react";
import { content } from "../constant/content";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setShowLoginForm } from "../redux/slices/showLoginForm";
import { selectAuthStatus, setAuthStatus } from "../redux/slices/auth";

export const Header = () => {
    const authStatus = useAppSelector(selectAuthStatus);
    const dispatch = useAppDispatch();
    
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return <nav className="navigation">
        <div className="home-text-wrapper">
            {/* <div className="blue-bg"/>
            <div className="blue-bg second"/> */}
            <a href="/" className="home-name flex items-center justify-between gap-2">
                <img className="logo" src="/logo.svg" alt="logo" /><span>Home</span>
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
                    {
                        authStatus
                            ? <button
                                className="button-login"
                                onClick={() => {
                                    dispatch(setShowLoginForm(false))
                                    dispatch(setAuthStatus(false))
                                }}
                            >
                                Logout
                            </button>
                            : <button
                                className="button-login"
                                onClick={() => dispatch(setShowLoginForm(true))}
                            >
                                Login
                            </button>
                    }
                </li>
            </ul>
        </div>
    </nav>
}