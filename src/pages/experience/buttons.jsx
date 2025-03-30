import { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./buttons.css";

function Buttons() {
  return (
    <div className="app-wrapper">
      <SlideTabs />
    </div>
  );
}

const SlideTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0); // domyślnie pierwszy tab aktywny
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 1,
  });

  const tabsRef = useRef([]);

  const handleSetPosition = (index) => {
    const ref = tabsRef.current[index];
    if (ref) {
      const { width } = ref.getBoundingClientRect();
      setPosition({
        left: ref.offsetLeft,
        width,
        opacity: 1,
      });
    }
  };

  return (
    <ul
      className="tabs-container"
      onMouseLeave={() => handleSetPosition(activeIndex)} // po wyjechaniu myszką wracamy do aktywnego
    >
      {["Home", "Pricing", "Features", "Docs", "Blog"].map((label, index) => (
        <li
          key={label}
          ref={(el) => (tabsRef.current[index] = el)}
          className="tab"
          onClick={() => {
            setActiveIndex(index);
            handleSetPosition(index);
          }}
          onMouseEnter={() => handleSetPosition(index)}
        >
          {label}
        </li>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="tab"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return <motion.li animate={{ ...position }} className="cursor" />;
};

export default Buttons;
