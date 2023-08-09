import React from "react";
import Title from "../Title";

export const About = () => {
    return <div className="about-home" id="about">
        <Title title='About' color='white' />
        <div className="flex items-center justify-between gap-6">
            <img className='img' src="/about.jpeg" alt="about" />

            <div className="text-wrapper text-white">
                <div className="text">
                    Creating a company ERP (Enterprise Resource Planning) system involves integrating various business processes and functions into a centralized software solution. The ERP system helps organizations manage and streamline their operations, improve efficiency, and enhance decision-making by providing a unified platform for managing data and processes across different departments.
                </div>
            </div>
        </div>
    </div>
}