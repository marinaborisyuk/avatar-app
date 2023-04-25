import style from './AddCardBtn.module.css';

const AddCardBtn = ({addCard}) => {
  return <button className={style.card} onClick={addCard} />;
};

export default AddCardBtn;
