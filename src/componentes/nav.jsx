const MenuNav = () => {
  return (
    <nav>
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Item #1
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul>
                        <li><a href="##">title 1</a></li>
                        <li><a href="##">title 2</a></li>
                        <li><a href="##">title 3</a></li>
                        <li><a href="##">title 4</a></li>
                        <li><a href="##">title 5</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Item #2
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul>
                        <li><a href="##">title 1</a></li>
                        <li><a href="##">title 2</a></li>
                        <li><a href="##">title 3</a></li>
                        <li><a href="##">title 4</a></li>
                        <li><a href="##">title 5</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Item #3
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul>
                        <li><a href="##">title 1</a></li>
                        <li><a href="##">title 2</a></li>
                        <li><a href="##">title 3</a></li>
                        <li><a href="##">title 4</a></li>
                        <li><a href="##">title 5</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    Item #4
                </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul>
                        <li><a href="##">title 1</a></li>
                        <li><a href="##">title 2</a></li>
                        <li><a href="##">title 3</a></li>
                        <li><a href="##">title 4</a></li>
                        <li><a href="##">title 5</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                    Item #5
                </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul>
                        <li><a href="##">title 1</a></li>
                        <li><a href="##">title 2</a></li>
                        <li><a href="##">title 3</a></li>
                        <li><a href="##">title 4</a></li>
                        <li><a href="##">title 5</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                    Item #6
                </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <ul>
                        <li><a href="##">title 1</a></li>
                        <li><a href="##">title 2</a></li>
                        <li><a href="##">title 3</a></li>
                        <li><a href="##">title 4</a></li>
                        <li><a href="##">title 5</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</nav>
  );
}
export default MenuNav;