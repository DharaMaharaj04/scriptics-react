import React, { Component } from 'react';
import FullPageScroll from './FullPageScroll';

import { Helmet } from 'react-helmet';
export class Home extends Component {
    render() {
        return ( 
            <div>
                <Helmet>
                    <title>Scriptics</title>
                    <meta property="og:title" content="Scriptics | Technology that delivers on your promise" />
                    <meta property="og:url" content="https://www.scriptics.ai" />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content="Scriptics aims at transforming organizations digitally with innovative and sustainable IT solutions that deliver value to the business." />
                    <meta property="og:image" content="https://media.gettyimages.com/photos/bogota-at-sunset-picture-id107069344?s=612x612" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta property="twitter:domain" content="scriptics.ai" />
                    <meta property="twitter:url" content="https://www.scriptics.ai/" />
                    <meta name="twitter:title" content="Scriptics | Technology that delivers on your promise" />
                    <meta name="twitter:description" content="Scriptics aims at transforming organizations digitally with innovative and sustainable IT solutions that deliver value to the business." />
                    <meta name="twitter:image" content="https://media.gettyimages.com/photos/bogota-at-sunset-picture-id107069344?s=612x612" />
                    <body id="page-home" /> 
                </Helmet>
                <section>
                    <FullPageScroll />
                </section> 
            </div>
        )
    }
}
export default Home
