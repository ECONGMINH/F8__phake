import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './Style.scss';
import Sidebar from '../Sidebar';
import Courses from '../containers/Courses';
import Question from '../containers/Question';
import Blog from '../containers/Blog';
import Code from '../containers/Code';
import Home from '../containers/Home';
import config from '../../config';

const courses = [
{
    id:1,
    name:'HTML, CSS từ Zero đến Hero',
    image:'https://cdn.fullstack.edu.vn/f8-learning/courses/2.png',
    quantityStudents:51.738,
    link:''

},
{
    id:2,
    name:'Javascript Cơ Bản',
    image:'https://cdn.fullstack.edu.vn/f8-learning/courses/1.png',
    quantityStudents:34.211,
    link:''
},
{
    id:3,
    name:'Kiến Thức Nhập Môn',
    image:'https://cdn.fullstack.edu.vn/f8-learning/courses/7.png',
    quantityStudents:31.627,
    link:''
},
{
    id:4,
    name:'Responsive Với Grid System',
    image:'https://cdn.fullstack.edu.vn/f8-learning/courses/3.png',
    quantityStudents:12.690,
    link:''
},
{
    id:5,
    name:'Node & ExpressJS',
    image:'https://cdn.fullstack.edu.vn/f8-learning/courses/6.png',
    quantityStudents:10.539,
    link:''
},
{
    id:6,
    name:'HTML, CSS Tips & Tricks',
    image:'https://cdn.fullstack.edu.vn/f8-learning/courses/5.png',
    quantityStudents:7.921,
    link:''
},
{
    id:7,
    name:'Javascript Nâng Cao',
    image:'https://cdn.fullstack.edu.vn/f8-learning/courses/12.png',
    quantityStudents:6.340,
    link:''
},
{
    id:8,
    name:'ReactJS',
    image:'https://cdn.fullstack.edu.vn/f8-learning/courses/13/13.png',
    quantityStudents:3.521,
    link:''
},
{
    id:9,
    name:"Don't Touch Your Face",
    image:'https://cdn.fullstack.edu.vn/f8-learning/courses/4/4.jpeg',
    quantityStudents:3.135,
    link:''
}
];

