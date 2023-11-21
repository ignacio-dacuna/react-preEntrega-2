import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
const estilo = {
    fontSize: "1.2rem"
}

    return(
        <div>
            <FontAwesomeIcon style={estilo} icon={faCartShopping} />
            <span>  </span>
            <span style={estilo}>10</span>
        </div>
    )
}

export default CartWidgetComponent