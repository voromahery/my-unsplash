import "./index.scss";
import Image from "next/image";

const Image = ({
  label = "Mario",
  imgUrl = "https://i.pinimg.com/originals/a7/87/88/a78788d285a647701307d615d5d2a08b.jpg",
}) => {
  return (
    <div>
      <div>
        <button>Delete</button>
        <h3>{label}</h3>
      </div>
      <Image src={imgUrl} alt={label} width={70} height={"auto"} />
    </div>
  );
};

export default Image;
