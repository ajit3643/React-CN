//GETTING STYLES OF CALCULATOR
import styles from "./calculator.module.css";

// GETTING ON BACKSPACE BUTTON IMAGE
import backpng from "./back.png"

const Calculator = ({ calculate, handleBack, handleClear, handleClick, result, handleMinus }) => {
    return (
        <>
        <div className={styles.main}>

            {/* toggle buttons for design only */}
            <span className={styles.toggle}></span>
            <span className={styles.toggle}></span>
            <span className={styles.toggle}></span>

            {/* title calculator */}
            <div className={styles.title}>
                <h1>Calculator</h1>
            </div>

            {/* screen */}
            <div className={styles.inputCont}>
                <input type="text" value={result} />
            </div>

            {/* all keypad buttons */}
            <div  className={styles.keypad}>
                <button onClick={handleClear}>AC</button>
                <button onClick={handleMinus}>+/-</button>
                <button onClick={handleBack}><img src={backpng} alt="back"/></button>
                <button className={styles.operator} value="/" onClick={handleClick}>&divide;</button>
                <button value="7" onClick={handleClick}>7</button>
                <button value="8" onClick={handleClick}>8</button>
                <button value="9" onClick={handleClick}>9</button>
                <button className={styles.operator} value="*" onClick={handleClick}>&times;</button>
                <button value="4" onClick={handleClick}>4</button>
                <button value="5" onClick={handleClick}>5</button>
                <button value="6" onClick={handleClick}>6</button>
                <button className={styles.operator} value="+" onClick={handleClick}>+</button>
                <button value="1" onClick={handleClick}>1</button>
                <button value="2" onClick={handleClick}>2</button>
                <button value="3" onClick={handleClick}>3</button>
                <button className={styles.operator} value="-" onClick={handleClick}>-</button>
                <button className={styles.zero} value="0" onClick={handleClick}>0</button>
                <button value="." onClick={handleClick}>.</button>
                <button className={styles.operator} onClick={calculate}>=</button>
            </div>
        </div>
        </>
    )
}
export default Calculator;