import { AnimatePresence, Reorder, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add, getData, selectUsers, selectInfo } from "./store/userSlice";
export default function Section({ trend }) {
  const [items, setItems] = useState([
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "info",
  ]);
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const info = useSelector(selectInfo);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <div className="p-3 ">
      <h2 className="font-5 ml-3 mb-3 color-white"> #{trend}</h2>
      <Reorder.Group
        values={items}
        axis={"x"}
        onReorder={setItems}
        className="d-flex justify-space-around"
      >
        {items.map((item, index) => (
          <Reorder.Item key={item} value={item} style={{ listStyle: "none" }}>
            <Card
              bg={item.toLowerCase()}
              text={item.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header className="d-flex justify-space-around align-center">
                <h5>Compeition</h5>
                <div className="d-flex align-center"></div>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  {" "}
                  Drag {info && info[index] ? info[index] : ""}{" "}
                </Card.Title>

                <section className="d-flex f-wrap">
                  {users.list[trend][index].map((user, i) => (
                    <AnimatePresence exitBeforeEnter key={i}>
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <Image
                          src="https://www.pngall.com/wp-content/uploads/8/Young-Man-PNG-Image.png"
                          roundedCircle
                          className="width-1"
                        />
                      </motion.div>
                    </AnimatePresence>
                  ))}

                  <Button
                    variant="dark"
                    className="ml-2"
                    onClick={() => dispatch(add({ trend, index }))}
                  >
                    +
                  </Button>
                </section>
              </Card.Body>
            </Card>
          </Reorder.Item>
        ))}{" "}
        {items.length !== 5 && (
          <Button variant="primary" size="lg" active>
            Add One
          </Button>
        )}
      </Reorder.Group>
    </div>
  );
}
