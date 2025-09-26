import React from 'react';
import Status from './Status';
import ResolvedTask from './ResolvedTask';

const TaskStatus = ({progressTaskStatus,handleCompleteBtn,resolveStatus}) => {
    // console.log(progressTaskStatus)
    // console.log(resolveStatus)
    return (
        <div >
            <div className="w-full bg-gray-200 p-4 rounded-lg mt-10">
                <h2 className="text-[27px] font-semibold text-center">Task Status</h2>
                

                {
                    progressTaskStatus.length === 0 &&(
                        <h3 className="text-center text-gray-600 mt-2">
                        Select a ticket to add to Task Status
                         </h3>
                    )
                }

                <div> 
                    {
                        
                      
                     progressTaskStatus.map((card) => <Status handleCompleteBtn={handleCompleteBtn} key={card.id} card={card}></Status>)
                    }
                </div>
            </div>

               {/* ********         RESOLVED-TASK-STATUS ******** */}

            <div> 
                <div className="w-full bg-gray-200 p-4 rounded-lg mt-5"> 
                    <h2 className="text-[20px] font-semibold text-center">Resolved Task Status</h2>

                    {
                    resolveStatus.length === 0 &&(
                        <h3 className="text-center text-gray-600 mt-2">
                        Incorrect Billing Address
                         </h3>
                        )
                     }

                     <div> 
                        {
                            resolveStatus.map((resolved) => <ResolvedTask resolved={resolved}></ResolvedTask>)
                        }
                     </div>
                </div>
            </div>
        </div>
    );
};

export default TaskStatus;