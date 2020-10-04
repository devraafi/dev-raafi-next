import MainLayout from '../../components/main';
import '../../styles/about.scss'

const careers = [
    {
        companyName: 'Clodeo',
        division: 'Frontend Developer',
        periode: 'May 2019 - Now'
    },
    {
        companyName: 'Clodeo',
        division: 'Frontend Developer',
        periode: 'May 2019 - Now'
    },
]

const About = () => {

    return (
        <div className={'container'} id="about-page">
            <MainLayout>
                <div className="container pt-5">
                    <div className="text-center title-page mb-3">
                        <label htmlFor=""> <span className="pb-1 border-bottom mb-2">A b </span> o u t *</label>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="careers">
                                <div className="about-icon w-50">
                                    <img src="/img/SVG/about.svg" className="img-fluid" alt="" srcSet="" />
                                </div>
                                <div className="your-name">
                                    <span className="nick">Raafi</span> Muhammad
                                </div>
                                <div className="division mb-3">
                                    <span className="border-bottom pb-2">Soft</span>ware Engineer
                                </div>
                                <div className="career">
                                    Careers
                                </div>
                                <div className="career-list">
                                    <ul>
                                        {careers.map((c, i) => {
                                            return (
                                                <li className="my-2" key={i}>
                                                    <div className="company-name">
                                                        {c.companyName}
                                                    </div>
                                                    <div className="division-name">
                                                        {c.division}
                                                    </div>
                                                    <div className="periode">
                                                        {c.periode}
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}

function homeComp() {
    return <>

    </>
}
export default About;