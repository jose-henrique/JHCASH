import React, { useState, FormEvent } from 'react';

import '../styles/pages/dashboardAddPage.css';

import DefaultPage from '../components/defaultPage';

import { FiPlus } from 'react-icons/fi';
import { BiX } from "react-icons/bi";


function DashboardAddPage(){
    const [inputBlockE, setInputBlockE] = useState(false);
    const [inputBlockC, setInputBlockC] = useState(false);

    function toggleEarns(){
        setInputBlockE(!inputBlockE);
    }

    function toggleCosts(){
        setInputBlockC(!inputBlockC)
    }

    function handleSubmitEarns(event: FormEvent){
        event.preventDefault()
        setInputBlockE(!inputBlockE)
    }

    function handleSubmitCosts(event: FormEvent){
        event.preventDefault()
        setInputBlockC(!inputBlockC)
    }

    return(
        <DefaultPage title="Adicionar ganhos ou custos">
            <div className="add-earns-block">
                <div className="itens-display">
                    <div className="card">
                        <p>30 <span>Out</span></p>
                        <p>Slário</p>
                        <strong>+ R$ 1.000,00</strong>
                    </div>
                    <div className="card">
                        <p>21 <span>Set</span></p>
                        <p>Dividendos</p>
                        <strong>+ R$ 100,00</strong>
                    </div>
                    <div className="card">
                        <p>24 <span>Nov</span></p>
                        <p>Aluguel</p>
                        <strong>+ R$ 500,00</strong>
                    </div>
                    <div className="card">
                        <p>24 <span>Nov</span></p>
                        <p>Aluguel</p>
                        <strong>+ R$ 500,00</strong>
                    </div>
                </div>
                <button onClick={toggleEarns} className="add-button">
                    <FiPlus size={40} color="#38D618" id={inputBlockE ? "add" : "add-active"}/>
                    <BiX size={40} color="#38D618" id={inputBlockE ? "close-active" : "close"}/>
                </button>
                <div className={inputBlockE ? "input-block-active" : "input-block"}>
                    <form onSubmit={handleSubmitEarns}>
                        <label htmlFor="name" className="name-label">Fonte do recebimento</label>
                        <input type="text" id="name"/>
                        <div className="detail-container">
                            <div className="value-container">
                                <label htmlFor="value">Valor</label>
                                <input type="number" id="value"/>
                            </div>
                            <div className="date-container">
                                <label htmlFor="date">Data</label>
                                <input type="date" id="date"/>
                            </div>
                        </div>
                        <button  className="input-button">
                            Adicionar
                        </button>
                    </form>
                </div>
            </div>
            <div className="add-costs-block">
                <div className="items-display">
                    <div className="cardC">
                        <p>10 <span>Nov</span></p>
                        <p>Água</p>
                        <strong>- R$ 220,00</strong>
                    </div>
                    <div className="cardC">
                        <p>13 <span>Nov</span></p>
                        <p>Energia</p>
                        <strong>- R$ 93,00</strong>
                    </div>
                    <div className="cardC">
                        <p>15 <span>Nov</span></p>
                        <p>internet</p>
                        <strong>- R$ 110,00</strong>
                    </div>
                    <div className="cardC">
                        <p>15 <span>Nov</span></p>
                        <p>internet</p>
                        <strong>- R$ 110,00</strong>
                    </div>
                </div>
                <button onClick={toggleCosts} className="add-costs">
                    <FiPlus size={40} color="#FF002F" id={inputBlockC ? "addC" : "addC-active"}/>
                    <BiX size={40} color="#FF002F" id={inputBlockC ? "closeC-active" : "closeC"}/>
                </button>
                <div className={inputBlockC ? "input-blockC-active" : "input-blockC"}>
                    <form onSubmit={handleSubmitCosts}>
                        <label htmlFor="type" className="type-label">Fonte do recebimento</label>
                        <select id="type-select">
                            <option value="water">Água</option>
                            <option value="energy">Energia</option>
                            <option value="internet">Internet</option>
                            <option value="market">Mercado</option>
                            <option value="dwelling">Moradia</option>
                            <option value="other">Outros</option>
                        </select>
                        <div className="detailC-container">
                            <div className="valueC-container">
                                <label htmlFor="valueC">Valor</label>
                                <input type="number" id="valueC"/>
                            </div>
                            <div className="dateC-container">
                                <label htmlFor="dateC">Data</label>
                                <input type="date" id="dateC"/>
                            </div>
                        </div>
                        <button  className="inputC-button">
                            Adicionar
                        </button>
                    </form>
                </div>
            </div>
        </DefaultPage>
    )
}

export default DashboardAddPage;