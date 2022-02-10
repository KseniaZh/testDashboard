import React from 'react';
import RowTableDashboard from './RowTableDashboard';
import ButtonIcon from '../../UI/Buttons/ButtonIcon';


function TableDashboard(props) {


    return(
        <div className='dashboard__table containers_wrapper'>
            <table>
                  <thead>
                    <tr className='dashboard__table__thead'>
                        <th></th>
                        <th>
                            <span>name</span>
                            <ButtonIcon
                                icon={props.icon}
                                onclick={props.handlerSort}
                                data='name'
                                classnameWrapper='dashboard__table__thead__sortButton'
                                classnameIcon='dashboard__table__thead__sortButton_icon'
                            />
                        </th>
                        <th>
                            <span>type</span>
                            <ButtonIcon
                                icon={props.icon}
                                onclick={props.handlerSort}
                                data = 'type'
                                classnameWrapper='dashboard__table__thead__sortButton'
                                classnameIcon='dashboard__table__thead__sortButton_icon'
                            />
                        </th>
                        <th>
                            <span>status</span>
                            <ButtonIcon
                                icon={props.iconStatus}
                                onclick={props.handlerSortStatus}
                                data='status'
                                classnameWrapper='dashboard__table__thead__sortButton'
                                classnameIcon='dashboard__table__thead__sortButton_icon'
                            />
                        </th>
                        <th>
                            <span>site</span>
                            <ButtonIcon
                                icon={props.icon}
                                onclick={props.handlerSort}
                                data = 'site'
                                classnameWrapper='dashboard__table__thead__sortButton'
                                classnameIcon='dashboard__table__thead__sortButton_icon'
                            />
                        </th>
                        <th></th>
          
                    </tr>
                  </thead>
                <tbody className='dashboard__table__tablebody'>
                    {
                        props.stateTests.map((item, index) => {
                            return <RowTableDashboard
                                key={`${index}${item.id}`}
                                stateTests={item}
                                stateSites={props.stateSites}
                            />
                        })
                    }
                    
                 </tbody >
                   
            </table>

            
    </div>
    )
}

export default TableDashboard