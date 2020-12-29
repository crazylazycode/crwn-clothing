import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import withSpinner from '../with-spinner/with-spinner.component';

import CollectionsOverveiw from './collection-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverveiwContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverveiw);

export default CollectionsOverveiwContainer;