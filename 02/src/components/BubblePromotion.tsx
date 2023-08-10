import React from "react";

interface BubblePromotionInterface {
    title: string;
    subtitle?: string;
}

export const BubblePromotion = ({ title, subtitle }: BubblePromotionInterface) => {
    return <div className="bubble-promotion-wrapper">
        <div className="bubble-title">{title}</div>
        {subtitle && <div className="bubble-subtitle">{subtitle}</div>}
    </div>
}