import React from "react";
import Title from "../Title";
import { motion } from "framer-motion";

export const About = () => {
    return <motion.div
        id="about"
        className="about-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
    >
        <Title title='About' color='white' />
        <div className="flex items-center justify-between gap-6">
            <img className='img' src="/about.jpeg" alt="about" />

            <div className="text-wrapper text-white">
                <div className="subtitle">
                    Creating a company ERP (Enterprise Resource Planning) system involves integrating various business processes and functions into a centralized software solution. The ERP system helps organizations manage and streamline their operations, improve efficiency, and enhance decision-making by providing a unified platform for managing data and processes across different departments.
                </div>
            </div>
        </div>
    </motion.div>
}