'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Meta } from '@/components/Meta';
import React, { useEffect } from 'react';

interface ClientInterface {
    message: string;
    children: React.ReactNode;
    metaTitle: string;
    metaDescription: string;
}

const Client = ({ message, children, metaTitle, metaDescription} : ClientInterface) => {
    return <div>
        <Meta metaTitle={metaTitle} metaDescription={metaDescription} />
        <Header/>
        <div className="body">{children}</div>
        <Footer/>
    </div>
}

export default Client;