const questions = [
    {
        id:1,
        userName:'Nguyen Cong Minh',
        question:'Ai thấy giao diện mới của web anh Sơn hiện đại tối giản dơ tay nào?! 😁',
        types:['chat','qna','sharing'],
        desc:'Ai thấy giao diện mới của web anh Sơn vừa hiện đại vừa tối giản dơ tay...',
        Categories:'Front-end / Mobile Apps',
        link:'',
        save:false,
        Period:19,
        avatar:'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/168127793_1168117993610683_7418780235057144305_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XpFDtORvm2MAX-O7vvU&_nc_ht=scontent.fhan5-4.fna&oh=c0fb39d84d5ff69ba7b991c7df3d5da9&oe=61778FFA',
        answers:119,
        avatarUser_answer:[
            'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/86773328_1743183429152459_8575588722626527232_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kKIIjYDuo7MAX-HlqVc&_nc_ht=scontent.fhan5-7.fna&oh=62e640e9d37282d0e068b96897be4092&oe=6178B7A9',
            'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-9/138551731_230407108640211_4221077970903338465_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XiYmKv8pHDgAX8TeKQ3&_nc_ht=scontent.fhan5-2.fna&oh=0916072cbf6e27960a0898f3a71e3147&oe=61757CCD',
        ],

    },
    {
        id:2,
        userName:'Son Dang',
        question:'Mọi người có muốn mình quay khóa PHP không nào 😁',
        types:['Backend','PHP','Chat'],
        Categories:'Front-end / Mobile Apps',
        desc:'Mọi người có muốn mình quay khóa PHP không nào.....',
        link:'',
        save:false,
        Period:19,
        avatar:'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/86773328_1743183429152459_8575588722626527232_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kKIIjYDuo7MAX-HlqVc&_nc_ht=scontent.fhan5-7.fna&oh=62e640e9d37282d0e068b96897be4092&oe=6178B7A9',
        answers:119,
        avatarUser_answer:[
            'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-9/138551731_230407108640211_4221077970903338465_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XiYmKv8pHDgAX8TeKQ3&_nc_ht=scontent.fhan5-2.fna&oh=0916072cbf6e27960a0898f3a71e3147&oe=61757CCD',
            'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/168127793_1168117993610683_7418780235057144305_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XpFDtORvm2MAX-O7vvU&_nc_ht=scontent.fhan5-4.fna&oh=c0fb39d84d5ff69ba7b991c7df3d5da9&oe=61778FFA',
        ],

    },
    {
        id:3,
        userName:'Easy Frontend',
        question:'Làm thế nào Hack nào Ajax trong  15p ?😁',
        types:['chat','qna','sharing'],
        Categories:'Front-end / Mobile Apps / Ajax',
        desc:'Làm thế nào Hack nào Ajax trong  15p....',
        link:'',
        save:false,
        Period:19,
        avatar:'https://yt3.ggpht.com/ytc/AKedOLS0_8Eb99PwVL_DhysKXBT5zKiqbIhC5x2DnaaJmWQ=s48-c-k-c0x00ffffff-no-rj',
        answers:119,
        avatarUser_answer:[
            'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/86773328_1743183429152459_8575588722626527232_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kKIIjYDuo7MAX-HlqVc&_nc_ht=scontent.fhan5-7.fna&oh=62e640e9d37282d0e068b96897be4092&oe=6178B7A9',
        ],

    },

    {
        id:4,
        userName:'Khoa Pug',
        question:'Làm thế nào có thể mua nhà ở tuổi 30 ở HCM or HN😁',
        types:['chat'],
        Categories:'Front-end / Backend ',
        desc:'Làm thế nào có thể mua nhà ở tuổi 30 ở HCM or HN...',
        link:'',
        save:false,     
        Period:19,
        avatar:'https://www.takadada.com/wp-content/uploads/2019/04/6-5.jpg',
        answers:400,
        avatarUser_answer:[
            'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.6435-9/168127793_1168117993610683_7418780235057144305_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XpFDtORvm2MAX-O7vvU&_nc_ht=scontent.fhan5-4.fna&oh=c0fb39d84d5ff69ba7b991c7df3d5da9&oe=61778FFA',
            'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/86773328_1743183429152459_8575588722626527232_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kKIIjYDuo7MAX-HlqVc&_nc_ht=scontent.fhan5-7.fna&oh=62e640e9d37282d0e068b96897be4092&oe=6178B7A9',
            'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-9/138551731_230407108640211_4221077970903338465_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XiYmKv8pHDgAX8TeKQ3&_nc_ht=scontent.fhan5-2.fna&oh=0916072cbf6e27960a0898f3a71e3147&oe=61757CCD',
            'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/205588170_1673303866392050_6126103826734941826_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qeQ2APFtaZIAX9brjJc&tn=rd6k68cBSyJ5Cn_z&_nc_ht=scontent.fhan5-3.fna&oh=524eddd55067724536a57d03b08cf43d&oe=617A12EE'
        ],

    },

     {
        id:5,
        userName:'Phong Pi ',
        question:'Làm thế nào để cài đặt visualStudio Code',
        types:['chat','qna','sharing'],
        Categories:'Front-end / Mobile Apps /',
        desc:'Làm thế nào để cài đât visualStudio Code....',
        link:'',
        save:false,
        
        Period:19,
        avatar:'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/205588170_1673303866392050_6126103826734941826_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qeQ2APFtaZIAX9brjJc&tn=rd6k68cBSyJ5Cn_z&_nc_ht=scontent.fhan5-3.fna&oh=524eddd55067724536a57d03b08cf43d&oe=617A12EE',
        answers:37,
        avatarUser_answer:[
            'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/86773328_1743183429152459_8575588722626527232_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kKIIjYDuo7MAX-HlqVc&_nc_ht=scontent.fhan5-7.fna&oh=62e640e9d37282d0e068b96897be4092&oe=6178B7A9',
        ],

    },

    {
        id:6,
        userName:'Easy Frontend',
        question:'Làm thế nào để setup Routing cho một dự án React js',
        types:['chat','qna','sharing'],
        Categories:'Front-end / Mobile Apps / Ajax',
        desc:'Làm thế nào Hack nào Ajax trong  15p....',
        link:'',
        save:false,
        
        Period:19,
        avatar:'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/205588170_1673303866392050_6126103826734941826_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qeQ2APFtaZIAX9brjJc&tn=rd6k68cBSyJ5Cn_z&_nc_ht=scontent.fhan5-3.fna&oh=524eddd55067724536a57d03b08cf43d&oe=617A12EE',
        answers:0 ,
        avatarUser_answer:[],

    },
    {
        id:7,
        userName:'Easy Frontend',
        question:'Làm thế nào Hack nào Ajax trong  15p ?😁',
        types:['chat','qna','sharing'],
        Categories:'Front-end / Mobile Apps / Ajax',
        desc:'Làm thế nào Hack nào Ajax trong  15p....',
        link:'',
        save:false,
        
        Period:19,
        avatar:'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/205588170_1673303866392050_6126103826734941826_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qeQ2APFtaZIAX9brjJc&tn=rd6k68cBSyJ5Cn_z&_nc_ht=scontent.fhan5-3.fna&oh=524eddd55067724536a57d03b08cf43d&oe=617A12EE',
        answers:0 ,
        avatarUser_answer:[
        ],

    },
    {
        id:8,
        userName:'Easy Frontend',
        question:'Làm thế nào Hack nào Ajax trong  15p ?😁',
        types:['chat','qna','sharing'],
        Categories:'Front-end / Mobile Apps / Ajax',
        desc:'Làm thế nào Hack nào Ajax trong  15p....',
        link:'',
        save:false,
        Period:19,
        avatar:'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/205588170_1673303866392050_6126103826734941826_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qeQ2APFtaZIAX9brjJc&tn=rd6k68cBSyJ5Cn_z&_nc_ht=scontent.fhan5-3.fna&oh=524eddd55067724536a57d03b08cf43d&oe=617A12EE',
        answers:0 ,
        avatarUser_answer:[],

    },
    {
        id:9,
        userName:'Easy Frontend',
        question:'Làm thế nào Hack nào Ajax trong  15p ?😁',
        types:['chat','qna','sharing'],
        Categories:'Front-end / Mobile Apps / Ajax',
        desc:'Làm thế nào Hack nào Ajax trong  15p....',
        link:'',
        save:false,
        Period:19,
        avatar: 'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/205588170_1673303866392050_6126103826734941826_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qeQ2APFtaZIAX9brjJc&tn=rd6k68cBSyJ5Cn_z&_nc_ht=scontent.fhan5-3.fna&oh=524eddd55067724536a57d03b08cf43d&oe=617A12EE',
        answers:0 ,
        avatarUser_answer:[],

    },
    
];

