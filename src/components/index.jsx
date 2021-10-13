import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Style/Base.scss';
import './Style/Variable.scss';
import Body from './Body';


F8.propTypes ={
    
}

const notifications = [
    {
        id:1,
        name:'congminh nguyen',
        image:"https://fullstack.edu.vn/assets/images/f8_avatar.png",
        firstWord:' Chào mừng',
        message:'đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới cùng bạn nhé ❤️',
        time:8
    },
    {
        id:2,
        name:'congminh nguyen',
        image:'https://fullstack.edu.vn/assets/images/f8_avatar.png',
        firstWord:'Chào mừng',
        message:'đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới cùng bạn nhé ❤️',
        time:8
    }


]


function F8(props) {

    const [ListNotifications,setListNotifications] =useState(notifications);
  

    return (
        <>
            <Header notifications={ListNotifications} />
            <Body/>
            <Footer/>
        </>
    );
}

export default F8;