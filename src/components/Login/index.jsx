import React, { useEffect, useState } from 'react';
import './Style.scss';
import imgIcon from '../assets/img/header/f8_icon.png'
import imgBR from '../assets/img/f8_bg_auth_1366.png';




function Login(props) {
    return (
        <>
            <div className="login">

                <div className="login__background"  style={{backgroundImage:`url(${imgBR})`}}>
                    <div className="login__layout">
                        <div className="login__form">
                            <div className="login__form-icon">
                                <img src={imgIcon} alt="" />
                            </div>

                            <div className="login__form-heading">
                                <h1>Đăng nhập vào F8</h1>
                            </div>
                            
                            <div className="login__form__body">
                                <div className="login__form__body-main-step">
                                    <div className="login__form__body-btn">
                                        <img className="login__form__body-btn-img" src="https://fullstack.edu.vn/assets/images/signin/personal-18px.svg" alt="" />
                                        <span className="login__form__body-btn-text">Sử dụng email / số điện thoại</span>
                                    </div>

                                    <div className="login__form__body-btn">
                                        <img className="login__form__body-btn-img" src="https://fullstack.edu.vn/assets/images/signin/google-18px.svg" alt="" />
                                        <span className="login__form__body-btn-text" >Tiếp tục với Google</span>
                                    </div>

                                    <div className="login__form__body-btn">
                                        <img className="login__form__body-btn-img" src="https://fullstack.edu.vn/assets/images/signin/facebook-18px.svg" alt="" />
                                        <span className="login__form__body-btn-text" >Tiếp tục với Facebook</span>
                                    </div>

                                    <div className="login__form__body-btn">
                                        <img className="login__form__body-btn-img" src="https://fullstack.edu.vn/assets/images/signin/github-18px.svg" alt="" />
                                        <span className="login__form__body-btn-text">Tiếp tục với Github</span>
                                    </div>
                                </div>
                            </div>

                            <p className="login__question">
                                Bạn chưa có tài khoản? 
                                <a href="">Đăng ký</a>
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        </>
    );
}

export default Login;