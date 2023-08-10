'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Meta } from '@/components/Meta';
import { PopupLogin } from '@/components/PopupLogin';
import React, { useEffect, useState } from 'react';

interface ClientInterface {
    message: string;
    children: React.ReactNode;
    metaTitle: string;
    metaDescription: string;
}

const Client = ({ message, children, metaTitle, metaDescription} : ClientInterface) => {
    const [isShow, setIsShow] = useState(false);

    return <div>
        <Meta metaTitle={metaTitle} metaDescription={metaDescription} />
        <Header/>
        <div className="body">{children}</div>
        <Footer/>

        <PopupLogin isShow={true} onClose={() => setIsShow(!isShow)}/>
        <button onClick={() => setIsShow(true)}>show</button>
    </div>
}

export default Client;