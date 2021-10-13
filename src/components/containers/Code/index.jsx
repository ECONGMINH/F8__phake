import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss'
import Prism from "prismjs";
import '../../assets/prism/prism.css'
Code.propTypes = {
    listCodeShare: PropTypes.array,
};

Code.defaultProps = {
    listCodeShare:[],
}




function Code(props) {
    const {listCodeShare} = props;

  

    function renderCode(listCodeShare){
      return  listCodeShare.map( code => (

            <div className="code__primary-item" >
        <a href="" className="code__primary-item-heading">
            <h3>{code.title}</h3>
        </a>
        
        <div className="code__primary-item-header">
            <a className="code__primary-item-header__infor-user">
                <img src={code.avatar} alt="" />
                <span>{code.userName}</span>
                <span className="dot">.</span>
                  {code.period}  ngày trước
            </a>
            
            <div className="code__primary-item-header-btn">
                <div className="code__primary-item-header-btn__save-post" ><i className="far fa-bookmark"></i></div>
                <div className="code__primary-item-header-btn__share-social"><i className="fas fa-ellipsis-h"></i></div>
            </div>

        </div>

      
            <pre className="code__primary-item__Highlight ">
                <code className="language-javascript">

{code.code}   
                </code>
            </pre>
        </div>
        ))

    
       
    }

    Prism.highlightAll();
    return (
        <div className="grid-pages-stand">
            <section className="grid__body__full-width">
                <section className="code index-module_row__-AHgh">
                    <section className="code__primary">
                            <div className="code__primary-header">
                                <div className="code__primary-header-tabs">
                                    <a href="" className="code__primary-header-tab Blog__header-active" >CHIA SẺ MỚI NHẤT</a>
                                </div>
                            </div> 
                            {renderCode(listCodeShare)}
                    </section>

                    <section className="code__propose">
                    <div className="code__propose-box">
                                <div className="code__propose-layout">
                                    <div className="code__propose-heading">
                                        <h3>
                                            CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT
                                        </h3>
                                    </div>
                                    <ul className="code__propose-list">
                                        <li className="code__propose-list-item"><a href="">Front-end / Mobile apps</a></li>
                                        <li className="code__propose-list-item"><a href="">Back-end / Devops</a></li>
                                        <li className="code__propose-list-item"><a href="">UI / UX / Design</a></li>
                                        <li className="code__propose-list-item"><a href="">Others</a></li>
                                    </ul>
                                </div>
                            </div>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default Code;