import React, { Component } from 'react';
import Typed from 'react-typed';

const textLines = ["Page Not Found"];

export class Page404 extends Component {
    render() {
        return (
                <section className='sec page_404' id="lp">
                    <div className="spacer">
                        <div className="container-fuild">
                            <div id="notfound">
                                <div className="notfound">
                                    <div className="notfound-404">
                                        <h1>
                                            <Typed
                                                strings={textLines}
                                                typeSpeed={150}
                                                backSpeed={150}
                                            loop />
                                        </h1>
                                    </div>
                                    <em>We are Sorry </em>
                                    <p>The page you requested cannot be found.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>     
        )
    }
}
export default Page404