const blogs = [
    {
        id:1,
        userName:'Nguyễn Văn Cúc',
        avatar:'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-9/236536214_996820074486637_6641357331413992918_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tnGMIwKkNQAAX91QYwd&_nc_ht=scontent.fhan5-2.fna&oh=5da8a904a5cef43ab30af83096aed5b7&oe=6179C123',
        post:'[Phần 1] Tạo dự án ReactJS với Webpack 4 và Babel',
        desc:' Tự tạo dự án ReactJS với webpack và babel nhằm mục đích giúp chúng ta hiểu rõ hơn về về cách create-react-app đã tạo ra dự án ReactJS như thế nào và quan...',
        postImage:'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/279/6153f6932dcea.jpg',
        period:6,
        SeeTimePost:12,
        category:['Front-end / Mobile apps','Back-end / Devops','UI / UX / Design','Others']
    },

    {
        id:2,
        userName:'Name H',
        avatar:'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
        post:'Những điều cần biết để "sống sót" trong công ty 🤫',
        desc:'Xin chào mình là name H đây, bài viết lần này mình chia sẻ những điều bạn nên biết trong lúc đi làm hoặc thực tập cho công ty mà...',
        postImage:'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/667/61535b0cd26d1.jpg',
        period:9,
        SeeTimePost:122,
        category:['Front-end / Mobile apps','Back-end / Devops','UI / UX / Design','Others']
    },


    {
        id:3,
        userName:'Long Nguyen',
        avatar:'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/663/61532c6d1d11c.gif',
        post:'[Cơ bản] Tổng quan lập trình Synchronous và Asynchronous',
        desc:' 1. Lập trình synchronous là gì : Lập trình đồng bộ (synchronous) là cách lập trình mà các hoạt động của chương trình sẽ được...',
        postImage:'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/663/61532c6d1d11c.gif',
        period:66,
        SeeTimePost:45,
        category:['Front-end / Mobile apps','Back-end / Devops','UI / UX / Design','Others']
    },

    {
        id:4,
        userName:'Super Dev',
        avatar:'https://lh3.googleusercontent.com/a-/AOh14GhpXvGQjWv4E_riP7vxOAm8WqXAzmn6x0nBlAao=s400',
        post:'15 Extensions Visual Studio Code cho phát triển Web ',
        desc:'Trước khi đến những blog liên quan đến kiến thức lập trình mình muốn chia sẻ với các bạn những extensions mở rộng trong Visual...',
        postImage:'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/625/6150c6f84c260.png',
        period:42,
        SeeTimePost:352,
        category:['Front-end / Mobile apps','Back-end / Devops','UI / UX / Design','Others']
    },

    {
        id:5,
        userName:'Long Nguyen',
        avatar:'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/663/61532c6d1d11c.gif',
        post:'[Cơ bản]Object trong Javascript',
        desc:'Tổng quan về Object: Khác với các kiểu dữ liệu đơn giản - kiểu dữ liệu nguyên thủy (number, string, boolean) chỉ chứa một giá...',
        postImage:'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/607/6150206aee70a.jpg',
        period:72,
        SeeTimePost:352,
        category:['Front-end / Mobile apps','Back-end / Devops','UI / UX / Design','Others']
    },

    {
        id:6,
        userName:'Huu Thang',
        avatar:'https://lh3.googleusercontent.com/a-/AOh14GhpXvGQjWv4E_riP7vxOAm8WqXAzmn6x0nBlAao=s400',
        post:'#1 Docs JS  từ cơ bản đến nâng cao ',
        desc:'Chào các bạn, đây là một trang docs JS hay nhất mà mình biết được trong các trang về lập trình',
        postImage:'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/551/614c35042358a.png',
        period:4,
        SeeTimePost:2,
        category:['Front-end / Mobile apps','Back-end / Devops','UI / UX / Design','Others']
    },

    {
        id:7,
        userName:'Khang Pham',
        avatar:'https://lh3.googleusercontent.com/a-/AOh14Gjlk6tG02Jn-E01Wt_1RQ1GaEntRjutbMxuR9fqeQ=s400',
        post:'Giá trị của một Full-Stack Developer?',
        desc:'Trong bài viết này chúng ta sẽ tìm hiểu về full developer. Họ là ai? Họ làm việc như thế nào? Giá trị của họ ra sao?',
        postImage:'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/425/614561a275c11.jpg',
        period:22,
        SeeTimePost:52,
        category:['Front-end / Mobile apps','Back-end / Devops','UI / UX / Design','Others']
    },

];

