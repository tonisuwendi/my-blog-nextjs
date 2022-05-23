import { Fragment } from 'react';
import PropTypes from 'prop-types';

import MainNavigation from './mainNavigation';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <MainNavigation />
            <main>{children}</main>
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
};

Layout.defaultProps = {
    children: null,
};

export default Layout;
