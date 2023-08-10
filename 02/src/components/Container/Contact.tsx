"use client"

import React from "react";
import { Button } from "../Button";
import { motion } from "framer-motion";

export const Contact = () => {
    return <motion.div
        id="contact"
        className="contact-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
    >
        <div className="flex items-center justify-center">
            <div className="text-center">
                <div className="title">
                    Ready to Transform Your Business with Our Cutting-edge ERP Solutions?
                </div>
                <div className="subtitle">
                    Our dedicated team is here to answer your questions, understand your unique needs, and guide you toward the perfect ERP solution for your organization. Let's take your business to the next level together!"
                </div>
            </div>
        </div>
        <Button classNameWrapper="mt-5" className="text-black bg-white">Contact Us</Button>
    </motion.div>
}