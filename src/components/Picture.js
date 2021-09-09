import { Card } from '../styles/Picture.style';

const Picture = ({ picture, like, unlike }) => {
  return (
    <Card>
      <figure>
        <img src={picture.url} alt={picture.title} />
        <button onClick={like}>Like</button>
        <button onClick={unlike}>Unlike</button>
        <figcaption>
          {picture.title} - {picture.date}
        </figcaption>
        <p>{picture.explanation} </p>
      </figure>
    </Card>
  );
};

export default Picture;
