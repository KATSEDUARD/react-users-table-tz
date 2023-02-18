import './styles.scss';
import { constants } from '../../constants/constants';
import { Form, InputGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { usersActions } from '../../store';

const {
    PERMISSIONS,
    DESCRIPTION,
    HEADER: { USERS, PLACEHOLDER },
} = constants;

const staticLayout = () => {
    return (
        <div className='static-layout pb-4'>
            <div className='static-layout-heading'>{PERMISSIONS}</div>
            <div className='static-layout-description'>{DESCRIPTION}</div>
        </div>
    );
};

const { searchUsers } = usersActions;

export const HeaderLayout = () => {
    const dispatch = useDispatch();
    const usersAmount = useSelector(state => state.usersAmount);

    const searchHandle = e => {
        dispatch(searchUsers(e.target.value));
    };

    return (
        <div className='header-layout pb-4'>
            {staticLayout()}
            <div className='control-panel'>
                <div className='users-info d-flex align-items-center'>
                    <div className='users-info d-flex align-items-center'>
                        <div className='users-info-title'>{USERS}</div>
                        <div className='users-info-amount'>{usersAmount}</div>
                    </div>
                </div>
                <div className='search-input d-flex align-items-center'>
                    <InputGroup>
                        <InputGroup.Text>
                        <i className="bi bi-search"></i>
                        </InputGroup.Text>
                        <Form.Control onChange={e => searchHandle(e)} size='md' placeholder={PLACEHOLDER} />
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};
