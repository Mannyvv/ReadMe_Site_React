import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import BookCard from "./BookCard"; // Import the BookCard component

const AnimatedBookCard = ({ book }) => {
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1, 1)" : "scale(1, 0)",
    config: { duration: 500 },
  });

  useEffect(() => {
    // Set toggle to true to trigger the animation when the component is mounted
    setToggle(true);
  }, []);

  return (
    <animated.div style={animatedStyle}>
      <BookCard book={book} />
    </animated.div>
  );
};

export default AnimatedBookCard;
