import { useEffect, useState } from "react";
import headerData from "../data/headerData";

function Header(){

    let [Header, setHeader] = useState('');
    let [menuActive, setMenuActive] = useState(['','','']);
    let [nightShift, setNightShift] = useState('')
    let data = headerData;

    useEffect(()=>{

        // nightShift의 값이 변동 될때마다 body에 night or light 클래스 적용 

        document.body.className = nightShift === 'light' ? 'light' : 'night';

    },[nightShift])

    return(
        <header
           
             className={`${Header}`} onMouseOver={()=>{setHeader('long')}} onMouseLeave={()=>{setHeader('')}}
        >
            <div className="logo f_size_s" >
                <h2>Hong Jumi</h2>
            </div>
            <ul className="nav" >
                {
                    data.map((result, mainIndex)=>{
                        return(
                            <li key={mainIndex}>
                                <a className={`mainTitle ${menuActive[mainIndex]}`} href="">{result.mainTitle}</a>
                                <ul 
                                     className={`${Header === 'long' ? 'active' : ''}`}
                                >
                                    {
                                        result.subTitle.map((sub, subIndex)=>{
                                            return(
                                                <li key={subIndex}  onMouseOver={()=>{
                                                    let copy = [...menuActive];
                                                    copy.splice( mainIndex,1,"active")
                                                    setMenuActive(copy)
                                                }}
                                                onMouseLeave={()=>{
                                                    setMenuActive(["","",""])
                                                }} >
                                                    <a href="">{sub.name}</a>
                                                    {sub.img && <img src="/download.png" alt="download" /> }
                                                </li>   
                                                
                                            )
                                        })
                                    }
                                   
                                </ul>    
                            </li>
                        )

                    })

                }

            </ul>
            <button className={`night-shift ${nightShift}`} onClick={()=>{
                nightShift === '' ? setNightShift('light') : setNightShift('') 
           
                
                }}>
                <div></div>
                <div></div>
            </button>

        </header>
    )
}

export default Header;