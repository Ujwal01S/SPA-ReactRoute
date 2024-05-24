
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation () {
    return(
        <header className={classes.header} >
            <nav>
                <ul className={classes.list}>
                    <li><Link to= '/'> Header</Link></li>
                    <li><Link to= '/products' >Products</Link></li>
                </ul>
            </nav>
        </header>
    );
};


export default MainNavigation;