const codeOfUser = [
    {
        id:1,
        userName:'Sơn Đặng',
        avatar:'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/86773328_1743183429152459_8575588722626527232_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kKIIjYDuo7MAX-NW52P&_nc_ht=scontent.fhan5-7.fna&oh=0d9e6394b3112bb8b31d0a5509fa788c&oe=6178B7A9',
        title:'Kiểm tra 1 số cho trước có trong mảng hay không?',
        period:5,
        desc:'Có vẻ cồng kềnh như nó work đúng mong muốn.',
        code:
`function check(arr, k) {
let isInclude = false
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
        isInclude = true
    }
}
isInclude ? console.log('có tồn tại phần tử k = ' + k + ' trong mảng ' + arr) 
: console.log('không tồn tại phần tử k = ' + k + ' trong mảng ' + arr)
}`,

    },

    {
        id:2,
        userName:'Khang Pham',
        avatar:'https://lh3.googleusercontent.com/a-/AOh14Gjlk6tG02Jn-E01Wt_1RQ1GaEntRjutbMxuR9fqeQ=s400',
        title:'Tìm số lớn thứ 2 trong mảng với Javascript',
        period:27,
        desc:'Có vẻ cồng kềnh như nó work đúng mong muốn.',
        code:
`(() => {
const data = [1, 3, 4, 5, 20, 17, 8, 9991, 9, 9, 100, 199, 772];
data.sort((a, b) => a - b); // sắp đến từ bé đến lớn
let result = [...new Set(data)];
// Set sẽ trả về object có unique value (tức sẽ loại bỏ các giá trị giống nhau)
console.log(result[result.length - 2]); // 772
})(); `,

    },

    {
        id:3,
        userName:'Khang Pham',
        avatar:'https://lh3.googleusercontent.com/a-/AOh14Gjlk6tG02Jn-E01Wt_1RQ1GaEntRjutbMxuR9fqeQ=s400',
        title:'Cách loại bỏ giá trị trùng lặp trong mảng với Javascript',
        period:17,
        desc:'Có vẻ cồng kềnh như nó work đúng mong muốn.',
        code:
`(() => {
    const data = [1, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 10];
    console.log([...new Set(data)]); // [1, 2, 4, 10]
})();
`,

    },

    {
        id:4,
        userName:'Sơn Đặng',
        avatar:'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/86773328_1743183429152459_8575588722626527232_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kKIIjYDuo7MAX-NW52P&_nc_ht=scontent.fhan5-7.fna&oh=0d9e6394b3112bb8b31d0a5509fa788c&oe=6178B7A9',
        title:'Cách tạo tỉ lệ ngẫu nhiên với Javascript',
        period:5,
        desc:'',
        code:
`const isLucky = Math.random() < 0.5 // 50%
if (isLucky) {
    // do something
}`,

    },

    {
        id:5,
        userName:'Sơn Đặng',
        avatar:'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/86773328_1743183429152459_8575588722626527232_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kKIIjYDuo7MAX-NW52P&_nc_ht=scontent.fhan5-7.fna&oh=0d9e6394b3112bb8b31d0a5509fa788c&oe=6178B7A9',
        title:'Kiểm tra 1 số cho trước có trong mảng hay không?',
        period:5,
        desc:'Có vẻ cồng kềnh như nó work đúng mong muốn.',
        code:
`function check(arr, k) {
let isInclude = false
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
        isInclude = true
    }
}
isInclude ? console.log('có tồn tại phần tử k = ' + k + ' trong mảng ' + arr) 
: console.log('không tồn tại phần tử k = ' + k + ' trong mảng ' + arr)
}`,

    },
]

