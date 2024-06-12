import React, { useState, useRef, useEffect } from "react";

const Textarea = ({
  name,
  id,
  maxLength = 300,
  placeholder = "Leave comments...",
}) => {
  const textAreaRef = useRef(null);
  const [characterCount, setCharacterCount] = useState(0);

  const handleCharacterChange = () => {
    const currentLength = textAreaRef.current.value.length;
    setCharacterCount(currentLength);
  };

  useEffect(() => {
    const handleResize = () => {
      handleCharacterChange(); // Update count on resize
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <label className="form-control" htmlFor={id}>
      <div className="label">
        <span className="nunito label-text font-medium">{name}</span>
      </div>
      <textarea
        id={id}
        name={id}
        ref={textAreaRef}
        onChange={handleCharacterChange}
        className="roboto-mono roboto-mono textarea textarea-bordered h-24"
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <div className="label">
        <span className="roboto-mono label-text-alt font-normal">
          {characterCount}/{maxLength}
        </span>
      </div>
    </label>
  );
};

export default Textarea;
