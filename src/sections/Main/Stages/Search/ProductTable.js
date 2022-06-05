import './SearchStyle.css';
import ProductRow from "./ProductRow";

function ProductTable(props) {
    let rows = [];
    props.data.forEach((quiz, i) => {
        if (!quiz.title.toLowerCase().includes(props.searchFor.toLowerCase()))
            return;
        if (props.onlyUnlocked && quiz.password !== '')
            return;
        rows.push(<ProductRow select={props.select} title={quiz.title} password={quiz.password} description={quiz.description} key={i} id={quiz.id}></ProductRow>);
    })

    return (
        <div className="quizTable">
            {rows}
        </div>
    );
}

export default ProductTable;