const HomeSlider = [
    {
        id:1,
        heading:'F8 trên Facebook',
        image:'https://cdn.fullstack.edu.vn/f8-learning/banners/Banner_04_2.png',
        desc:'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
        link:'https://www.facebook.com/groups/f8official',
        colorSlide:'linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254))',
        titleBtn:'Truy cập nhóm',
        colorText:'#007efe;'
    },
    {
        id:2,
        heading:'Thành quả của học viên',
        image:'https://cdn.fullstack.edu.vn/f8-learning/banners/Banner_01_2.png',
        desc:'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
        link:'',
        colorSlide:'linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255))',
        titleBtn:'Xem thành quả',
        colorText:'#7612ff;;'

    },
    {
        id:3,
        heading:'F8 trên Youtube',
        image:'https://cdn.fullstack.edu.vn/f8-learning/banners/Banner_03_youtube.png',
        desc:'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
        link:'https://www.youtube.com/channel/UCNSCWwgW-rwmoE3Yc4WmJhw',
        colorSlide:'linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))',
        titleBtn:'Truy cập kênh',
        colorText:'#fe215e;'

    }
]

const hotVideo = [
    {
        id:1,
        image:'https://i.ytimg.com/vi/YH-E4Y3EaT4/hqdefault.jpg',
        title:'Sinh viên IT đi thực tập cần biết những gì? | Đi thực tập cần chuẩn bị những gì? | Thực tập IT',
        view:118.913,
        like:3.384,
        comments:190,

    },
    {
        id:2,
        image:'https://i.ytimg.com/vi/sgq7BH6WxL8/hqdefault.jpg',
        title:'"Code Thiếu Nhi Battle" Tranh Giành Trà Sữa Size L',
        view:94.770,
        like:2.480,
        comments:145,

    },
    {
        id:3,
        image:'https://i.ytimg.com/vi/DpvYHLUiZpc/hqdefault.jpg',
        title:'Phương pháp & quan điểm học lập trình của Sơn Đặng',
        view:34.388,
        like:2.266,
        comments:194,

    },
    {
        id:4,
        image:'https://i.ytimg.com/vi/oF7isq9IjZM/hqdefault.jpg',
        title:'Làm sao để có thu nhập cao và đi xa hơn trong ngành IT?',
        view:35.397,
        like:1.864,
        comments:198,

    },
    {
        id:5,
        image:'https://i.ytimg.com/vi/ZGmpvhqYSDU/hqdefault.jpg',
        title:'Lần trở lại này F8 sẽ làm gì cho các bạn? Học lập trình để đi làm tại F8 nào!',
        view:14.262,
        like:1.788,
        comments:198,

    },
    {
        id:6,
        image:'https://i.ytimg.com/vi/x0fSBAgBrOQ/hqdefault.jpg',
        title:'ReactJS là gì? Tại sao nên học ReactJS?',
        view:23.426,
        like:1.576,
        comments:312,

    },
    {
        id:7,
        image:'https://i.ytimg.com/vi/2sg1yNl1WvE/hqdefault.jpg',
        title:'Chọn ngành IT có sai lầm? Những trải nghiệm thực tế sau 2 tháng làm việc tại doanh nghiệp?',
        view:35.747,
        like:1.410,
        comments:159,

    },
    {
        id:8,
        image:'https://i.ytimg.com/vi/0SJE9dYdpps/hqdefault.jpg',
        title:'Javascript có thể làm được gì? Giới thiệu qua về trang F8 | Học lập trình Javascript cơ bản',
        view:201.771,
        like:1.284,
        comments:78,

    },
    {
        id:9,
        image:'https://i.ytimg.com/vi/G19jZzK5FWI/hqdefault.jpg',
        title:'Học Flexbox qua ví dụ',
        view:57.010,
        like:1.032,
        comments:91,

    },
    
]

