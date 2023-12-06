import React, { useState } from "react";
import "./modal.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {registration} from "../action/User";
export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const  handleShow= () => {
        alert("Успешно регистрация")
    }


    return (
        <div >

            <Button text={'Регистрация'}
                    handleClick={toggleModal}
            />

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className='modal-header'>
                            <h2>Create account</h2>
                            <p className="close-modal" onClick={toggleModal}>
                                x
                            </p>
                        </div>
                        <div className='block'>
                            <div>
                                <label className="first_line">
                                    <div className="first_line_one">
                                        <h3>
                                            Email addres
                                        </h3>
                                        <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>                                    </div>
                                    <div>
                                        <h3>
                                            Пароль
                                        </h3>
                                        <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
                                    </div>
                                </label>

                                <button className="input-submit" onClick={handleShow}>Войти</button>

                            </div>
                        </div>




                    </div>
                </div>
            )}
        </div>
    );
}