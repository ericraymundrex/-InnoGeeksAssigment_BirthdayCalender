import Date from './Date/Date'
import styles from './ListElement.module.css'
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

const ListElement=(props)=>{
    let {name,birthday,img}=props;
    const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
    return(
        
        <div className={styles.birthday_item}>
            <img src={images[img]} alt="person"/>
            <h2 className={styles.birthday_item__name}>{name}</h2>
            <div className={styles.birthday_item__date}><Date date={birthday}/></div>
        </div>
    )
}

export default ListElement