const Header = ({ title, subtitle}) => {

    return(
        <div class="box">
        <h2 class="title">
            {title}
        </h2>
        <h5 class="subtitle">
            {subtitle}
        </h5>
    </div>
    
    );
};

export default Header;

 