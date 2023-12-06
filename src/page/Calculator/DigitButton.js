
import {ACTIONS} from "./Calculaot";
export default function DigitButton({ dispatch, digit }) {
    return (
        <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
        >
            {digit}
        </button>
    )
}