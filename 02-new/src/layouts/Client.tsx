import React, { useState } from 'react';
import { Meta } from '../components/Meta';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PopupLogin } from '../components/PopupLogin';

interface ClientInterface {
    message?: string;
    children: React.ReactNode;
    metaTitle: string;
    metaDescription: string;
}

const Client = ({ children, metaTitle, metaDescription} : ClientInterface) => {
    const [isShow, setIsShow] = useState(false);

    return <div>
        <Meta metaTitle={metaTitle} metaDescription={metaDescription} />
        <Header/>
        <div className="body">{children}</div>
        <Footer/>

        <PopupLogin isShow={true} onClose={() => setIsShow(!isShow)}/>
    </div>
}

export default Client;