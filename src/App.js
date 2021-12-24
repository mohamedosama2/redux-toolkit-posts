import { motion } from "framer-motion";
import { Card, Container, Navbar } from "react-bootstrap";
import Section from "./Section";
function App() {
  const svgVarients = {
    hidden: { rotate: -180 },
    visible: {
      rotate: [0, -180, 0],
      transition: { duration: 3, yoyo: Infinity },
    },
  };
  const pathVarients = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: [1, 0],
      transition: { duration: 1, yoyo: Infinity },
    },
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <motion.svg
              variants={svgVarients}
              initial="hidden"
              animate={"visible"}
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="40"
              // viewBox="0 0 66 40"
              // viewBox="0 0 100 100"
              // preserveAspectRatio="xMinYMin meet"
              className="pizza-svg"
            >
              <motion.path
                variants={pathVarients}
                stroke="#999"
                d="M14.435 29.29c-2.364-3.065-3.703-7.39-3.703-12.06 0-4.25 1.121-8.261 3.156-11.295C16.021 2.752 18.907 1 22.013 1c2.831 0 5.53 1.492 7.601 4.2 1.955 2.558 3.227 6.047 3.58 9.826a24.983 24.983 0 0 0-2.591-1.243C29.6 7.776 26.064 3.411 22.013 3.411c-2.277 0-4.452 1.373-6.124 3.867-1.771 2.641-2.747 6.176-2.747 9.953 0 4.152 1.227 8.094 3.31 10.724a2.592 2.592 0 1 1-2.017 1.335zm18.443-12.781c-4.232-2.444-8.954-3.414-12.862-2.732a2.592 2.592 0 1 0 .733 2.317c3.289-.486 7.282.4 10.923 2.503 4.447 2.567 7.592 6.552 8.207 10.247.767.32 1.604.594 2.51.807-.236-4.8-3.919-9.915-9.511-13.142zm.639 19.98c-2.334.297-4.982-.074-7.586-1.048-.748.578-1.54 1.12-2.372 1.621 2.766 1.27 5.664 1.937 8.352 1.937.651 0 1.291-.039 1.912-.118 3.219-.409 5.77-1.861 7.237-4.105a22.276 22.276 0 0 1-2.45-.745c-1.129 1.317-2.898 2.179-5.093 2.458zm-2.581-9.472a2.592 2.592 0 1 0-2.151-1.105c-.493 1.186-1.216 2.373-2.138 3.504-1.426 1.748-3.301 3.32-5.422 4.545-2.961 1.711-6.15 2.629-9.083 2.628-.306 0-.61-.01-.91-.03-2.996-.201-5.272-1.398-6.411-3.369-2.018-3.496-.006-8.754 4.686-12.621a24.79 24.79 0 0 1-.21-2.594l-.133-.185c-3.056 2.197-5.406 5.033-6.619 7.983-1.285 3.126-1.218 6.188.188 8.622 1.553 2.689 4.514 4.313 8.337 4.57.351.023.706.035 1.064.035 3.355 0 6.97-1.03 10.296-2.951 3.965-2.288 7.009-5.556 8.506-9.032z"
              />
            </motion.svg>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Section trend={1} />
      <Section trend={2} />
      <Section trend={3} />
    </>
  );
}

export default App;
