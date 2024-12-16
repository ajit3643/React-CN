//get redux hook
import { useSelector } from "react-redux";
//get navigation hook
import { useNavigate, Link } from "react-router-dom";

 const Nav = () => {
  const navigate = useNavigate();
  let total = useSelector((state) => state.totalCart);
return (
    <nav
      className="navbar navbar-expand-lg p-4 align-items-center"
      style={style.nav}
    >
      <div className="container-fluid">
        <button className="navbar-brand fs-3" style={style.navHead}>
          E-commerce
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active text-light" href="#">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproducts" className="nav-link active text-light">
                Add a product
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-5 position-relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
              alt="error"
              width={"40rem"}
            onClick={() => navigate("/cart")}
            style={{cursor:"pointer"}}
            />
            {total ? (
              <p
                className="bg-white rounded-circle position-absolute d-flex align-items-center justify-content-center"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  top: "21%",
                  left: "20%",
                }}
              >
                {total}
              </p>
            ) : (
              ""
            )}
            <img
              src="https://cdn-icons-png.flaticon.com/512/236/236832.png"
              alt="error"
              width={"40rem"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
const style = {
  nav: {
    backgroundColor: "var(--nav)",
  },
  navHead: {
    fontFamily: "var(--fontStyle)",
    color: "#fff",
    backgroundColor: "transparent",
    border: "none",
    outline: "none"
  },
};
export default Nav