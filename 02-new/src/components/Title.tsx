import React from "react";

interface TitleInterface {
    title: string;
    color?: string;
}

const Title = ({ title, color }: TitleInterface) => {
    return <div className="title-wrapper">
        <h2 className="title" style={{ color: color ? color : 'black' }}>{title}</h2>
    </div>
}

export default Title;