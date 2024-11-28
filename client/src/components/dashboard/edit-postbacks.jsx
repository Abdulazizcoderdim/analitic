import { useParams } from 'react-router-dom';

const EditPostbacks = () => {
  const { id } = useParams();

  return (
    <div>
      {id}
      EditPostbacks
    </div>
  );
};

export default EditPostbacks;
