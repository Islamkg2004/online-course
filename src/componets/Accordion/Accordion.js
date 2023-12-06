import React, {useState} from 'react';
import './accordion.css'
import {data} from "./data";


function Accordion() {
    const [accordion, setActiveAccordion] = useState(-1);

    function toggleAccordion(index) {
        if (index === accordion) {
            setActiveAccordion(-1);
            return
        }
        setActiveAccordion(index);
    }

    return (
        <>
            <div>

                <div className="accordion__faq">
                    {
                        data.map((item, index) =>
                            <div key={index} data-index={index} onClick={() => toggleAccordion(index)}>
                                <div className="accordion__faq-heading">
                                    <div>
                                        <h3>{item.question}</h3></div>
                                    <div>
                                        {accordion === index ?
                                            <span className="verticle">-</span> : <span className="horizental">+</span>}
                                    </div>
                                </div>
                                <div className={accordion === index ? "active" : "inactive"} >
                                    <p className='accordionp'>{item.answer}</p>
                                    </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Accordion;

