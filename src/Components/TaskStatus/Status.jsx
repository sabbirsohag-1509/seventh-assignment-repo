import React from 'react';

const Status = ({task}) => {
    return (
        <div>
            <h1>{task.title}</h1>
            <button className="$$btn $$btn-success">Complete</button>
        </div>
    );
};

export default Status;