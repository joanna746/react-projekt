import { useSelector } from "react-redux";
import Card from '../Card/Card'
import PageTitle from "../PageTitle/PageTitle";
import { getFavouriteCards } from "../../redux/store";
import styles from './Favourite.module.scss';





const Favourite = ()=>{
const favouriteCard = useSelector(getFavouriteCards);
console.log(favouriteCard)
if (favouriteCard.length === 0) 
    return ( 
      <div>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>No cards </p>
      </div>
    );
return(
    <div>
<PageTitle>Favourite</PageTitle>

<ul className={styles.cards}>
            {favouriteCard.map(card => <Card className ="title" key={card.id} title={card.title} id={card.id} isFavourite= {card.isFavourite} />)}
                    
                </ul>
                          
</div>
    )
}
export default Favourite;