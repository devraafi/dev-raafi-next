import Head from 'next/head';
import React from 'react';
import MainLayout from '../components/main';

class Home extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <MainLayout>
                    <div className="container pt-5">
                        <div className="title-page text-center">
                            <label htmlFor="">
                                No Content #789 <br />
                            No Content #789 <br />
                            No Content #789 <br />
                            No Content #789 <br />
                            No Content #789 <br />
                            </label>
                        </div>
                    </div>
                </MainLayout>
            </div>
        )
    }
}

function homeComp() {
    return <>

    </>
}

export default Home;