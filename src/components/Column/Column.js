import styles from "./Column.module.scss";
import Card from "../Card/Card";
import CardForm from "../CardForm/CardForm";
import { useSelector } from "react-redux";


function Column(props) {
    const searchString = useSelector(state => state.searchString);
    console.log(searchString);
    const cards = useSelector(state => state.cards).filter(card => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toString().toLowerCase()));
    console.log( cards);
    
  
    
    return (
        <>
            <article className={styles.column}>
                <h3 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h3>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} title={card.title} />)}
                </ul>

                <CardForm columnId={props.id} action={props.action} />
            </article></>
    );
}


export default Column;