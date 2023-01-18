import React from "react"; // сокращение imr
import _ from "lodash"; // библиотека
import PropTypes from "prop-types"; // impt

// sfc = ()=>{} сокращение пустой функции + export

// cpf ()=>{}
const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    // делим количество юсеров на 4 места и получаем страницы
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null; // если объектов на 1 страницу - она убирается
    const pages = _.range(1, pageCount + 1); // из чисел делаем массив, библиотека лодаш
    //   console.log(pages);
    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            "page-item" +
                            (page === currentPage ? " active" : "")
                        }
                        key={"page_" + page}
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
