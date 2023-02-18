import './App.scss';
import { HeaderLayout } from './components/header/view';
import { TableLayout } from './components/table/view';
import { FooterLayout } from './components/footer/view';

export const App = () => {
    return (
        <div className='container-fluid'>
            <div className="app">
                <HeaderLayout />
                <TableLayout />
                <FooterLayout />
            </div>
        </div>
    );
};
