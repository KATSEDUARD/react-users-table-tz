import { constants } from '../../constants/constants';
import { CustomButton } from '../utilities/custom-button/view';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../../store';
import { ToastContainer } from 'react-toastify';

const { SAVE } = constants;
const { save } = usersActions;

export const FooterLayout = () => {
    const dispatch = useDispatch();
    const rulesToSave = useSelector(state => state.rulesToSave);
    
    const onClickHandle = () => {
        dispatch(save(rulesToSave));
    };

    return <div className="footer-layout">
        <CustomButton onClick={onClickHandle} label={SAVE} width={200} />
        <ToastContainer position="bottom-center" theme="light" />
    </div>
};