import './styles.scss';

export const CustomButton = ({ label, width }) => {
    return <div style={{ width }} className='custom-button'>{label}</div>
}