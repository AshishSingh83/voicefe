
import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../http";
import styles from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";

const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };

  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  //console.log(user.activated);
  async function logoutUser() {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>Codershouse</span>
      </Link>
      {isAuth && (
        <div className={styles.navRight}>
          <h3>{user?.name}</h3>
          <div className={styles.tooltipContainer}>
            <Link to="/">
              <img
                className={styles.avatar}
                src={user.avatar ? user.avatar : "/images/monkey-avatar.png"}
                width="40"
                height="40"
                alt="avatar"
              />
            </Link>
            {user.activated && <span className={styles.tooltip}>Edit Profile</span>}
          </div>
          <div  className={styles.tooltipContainer}>
            <button className={styles.logoutButton} onClick={logoutUser}>
              <img
                className={styles.avatarb}
                src="/images/logout.png"
                alt="logout"
              />
            </button>
            <span className={styles.tooltip}>Logout</span>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navigation;