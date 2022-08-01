
import MenuNav from "./nav";

const Modalnav = () => {
    return (

        <section className="modal-nav">
            <button type="button" className="mb-5 btn-modal-nav" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <i className="fa-solid fa-chalkboard-user"></i>
            </button>

            <div className="modal fade container-sm" id="exampleModal" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog row">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           <MenuNav/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Modalnav;