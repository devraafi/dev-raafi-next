import React from 'react';
import MainLayout from '../../components/main';
import '../../styles/article.scss'
const data = [
    {
        title: 'The Title',
        createDate: '04 Oct 2020',
        pict: '/img/SVG/art.svg',
        content: 'Occaecat esse consectetur fugiat cupidatat exercitation et ad nisi elit.Magna consequat laboris excepteur exercitation proident cillum commodo cillum enim exercitation esse.In ipsum tempor eiusmod do veniam velit mollit. Laborum non cupidatat sunt do ullamco nostrud officia laboris.Id pariatur cupidatat sint ea Lorem culpa Lorem.Ex duis incididunt deserunt laborum.Do proident cillum laboris aute id excepteur aute et. Mollit eu incididunt aliqua sit dolor culpa officia.Minim laboris aliquip non laboris labore anim commodo ut.Qui voluptate nulla aliquip nisi reprehenderit officia eu commodo.Sint voluptate anim cillum adipisicing dolor excepteur consectetur sit fugiat nulla minim dolor qui consectetur. Ullamco enim ex duis aliqua in nulla laboris nisi proident do.Ut aute in adipisicing ipsum consectetur irure elit.Incididunt laborum elit duis non amet cillum eiusmod labore nulla sunt incididunt culpa.Qui aute laboris aliqua eiusmod mollit velit labore et.'
    }
]
class Article extends React.Component<{}, any> {
    constructor(p) {
        super(p);

        this.state = {
        }
    }
    render() {
        const articles = data;
        return (
            <div className={'container'} id="article-page">
                <MainLayout>
                    <div className="container pt-5">
                        <div className="text-center title-page mb-3">
                            <label htmlFor=""> <span className="pb-1 border-bottom mb-2">A r </span> t i c l e *</label>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="article pt-4">
                                    <div className="container">
                                        {
                                            articles.map((a, i) => {
                                                return (
                                                    <div className="row">
                                                        <div className="col-md-4 order-md-0 order-0">
                                                            <img src={a.pict} alt="" srcSet="" />
                                                        </div>
                                                        <div className="col-md-8 order-md-1 order-1">
                                                            <div className="title mb-1">
                                                                {a.title}
                                                            </div>
                                                            <div className="date mb-1">
                                                                {a.createDate}
                                                            </div>
                                                            <div className="content">
                                                                {a.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MainLayout>
            </div>
        )
    }
}

export default Article;
