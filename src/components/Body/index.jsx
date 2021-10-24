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
    const [ListCode,setListCode] = useState(codeOfUser);

    return (
        <Router>
        <div className="content">
            <div className="content__sidebar"> <Sidebar  /></div>

            <div className="content__pages">
                <Route path={config.routes.home} exact render={()=>  <Home slideShow={HomeSlider}  hotVideo={hotVideo}/> } />
                <Route path={config.routes.courses}  render={()=>  <Courses/>} />
                <Route path={config.routes.question}  render={()=>  <Question/>} />
                <Route path={config.routes.blog}  render={()=>  <Blog  />} />
                <Route path={config.routes.code}  render={()=>  <Code listCodeShare={ListCode}/> } />
            </div>  
       
        </div>    
        </Router>
        
    );
}

export default Body;