const PAGE_HOME ='home';
const PAGE_COURSES ='courses';
const PAGE_QUESTION ='question';
const PAGE_BLOG = 'blog';
const PAGE_CODE = 'code'


function Body(props) {
    const [listCourses,setListCourses] = useState(courses);
    const [listQuestion,setListQuestion] = useState(questions);
    const [listBlog,setListBlog] =useState(blogs)
    const [ListCode,setListCode] = useState(codeOfUser)
    const getPageReload = localStorage.getItem('pages');
    const [Pages,setPages] = useState(getPageReload ? getPageReload : PAGE_COURSES)
  

    function changPages(pages){
        setPages(pages)
        const pageReload = localStorage.setItem('pages',pages ? pages : PAGE_COURSES)
    }
    
    return (
        <Router>
        <div className="content">
            <div className="content__sidebar"> <Sidebar changepage={changPages} /></div>

            <div className="content__pages">
                <Route path={config.routes.home} exact render={()=>  <Home slideShow={HomeSlider} courses={courses} blog={blogs} hotVideo={hotVideo}/> } />
                <Route path={config.routes.courses}  render={()=>  <Courses/> } />
                <Route path={config.routes.question}  render={()=>  <Question  questions={listQuestion}/> } />
                <Route path={config.routes.blog}  render={()=>  <Blog  blogs={listBlog} /> } />
                <Route path={config.routes.code}  render={()=>  <Code listCodeShare={ListCode}/> } />
            </div>  
       
        </div>    
        </Router>
        
    );
}

export default Body;