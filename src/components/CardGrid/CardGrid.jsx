import Card from '../Card/Card';

const CardGrid = ({avatarsData: {avatars, refreshAvatar}}) => {
  return (
    <>
      {avatars.map(({id, url}) => (
        <Card key={id} cardData={{url, refreshAvatar, id}} />
      ))}
    </>
  );
};

export default CardGrid;
