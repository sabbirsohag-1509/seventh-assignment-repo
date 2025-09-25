import React from 'react';
import Status from './Status';

const TaskStatus = ({progressTaskStatus}) => {
    console.log(progressTaskStatus)
    return (
        <div >
            <div className="w-[300px] bg-gray-200 p-4 rounded-lg mt-10">
                <h2 className="text-[27px] font-semibold text-center">Task Status</h2>
                <div> 
                    {
                      
                        progressTaskStatus.map((card) => <Status card={card}></Status>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TaskStatus;