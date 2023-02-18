import { constants } from '../../constants/constants';
import { CustomButton } from '../utilities/custom-button/view';

const { SAVE } = constants;

export const FooterLayout = () => {
    return <CustomButton label={SAVE} width={200} />
};