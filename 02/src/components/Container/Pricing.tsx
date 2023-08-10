"use client"

import React, { useState } from "react";
import Title from "../Title";
import { PriceItem } from "../PriceItem";
import { motion } from "framer-motion";

export const Pricing = () => {
    const priceList = [
        {
            id: 0,
            name: 'basic',
            title: 'Basic',
            price: 'Rp 150.000',
            features: [
                'Record incoming goods',
                'Check out goods',
                'Record profits'
            ]
        },
        {
            id: 1,
            name: 'business',
            title: 'Business',
            price: 'Rp 400.000',
            features: [
                'Record incoming and outgoing goods',
                'Record Profits',
                'Analyze sales results with CHART',
                'Support 7x24 Hours'
            ]
        },
        {
            id: 2,
            name: 'entrepreneur',
            title: 'Entrepreneur',
            price: 'Rp 500.000',
            features: [
                'Record incoming and outgoing goods',
                'Record Profits',
                'Analyze sales results with CHART',
                'Support 7x24 Hours',
                'Exporting analytics',
                'AI earning prediction'
            ]
        },
    ];

    return <motion.div
        id="pricing"
        className="pricing-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
    >
        <Title title='Pricing'/>
        <h2 className="subtitle">Explore Our Comprehensive ERP Price List</h2>

        <div className="pricing-list flex items-center justify-between">
            {
                priceList.map((item: any) => {
                    return <PriceItem key={item.id} className={item.id === 1 ? 'popular' : ''} {...item} />
                })
            }
        </div>
    </motion.div>
}