import React, {useState} from "react";
import './Sorteador.css'

export default function Sorteador(){

    const [numero, setNumero] = useState(0);
    const [valorDe, setValorDe] = useState('');
    const [valorAte, setValorAte] = useState('');

    const handleSortear = () => {
        const min = parseInt(valorDe, 10);
        const max = parseInt(valorAte, 10);

        if (!isNaN(min) && !isNaN(max) && min <= max && min >= 1 && max <= 10000) {
            const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
            setNumero(numeroSorteado);
        } else {
            alert("Por favor, insira valores válidos nos campos De e Até (entre 1 e 10000).");
        }
    };

    const handleZerar = () => {
        setNumero(0);
        setValorDe('');
        setValorAte('');
    };

    return(
        <>
          <div className="cont__titulo">
            <h1 className="titulo">Sorteador de Rifa</h1>
          </div>
          <div>
            <form className="form__inputs">
                <input className="input1" type="text" placeholder="De:" value={valorDe} onChange={(e)=>setValorDe(e.target.value)} />
                <input className="input2" type="text" placeholder="Até" value={valorAte} onChange={(e)=>setValorAte(e.target.value)} />
            </form>
            <div className="btn">
            <button className="btn__sortear" onClick={handleSortear}>Sortear</button>
            <button className="btn__sortear" onClick={handleZerar}>Novo Sorteio</button>
            </div>
          </div>
          <div className="rstls">
            <h2 className="resultado__txt">O número sorteado é: </h2>
            <h2 className="resultado__numb">{numero}</h2>
          </div>

          <footer className="footer__container">
            <p className="footer">2023 GPTech© - OpenSource Project</p>
          </footer>
            
        </>
    )
}