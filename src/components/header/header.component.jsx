import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/crown.svg'

import { connect } from 'react-redux';

import './header.styles.scss'

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-conatiner' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
);

const mapToStateProps = state => ({
    currentUser : state.user.currentUser
})

export default connect(mapToStateProps)(Header);
