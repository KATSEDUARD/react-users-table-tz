import './App.scss';
import { HeaderLayout } from './components/header/view';
import { TableLayout } from './components/table/view';
import { FooterLayout } from './components/footer/view';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { usersActions } from './store';

const { loadData } = usersActions;

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadData());    
    }, []);

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
