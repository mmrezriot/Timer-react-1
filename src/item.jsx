import { useContext } from "react"
import { timesContext } from "./contex"

const Item = (props) => {
    const context = useContext(timesContext);

 const deleteTimes = (e) => {
    const value = e.target.textContent.trim();
    context.setTimes(context.times.filter(t => t !== value));
};
    return (
        <div onClick={deleteTimes}>
            {props.children}
        </div>
    )
}

export default Item;
