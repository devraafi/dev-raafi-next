import React from "react";
import Link from 'next/link';
import '../styles/nav.scss'

export default class Nav extends React.Component {
    render() {
        return (
            <div id="navbar-dev-raafi">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link href="/">
                        <a className="navbar-brand brand-name">
                            <span className="dev dev pb-1 pr-1">Dev `</span>R a a <span className="v">fi</span>
                    </a>
                    </Link>
                    <button className="navbar-toggler shadow" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/article">
                                    <a className="nav-link">Article</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="nav-link">About</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contacts">
                                    <a className="nav-link">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}