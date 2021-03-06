import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCodeByPage } from '../../../redux/reducers/todoCode';
import './Style.scss'
import Prism from "prismjs";
import '../../assets/prism/prism.css'
import HighlightCode from './component/ListHighlightCode';


function Code(props) {
    const dispatch = useDispatch();
    const { listCodeByPage } = useSelector(state => state.code)
    const [page,setPage] = useState(1)

    useEffect(() => {
        dispatch(getCodeByPage(page))
    },[page])

    useEffect(() => {
        window.onscroll = function(ev) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setPage(page+1)    
                // console.log(listCodeByPage)
            }
        };
    })

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
                            {
                                listCodeByPage?.map((code,i) => (
                                    <HighlightCode key={i} info={code} />
                                ))
                            }
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