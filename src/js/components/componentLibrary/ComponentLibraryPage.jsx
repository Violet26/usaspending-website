/**
 * ComponentLibraryPage.jsx
 * Created by Lizzie Salita 9/2/19
 */

import React from 'react';

import * as MetaTagHelper from 'helpers/metaTagHelper';

import MetaTags from '../sharedComponents/metaTags/MetaTags';
import Header from '../sharedComponents/header/Header';
import StickyHeader from '../sharedComponents/stickyHeader/StickyHeader';
import Footer from '../sharedComponents/Footer';
import ComponentLibraryContent from './ComponentLibraryContent';

require('pages/componentLibrary/componentLibrary.scss');

export default class ComponentLibraryPage extends React.Component {
    render() {
        return (
            <div className="usa-da-component-library">
                <MetaTags {...MetaTagHelper.stylePageMetaTags} />
                <Header />
                <StickyHeader>
                    <div className="sticky-header__title">
                        <h1 tabIndex={-1} id="main-focus">
                            Component Library
                        </h1>
                    </div>
                </StickyHeader>
                <main id="main-content" className="main-content">
                    <ComponentLibraryContent />
                </main>
                <Footer />
            </div>
        );
    }
}
