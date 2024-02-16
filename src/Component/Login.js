import { useFormik } from "formik";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom/dist";

export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values.email && values.password) {
        navigate("/home");
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Please enter the email";
      }
      if (!values.password) {
        errors.password = "Please enter the password";
      }
      return errors;
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        width: "40%",
        border: "2px solid blue",
        margin: "30px",
        padding: "20px",
      }}
    >
      <div>
        <Row>
          <h2>Login Form</h2>
        </Row>
        <Row>
          <Col className="formControl">Email</Col>
          <Col className="formControl">
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div>
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="formControl">Password</Col>
          <Col className="formControl">
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div>
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={18} push={4}>
            <button type="submit">Submit</button>
          </Col>
        </Row>
      </div>
      <a href="/Register" className="navbar-brand">
        Sign up
      </a>
    </form>
  );
}