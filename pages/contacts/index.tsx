import MainLayout from '../../components/main';
import '../../styles/contact.scss'

const contacts = [
    {
        typeName: 'Email',
        contact: 'devraafi@gmail.com',
        redirect: 'mailto:devraafi@gmail.com'
    },
    {
        typeName: 'WhatsApp',
        contact: '+62 85156269394',
        redirect: 'https://wa.me/085156269394'
    },
    {
        typeName: 'Telegram',
        contact: 'https://t.me/muhammadraafi',
        redirect: 'https://t.me/muhammadraafi'
    },
]

export default function Contacts() {

    return (
        <div className={'container'} id="contacts-page">
            <MainLayout>
                <div className="container pt-5">
                    <div className="text-center title-page mb-3">
                        <label htmlFor=""> <span className="pb-1 border-bottom mb-2">C o n</span> t a c t s *</label>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="contact">
                                <div className="contact-icon w-50">
                                    <img src="/img/SVG/contact.svg" className="img-fluid" alt="" srcSet="" />
                                </div>
                                <ul>
                                    {
                                        contacts.map((c, i) => {
                                            return (
                                                <li className="contact mb-1" key={i}>
                                                    <div className="type-name">
                                                        {c.typeName}
                                                    </div>
                                                    <div className="the-contact my-3">
                                                        <a href={c.redirect} target="_blank" className="redirect-contact" rel="noopener noreferrer">
                                                            {c.contact}
                                                        </a>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}
