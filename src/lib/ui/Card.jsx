import React from "react";

const CARD_IMAGE_DEFAULT = "/image/no-img.jpg"; // Default image placeholder

const Card = ({
  title,
  content,
  image = CARD_IMAGE_DEFAULT,
  isNew = false,
  isTag = null,
}) => {
  // Input Validation
  const validateInput = () => {
    let isValid = true;
    const errors = [];

    if (!title || title.trim() === "") {
      isValid = false;
      errors.push("Title is required and cannot be empty.");
    }

    if (!content || content.trim() === "") {
      isValid = false;
      errors.push("Content is required and cannot be empty.");
    }

    if (!image) {
      isValid = false;
      errors.push("Image URL must be a valid http(s) address.");
    }

    // Handle additional validations for isTag (if needed)

    return { isValid, errors };
  };

  const { isValid, errors } = validateInput();

  if (!isValid) {
    return (
      <div className="card-error">
        <h2>Error: Card Validation Failed</h2>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  // Render valid card content
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="nunito card-title font-bold capitalize">
          {image == CARD_IMAGE_DEFAULT ? "dumbass need some image!" : title}
          {isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{content}</p>
        {isTag && (
          <div className="card-actions justify-end">
            {Array.isArray(isTag) ? (
              isTag.map((name) => (
                <div className="badge badge-outline" key={name}>
                  {name}
                </div>
              ))
            ) : typeof isTag === "string" ? (
              <div className="badge badge-outline" key={isTag}>
                {isTag}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
