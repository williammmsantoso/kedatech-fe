
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Button } from "./Button";
import { loginValidator } from "../helpers/validators";
import { toast } from "react-toastify";
import { useAppDispatch } from "../redux/hook";
import { setAuthStatus } from "../redux/slices/auth";
import { setShowLoginForm } from "../redux/slices/showLoginForm";

export const PopupLogin = ({ isShow, onClose }) => {
    const initialValues = { email: '', password: '' };
    const dispatch = useAppDispatch();

    useEffect(() => {
      window.addEventListener('keydown', e => {
        if(e.key === 'Escape'){
          onClose();
        }
      })
    })

    const onHandleSubmit = async (values: any) => {
        console.log('values', values);

        if (values.email === 'william@kedatech.com' && values.password === '12345678') {
            toast.success('Login Succeeded! Welcome back!', {
                toastId: '15',
            });

            dispatch(setAuthStatus(true));
            dispatch(setShowLoginForm(false));
        } else {
            toast.error('Email or password is wrong, please try again', {
                toastId: '14',
            });
        }
    }

    return <div className={`popup-login-wrapper ${isShow ? 'show' : 'hide'}`}>
        <div className="backdrop" onClick={() => onClose()}>&nbsp;</div>
        <div className="modal">
          <div className="modal-content">
            <div className="button-close" onClick={() => onClose()}>
              X
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={loginValidator}
                onSubmit={(values, actions) => {
                    onHandleSubmit(values);
                    actions.setSubmitting(false);
                }}
            >
                {({
                    values,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    errors,
                }) => {
                    return <>
                        <Form autoComplete="off">
                            <div className="input-wrapper">
                                <div className="label">Email</div>
                                <input
                                    id='email'
                                    className={`${errors && errors.email && 'error-input'}`}
                                    data-testid='email'
                                    name='email'
                                    placeholder="john.doe@gmail.com"
                                    type="email"
                                    onChange={(e: any) => setFieldValue('email', e.target.value)}
                                />
                                {
                                    errors && errors.email && <div className='error-field'>{errors.email}</div>
                                }
                            </div>
                            <div className="input-wrapper">
                                <div className="label">Password</div>
                                <input
                                    id='password'
                                    className={`${errors && errors.email && 'error-input'}`}
                                    data-testid='password'
                                    name='password'
                                    type="password"
                                    onChange={(e: any) => setFieldValue('password', e.target.value)}
                                />
                                {
                                    errors && errors.password && <div className='error-field'>{errors.password}</div>
                                }
                            </div>
                            <Button
                                data-testid='button-submit-search'
                                id='button-submit-search'
                                classNameWrapper="grid"
                                type="submit"
                                disabled={
                                    isSubmitting ||
                                    Object.keys(errors).length > 0 ||
                                    Object.keys(values).length < 1
                                }
                            >
                                Login   
                            </Button>
                        </Form>
                    </>
                }}
            </Formik>
          </div>
        </div>
    </div>
}