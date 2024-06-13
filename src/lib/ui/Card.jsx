import React from "react";

let $root =
  import.meta.env.VITE_IS_PRODUCTION == "true"
    ? `${import.meta.env.VITE_PRODUCTION_BASE_URL}/public/image/`
    : "/public/image/";
const CARD_IMAGE_DEFAULT = "no-img.jpg"; // Default image placeholder

const Card = ({
  title,
  content,
  image = CARD_IMAGE_DEFAULT,
  isNew = false,
  isTag = null,
}) => {
  const patch_image = `${$root}/${image}`;
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

    if (!patch_image) {
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
        <img src={patch_image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="nunito card-title font-bold capitalize">
          {patch_image == CARD_IMAGE_DEFAULT
            ? "dumbass need some image!"
            : title}
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
