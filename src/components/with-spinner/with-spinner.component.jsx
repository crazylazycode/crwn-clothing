import React from 'react';

import {
    SpinnerContainer,
    SpinnerOverlay
} from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoadng, ...otherProps}) => {
        return isLoadng ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        );
    }
    return Spinner;
};

export default WithSpinner;