const Paginator = ({ page, setPage, info }) => {

    const goNext = () => {
        if (info.next) {
            setPage(actual => actual + 1);
        }
    };
/*************  ✨ Codeium Command ⭐  *************/
    /**
     * Go back to the previous page of characters, if there is one.
     * 
     * @function
     */
/******  1015bfa1-ff3e-4cd1-b64e-c1f1aa942725  *******/
    const goBack = () => {
        if (info.prev) {
            setPage(actual => actual - 1);
        }
    };

    return (
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" onClick={goBack} disabled={!info.prev}>
                        Previous
                    </button>
                </li>
                <li className="page-item disabled">
                    <span className="page-link">{page}</span>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={goNext} disabled={!info.next}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Paginator;
