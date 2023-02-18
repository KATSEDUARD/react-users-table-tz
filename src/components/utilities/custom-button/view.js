import './styles.scss';

export const CustomButton = ({ label, width, onClick }) => {
    return <div style={{ width }} onClick={onClick} className='custom-button'>{label}</div>
}