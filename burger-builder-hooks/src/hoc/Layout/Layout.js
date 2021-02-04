import React, { useState } from 'react';
import classes from './layout.module.css';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';


const Layout = props => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);


    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {

        setShowSideDrawer(!showSideDrawer)
    }


    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}
            />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={showSideDrawer}
                closed={sideDrawerToggleHandler} />
            <div>
                SideDrawer
                Backdrop
                </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );

};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);