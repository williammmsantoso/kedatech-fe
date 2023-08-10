import React from 'react';
import { Meta } from '../components/Meta';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PopupLogin } from '../components/PopupLogin';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { selectShowLoginForm, setShowLoginForm } from '../redux/slices/showLoginForm';

interface ClientInterface {
    message?: string;
    children: React.ReactNode;
    metaTitle: string;
    metaDescription: string;
}

const Client = ({ children, metaTitle, metaDescription} : ClientInterface) => {
    const isShow = useAppSelector(selectShowLoginForm);
    const dispatch = useAppDispatch()

    return <div>
        <Meta metaTitle={metaTitle} metaDescription={metaDescription} />
        <Header/>
        <div className="body">{children}</div>
        <Footer/>

        <PopupLogin isShow={isShow} onClose={() => dispatch(setShowLoginForm(false))}/>
    </div>
}

export default Client;