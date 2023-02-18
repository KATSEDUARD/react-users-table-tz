import { useSelector, useDispatch } from 'react-redux';
import { constants } from '../../constants/constants';
import { Form } from 'react-bootstrap';
import './styles.scss';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Highlighter from "react-highlight-words";
import { usersActions } from '../../store';

const { TABLE_HEADERS } = constants;

const renderTableHeader = (sortHandle, sortBy) => {
    return <div className="table-custom-header">
        <div className="table-custom-row">
        {TABLE_HEADERS.map((header, index) => 
            <div className="header-cell" key={header}>{index === 0 ? <div>{header}
            <i onClick={sortHandle} className={`cursor-pointer ps-1 bi bi-sort-${sortBy === 'asc' ? 'down' : 'up'}`}></i></div> : header}</div>
        )}
        </div>
    </div>;
};

const renderTableBody = (users, searchRequest) => {
    return <div className="table-custom-body">
        {users.map(user => <div key={user.id} className="table-custom-row">
            <div className="table-custom-row-cell"><i className="fas fa-user pe-1"></i>
            <Highlighter
                highlightClassName="highlight"
                searchWords={[searchRequest]}
                autoEscape={true}
                textToHighlight={user.name}
            /></div>
            <div className="table-custom-row-cell"><Form.Check aria-label="view" /></div>
            <div className="table-custom-row-cell"><Form.Check aria-label="execute" /></div>
            <div className="table-custom-row-cell"><Form.Check aria-label="modify" /></div>
            <div className="table-custom-row-cell"><Form.Check aria-label="delete" /></div>
            <div className="table-custom-row-cell"><i className="cursor-pointer bi bi-three-dots"></i></div>
        </div>)}
    </div>;
}

export const TableLayout = () => {
    const dispatch = useDispatch();
    const { filteredUsers, searchRequest, sortBy } = useSelector(state => state);
    const { sortUsers } = usersActions;

    const sortHandle = () => {
        dispatch(sortUsers());
    };

    return <div className="table-layout pb-4">
        <div className="table-custom">
            {renderTableHeader(sortHandle, sortBy)}
            <Scrollbars 
                style={{ width: '100%', height: 400 }}
                renderTrackVertical={({ style, ...props }) =>
                <div {...props} style={{ 
                  ...style,
                  width: '6px',
                  height: '100%',
                  borderRadius: 4,
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  right: 0,
                }}/>}

                renderThumbVertical={({ style, ...props }) =>
                <div {...props} style={{ 
                  ...style,
                  width: '6px',
                  borderRadius: 4,
                  backgroundColor: 'rgba(41, 40, 40, 1)',
                  right: 0,
                }}/>}
                >
                {renderTableBody(filteredUsers, searchRequest)}
            </Scrollbars>
        </div>
  </div>;
}