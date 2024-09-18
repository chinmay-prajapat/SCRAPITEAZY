import styles from "@/app/styles/navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navParent}>
      <div>
        <h2>SCRAPITEAZY</h2>
      </div>

      <div className={styles.navItems}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Company</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <button>Request Pickup</button>
      </div>
    </div>
  );
};

export default Navbar;
