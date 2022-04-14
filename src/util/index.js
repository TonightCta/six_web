import { useHistory } from "react-router-dom";
export default function ChangeRoute(_link) {
    const history = useHistory();
    history.push(_link)
};