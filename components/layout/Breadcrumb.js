import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            {/*Page Header Start*/}
            <section className="page-header">
                <div
                className="page-header__bg"
                style={{
                    backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)"
                }}
                ></div>
                <div className="container">
                <div className="page-header__inner">
                    <h2>{breadcrumbTitle}</h2>
                    <div className="thm-breadcrumb__box">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li>
                        <Link href="/">Home</Link>
                        </li>
                        <li>
                        <span className="icon-angle-left" />
                        </li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
            {/*Page Header End*/}

        </>
    )
}
