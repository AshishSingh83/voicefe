import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/shared/Card/Card";
import { Button } from "../../components/shared/Button/Button";
export const Home = () => {
  const navigate = useNavigate();
  function startRegister() {
    navigate("/Authenticate");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="welcome to Codershouse" icon="Emoji">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks :
        </p>
        <div>
          <Button onClick={startRegister} text="Let's Go"></Button>
        </div>
      </Card>
    </div>
  );
};
