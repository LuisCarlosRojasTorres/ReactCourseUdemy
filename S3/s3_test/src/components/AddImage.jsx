import Hero from "../assets/Hero.png";

const AddImage = () => {
  return (
    <div>
      <h1>S3 More content!</h1>
            {/* Local image from public folder */}
            <img src="/totodile.png" alt="Placeholder" />
            {/* Imported image from assets */}
            <img src={Hero} alt="Placeholder" />
    </div>
  );
};

export default AddImage;