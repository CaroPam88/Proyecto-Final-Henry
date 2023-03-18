import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../thema";


const Header = ({ title, subtitle}) => {

    return(
            <div class="box" style="margin-bottom: 30px;">
            <h2 class="title" style="color: #f5f5f5; font-weight: bold; margin: 0 0 5px 0;">
                {title}
            </h2>
            <h5 class="subtitle" style="color: #4caf50;">
                {subtitle}
            </h5>
            </div>

    );
};

export default Header;

 