import { Scrollbars } from 'react-custom-scrollbars-2';

export const CustomScrollBar = props => {
    return <Scrollbars
        renderTrackVertical={props => <div {...props} className="track-vertical"/>}
        renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
        renderView={props => <div {...props} className="view"/>}>
        {props.children}
    </Scrollbars>
}