import { Box, Typography, useTheme } from "@mui/material";
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
<div class="box" style="width: 33%; display: flex; justify-content: center; flex-wrap: nowrap;">
  <h4 class="name" style="color: #4caf50; display: flex; flex-wrap: wrap; margin-bottom: 10px; justify-content: center;">
    {name.toUpperCase()}
  </h4>
  {array.map((e) => (
    <div class="inner-box" style="display: flex; justify-content: center;">
      <div
        class="clickable-box"
        style="
          display: flex;
          border-radius: 10px;
          color: #f5f5f5;
          justify-content: center;
          width: 200px;
          cursor: pointer;
          padding: 1px;
          margin: 1px;
          background-color: #303f9f;
        "
        onClick={click}
        id={e}
        key={e}
      >
        {e.toUpperCase()}
      </div>
    </div>
  ))}
</div>

    )
}