import Tagline from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className || ""} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <Tagline>{tag}</Tagline>}
      {title && <h2 className="h2 text-center">{title}</h2>}
      {text && (
        <p
          className="body-4 mt-4
      
      
      text-n-4 text-center"
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default Heading;
