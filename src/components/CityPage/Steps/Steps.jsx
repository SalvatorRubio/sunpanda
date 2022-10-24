import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import firstStepImg from './img/first-step.png'
import secondStepImg from './img/second-step.png'
import thirdStepImg from './img/third-step.png'

import cn from "classnames";
import styles from "./Steps.module.css";

const Steps = () => {
    return (
        <div className={cn('w-100', styles.wrapper__steps)}>
            <Container >
                <Row xs={1} md={3} sm={2}  className="align-items-center flex-wrap justify-content-center h-100" style={{minHeight: 400}}>
                    <Col className="d-flex align-items-center justify-content-center">
                        <img className={cn("me-3", styles.steps__img)} src={firstStepImg} alt="1"/>
                        <h1 className="fw-bolder" style={{minWidth: 250}}>
                            Выбери ресторан
                        </h1>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <img className={cn("me-3", styles.steps__img)} src={secondStepImg} alt="2"/>
                        <h1 className=" fw-bolder" style={{minWidth: 250}}>
                            Добавь в корзину
                        </h1>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <img className={cn("me-3", styles.steps__img)} src={thirdStepImg} alt="3"/>
                        <h1 className=" fw-bolder" style={{minWidth: 250}}>
                            Оформи заказ
                        </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Steps;