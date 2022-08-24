import React, { useEffect, useRef, useState } from 'react'
import './Header.scss'
import { SearchIcon } from '../../assets/icons'
import HeadlessTippy from '@tippyjs/react/headless';
import SearchRequest from '../../utils/SearchRequest';
import { useDebounce } from '../../hooks'

const Search = () => {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const debouncedValue = useDebounce(searchValue, 500);


    const inputRef = useRef();

    useEffect(() => {
        // if (!debouncedValue.trim()) {
        //     setSearchResult([]);
        //     return;
        // }

        const fetchApi = async () => {
            // setLoading(true);

            // const result = await SearchRequest(debouncedValue);
            // console.log(result)
            // setSearchResult(result);
            // setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <HeadlessTippy
            interactive
            // visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className='' tabIndex="-1" {...attrs}>
                    <div>
                        <h4 className=''>Accounts</h4>
                        {searchResult.map((result) => (
                            <div key={result.id} data={result}>
                                helo
                            </div>
                        ))}
                    </div>
                </div>
            )}
        // onClickOutside={handleHideResult}
        >
            <div className='search-bar'>
                <input
                    placeholder='Search accounts and videos'
                    spellCheck={false}
                    value={searchValue}
                    ref={inputRef}
                    onChange={handleChange}
                />
                <span className='span-splitter' ></span>
                <button
                    className='search-btn'
                    onMouseDown={(e) => { e.preventDefault() }}>
                    <SearchIcon width='24px' height='24px' />
                </button>
            </div>
        </HeadlessTippy>

    )
}

export default Search