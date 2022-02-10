import React, { useEffect} from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import ButtonIcon from '../../UI/Buttons/ButtonIcon';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InputSearch from '../../UI/InputSearch';
import Counter from '../../UI/Counter';
import { changeValue } from '../store/actionsSearch';

const Search = (props) => {
    const dispatch = useDispatch();

    const value = useSelector(state => state.stateSearch.value);

    const stateTable = [...props.stateInitial];
  
    const handlerSearch = (event) => {
        event.preventDefault();
  
        dispatch(changeValue(event.target.value)); //текст в input

        const stateTableFilter = stateTable.filter(obj => {
            let a = obj[props.searchKey].toUpperCase(); // имя из state
            let b = event.target.value.toUpperCase(); // значение input
            return a.indexOf(b) == 0
        })
        
        props.saveSearch(stateTableFilter);   
    }
    const onclick = () => {
        console.log('search click')
    }
    const tabindex = 1;

    useEffect(() => {
        
        if (value === '') {
            props.searchReset();
        }
    }, [value])

    return (
        <div className='dashboard__search'>
            <ButtonIcon
                icon={faSearch}
                onclick={onclick}
                classnameWrapper='dashboard__search__button'
                classnameIcon='dashboard__search__button_icon'
            />
            <InputSearch
                type='text'
                value={value}
                onchange={handlerSearch}
                placeholder='What test are you looking for?'
                tabindex={tabindex}
                classname='dashboard__search__input'
            />
            <Counter
                counter={props.counter}
                name={props.counter == 1 ? 'test' : 'tests'}
                classname='dashboard__search__counter'
            />
        </div>
    )
}
export default connect()(Search)