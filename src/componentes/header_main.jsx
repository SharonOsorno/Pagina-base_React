const HeaderMain = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="##">
                        <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="##">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="##">Info 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="##">Info 3</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="##">Info 4</a>
                            </li>
                        </ul>
                        <form className="d-flex form_search" role="search">
                            <input className="me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderMain;
