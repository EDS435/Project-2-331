import React from 'react';

const teamMember = (props) => {
    return (
        <li className='list-group-item'
            key={props.index}>
            { props.character.name }
            <button
                type="button"
                className="btn btn-danger float-right"
                onClick={() => props.removeCharacter(props.character.id)}>
                Delete
            </button>
        </li>
    );
};

export default teamMember;