import useDetails from "../store/useDetails";

const DetailPreview = () => {
  const details = useDetails();

  return (
    <div className="preview">
      {details && (
        <>
          <h1>Details</h1>
          <div>
            <b>ID:</b> {details.id}
          </div>
          <div>
            <b>Article number:</b> {details.articleNum}
          </div>
          <div>
            <b>Name:</b> {details.name}
          </div>
          <div>
            <b>Description:</b> {details.description}
          </div>
          <br />
          <img src={details.image} />
        </>
      )}
    </div>
  );
};

export default DetailPreview;
