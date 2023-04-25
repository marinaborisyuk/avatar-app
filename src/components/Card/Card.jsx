import style from './Card.module.css';

export const Card = ({cardData: {url, refreshAvatar, id}}) => {
  return (
    <div
      className={style.card}
      style={{backgroundImage: `url(${url})`}}
      onClick={() => refreshAvatar(id)}
    />
  );
};

export default Card;
