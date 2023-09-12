import {Route , HashRouter as Router, Routes} from 'react-router-dom'

import { Home } from './pages/Home';
import { MailIndex } from './pages/MailIndex';
import { MainHeader } from './cmps/ui_cmps/MainHeader';
import { About } from './pages/About';
import { MailDetails } from './pages/MailDetails';


export function App() {
    
    return (
        <Router>
            <section className='main-app'>
                <MainHeader/>
                <main className='container'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/mail' element={<MailIndex/>}>
                        {/* <Route path='/mails/inbox' element={<MailList/>}/>  */}
                    </Route>
                    <Route path='/mail/:mailID' element={<MailDetails/>}/>
                </Routes>
                </main>

                <footer>
                    <section className="container">
                        DZ Rights 2023 &copy;
                    </section>
                </footer>
            </section>

        </Router>


    )
}

