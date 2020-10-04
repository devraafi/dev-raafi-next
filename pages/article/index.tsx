import React from 'react';
import MainLayout from '../../components/main';
import '../../styles/article.scss'



export default class Article extends React.Component {
    constructor(p) {
        super(p);

        this.state = {
        }
    }
    render() {
        return (
            <div className={'container'} id="contacts-page">
                <MainLayout>
                    <div className="container pt-5">
                        <div className="text-center title-page mb-3">
                            <label htmlFor=""> <span className="pb-1 border-bottom mb-2">A r </span> t i c l e *</label>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="article">
                                </div>
                            </div>
                        </div>
                    </div>
                </MainLayout>
            </div>
        )
    }
}
