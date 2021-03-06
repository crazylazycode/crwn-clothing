import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverveiwContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.component';


const ShopPage = ({ fetchCollectionsStart,match }) => {

    useEffect(()=>{
        fetchCollectionsStart()
    },[fetchCollectionsStart])

    return (
        <div className='shop-page'>
            <Route exact path ={ `${match.path}`} component={CollectionsOverveiwContainer}  />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    );
}  




const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
 
export default connect(null,mapDispatchToProps)(ShopPage);

