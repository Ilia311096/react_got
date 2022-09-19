import React, { useState } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import { Header } from "../header/header";
import { RandomChar } from "../randomChar/randomChar";
import CharPage from "../charPage/charPage";
import BookPage from "../bookPage/bookPage";
import HousePage from "../housePage/housePage";
import { BookItem } from "../bookItem/bookItem";
import "./app.css";
import GotService from "../../services/service";
import { ServiceWrap } from "../serviceWrap/serviceWrap";
import { store } from "../../store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  const gotService = new GotService();

  const [randomChar, setRandomChar] = useState(true);
  const toggleChar = () => {
    setRandomChar(!randomChar);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ServiceWrap.Provider value={gotService}>
          <div className="app">
            <Container>
              <Header />
            </Container>
            <Container>
              <Row>
                <Col lg={{ size: 5, offset: 0 }}>
                  {randomChar ? <RandomChar /> : null}
                  <Button color="primary" onClick={toggleChar}>
                    Click for toggle
                  </Button>
                </Col>
              </Row>
              <Routes>
                <Route path="/" element={<CharPage />} />
                <Route path="/characters" element={<CharPage />} />
                <Route path="/books" element={<BookPage />}>
                  <Route path=":bookId" element={<BookItem />} />
                </Route>
                <Route path="/houses" element={<HousePage />} />
              </Routes>
            </Container>
          </div>
        </ServiceWrap.Provider>
      </BrowserRouter>
    </Provider>
  );
};
