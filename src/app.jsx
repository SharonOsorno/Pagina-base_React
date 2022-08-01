import React from 'react';
import HeaderMain from './componentes/header_main';
import Main from './componentes/main';
import Footer from './componentes/footer'
import Modalnav from './componentes/modal-nav';
import MenuAside from './componentes/menu_aside';


const App = () => {
    return (
        <section>
            <HeaderMain></HeaderMain>
            <div class="d-flex">
                <section>
                    <Main></Main>
                    <Footer></Footer>
                    <Modalnav></Modalnav>
                </section>
                <MenuAside></MenuAside>    
                        </div>
        </section>

    );
}
export default App;
