import React from 'react';
import './Footer.css';

Footer.propTypes = {

};

function Footer(props) {
    return (
        <>
            <div className="container cover">
                <div className="row h-100 row-info ml-0 mr-0">
                    <div className='col-4'>
                        <div className="row">
                            <p className="title">
                                Parliamentary Reports
                            </p>
                        </div>
                        <div className="row">
                            <p className="sub-title">
                                Search hansard dating back to 2012.
                            </p>
                        </div>
                    </div>
                    <div className='col-4 center-item'>
                        <div className="row">
                            <p className="title">
                                Cases
                            </p>
                        </div>
                        <div className="row">
                            {/* <p className="sub-title">
                                Search Singapore cases dating back to 2000.
                            </p> */}
                            <p className="sub-title">
                                Coming soon
                            </p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className="row">
                            <p className="title">
                                News Reports
                            </p>
                        </div>
                        <div className="row">
                            {/* <p className="sub-title">
                                Search news reports related to law and legal issues.
                            </p> */}
                            <p className="sub-title">
                                Coming soon
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container footer">
                <div className="row justify-content-between">
                    <div className="col-sm-4 col-md-2 col-6">
                        <div>
                            <p className="term">Terms of Use</p>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-2 col-6">
                        <div className="aligin-right">
                            <p className="copy-right">Copyright 2021 (c)</p>
                            <p className="company">Elephant Pte Ltd</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;