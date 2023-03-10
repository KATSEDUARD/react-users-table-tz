import { useSelector, useDispatch } from 'react-redux';
import { constants } from '../../constants/constants';
import { Form } from 'react-bootstrap';
import './styles.scss';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Highlighter from "react-highlight-words";
import { usersActions } from '../../store';
import { Dropdown } from 'react-bootstrap';
import React from 'react';

const { TABLE_HEADERS, CHECK_ALL, REMOVE_ALL } = constants;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
      <i className="cursor-pointer bi bi-three-dots"></i>
      {children}
    </div>
));

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

const renderTableBody = (users, searchRequest, onChangeHandle, checkHandle) => {
    return <div className="table-custom-body">
        {users.map(user => <div key={user.id} className="table-custom-row">
            <div className="table-custom-row-cell"><i className="fas fa-user pe-1"></i>
            <Highlighter
                highlightClassName="highlight"
                searchWords={[searchRequest]}
                autoEscape={true}
                textToHighlight={user.name}
            /></div>
            {user.permissions.map((permission, index) => 
                <div key={index} className="table-custom-row-cell"><Form.Check checked={permission.status} onChange={() => onChangeHandle({ id: user.id, type: permission.permission })} aria-label={permission.permission} /></div>)}
            <div className="table-custom-row-cell">
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => checkHandle({ type: 'check', id: user.id })} href="#/check-all">{CHECK_ALL}</Dropdown.Item>
                        <Dropdown.Item onClick={() => checkHandle({ type: 'remove', id: user.id })} href="#/remove-all">{REMOVE_ALL}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>)}
    </div>;
}

const { sortUsers, checkActions, checkListener } = usersActions;

export const TableLayout = () => {
    const dispatch = useDispatch();
    const { filteredUsers, searchRequest, sortBy } = useSelector(state => state);

    const sortHandle = () => {
        dispatch(sortUsers());
    };

    const onChangeHandle = payload => {
        dispatch(checkActions(payload));
    };

    const checkHandle = payload => {
        dispatch(checkListener(payload));
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
                {renderTableBody(filteredUsers, searchRequest, onChangeHandle, checkHandle)}
            </Scrollbars>
        </div>
  </div>;
}