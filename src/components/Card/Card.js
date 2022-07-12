import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import {toggleCartFavourite} from '../../redux/cardsReducer'
import clsx from 'clsx';
import { useState } from 'react';
import { removeCard } from '../../redux/cardsReducer';


const Card = (props) => {
    const dispatch = useDispatch();
    const cardId = props.id;
    
    
    const [isFavourite,setFavourite] = useState(props.isFavourite);
  

    const handleSubmit =()  => {
        if(isFavourite === false) {
            setFavourite(true);
          } else {
            setFavourite(false);
          }
        
        dispatch(toggleCartFavourite(cardId));
        
        
        
    };
    const removedCard = e => {
        e.preventDefault()
        dispatch(removeCard(cardId))
    };


    return (
        <li className={styles.card}>{props.title}
        <span onClick={() => handleSubmit(props.id, props.isFavourite, props.title)} className={clsx(styles.button, props.isFavourite && styles.active) }>
                <span className='fa fa-star-o' />
            </span>
            <span onClick={removedCard} className={styles.button}>
                <span className='fa fa-trash' />
            </span>
        
        </li>

        
    );
};

export default Card;