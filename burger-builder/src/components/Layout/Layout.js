import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './layout.module.css';


const Layout = (props) => (
    <Aux>
        <Toolbar />
        <div>
            SideDrawer
            Backdrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;