import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './header.styles.scss'

import { auth } from '../../firebase/firebase.utils';



const Header = ({ currentUser, hidden }) => (
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
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
);

const mapToStateProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapToStateProps)(Header);
