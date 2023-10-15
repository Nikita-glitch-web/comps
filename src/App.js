import Sidebar from './components/Sidebar';
import Route from './components/Route';
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from './pages/ButtonPage'
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePages';
import CounterPage from './pages/CounterPage';


function App() {
    return (
      <div className='containe mx-auto grid grid-cols-6 gap-4 mt-4'>
        <Sidebar />
        <div className='col-span-5'>
            <Route path="/accordion">
                <AccordionPage />
            </Route>
            <Route path="/">
                <DropdownPage />
            </Route>
            <Route path="/buttons">
                <ButtonPage />
            </Route>
            <Route>
                <ModalPage />
            </Route>
            <Route path="/table">
                <TablePage />
            </Route>
            <Route path="/counter">
                <CounterPage initialCount={10} />
            </Route>
        </div>
      </div>
    );
}

export default App;
//  популярный менеджер состояний в веб-приложениях. 