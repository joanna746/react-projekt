import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import {toggleCartFavorite} from '../../redux/store'
import clsx from 'clsx';
import { useState } from 'react';

const Card = (props) => {
    const dispatch = useDispatch();
    const cardId = props.id;
    
    const [isFavorite,setFavorite] = useState();
  

    const handleSubmit =()  => {
        if(isFavorite === false) {
            setFavorite(true);
          } else {
            setFavorite(false);
          }
        
        dispatch(toggleCartFavorite(cardId));
        
        
        
    };


    return (
        <li className={styles.card}>{props.title}
        <span onClick={() => handleSubmit(props.id, props.isFavourite, props.title)} className={clsx(styles.button, props.isFavourite && styles.active) }>
                <span className='fa fa-star-o' />
            </span>
        
        
        </li>

        
    );
};

export default Card;