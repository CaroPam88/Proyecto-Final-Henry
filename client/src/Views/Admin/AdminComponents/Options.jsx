import { useTheme } from "@mui/material";
import { tokens } from "../thema";


export default function Options({ name, array, setState, state}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const click = (e) => {
        setState({
            ...state,
            [name]: state[name].filter((t) => t !== e.target.id),
        });
    };

    return(
<div class="box">
    <h4 class="name">
        {name.toUpperCase()}
    </h4>
    {array.map((e) => (
        <div class="inner-box">
            <div class="clickable-box" onClick={click} id={e} key={e}>
                {e.toUpperCase()}
            </div>
        </div>
    ))}
</div>

    )
}