import React from 'react';

const Pagination = ({ productPerPage, totalProduct, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='flex justify-center mb-8 mt-5'>
            <div className="btn-group">
                {
                    pageNumbers?.map(number =>
                        <button onClick={() => paginate(number)} key={number} className="btn btn-secondary btn-sm mx-2">{number}</button>

                    )
                }
            </div>
        </div>
    );
};

export default Pagination;