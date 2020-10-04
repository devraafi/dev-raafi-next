import React from "react";
import '../styles/globals.scss'

export default class Footer extends React.Component {
    render() {
        return (
            <div id="footer-dev-raafi">
                <div className="container py-3">
                    <div className="row justify-content-between">
                        <div className="col-auto">
                            <label htmlFor="" className="v-footer rotate-90">2020 *</label>
                        </div>
                        <div className="col-auto">
                            <label htmlFor="" className="v-footer">v _</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}