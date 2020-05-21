import React from 'react';
import s from '../Users.module.css'

let ChooserPage = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (
        let i = props.currentPage > 1 ? props.currentPage - 1 : props.currentPage;
        i <= (props.currentPage <= pagesCount - 2 ? props.currentPage + 2 : props.currentPage);
        i++
    ) {
        pages.push(i);
    }

    return (
        <div>
            {
                pages.map(page =>
                    <span onClick={() => props.choosePage(page)} key={page}>
                            <span> </span>
                            <span className={page === props.currentPage ? s.selectedPage : undefined}>{page}</span>
                            <span> </span>
                        </span>
                )
            }
            {
                props.currentPage < pagesCount - 2 ? (
                    <span onClick={() => props.choosePage(pagesCount)}>
                        <span>...</span>
                            <span>{pagesCount}</span>
                        </span>
                ) : null
            }
        </div>


    );
};

export default ChooserPage;