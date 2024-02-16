import { useFormik } from "formik";
import { Row, Col, Form } from "react-bootstrap";
export default function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
    },
    onSubmit: (values) => {
      console.log("Registration form::");
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.firstName) {
        errors.firstName = "Please enter the firstName";
      }
      if (!values.lastName) {
        errors.lastName = "Please enter the lastName";
      }
      if (!values.address) {
        errors.address = "Please enter the address";
      }
      return errors;
    },
  });
  return (
    <Form
      onSubmit={formik.handleSubmit}
      style={{
        width: "40%",
        border: "2px solid blue",
        margin: "30px",
        padding: "20px",
      }}
    >
      <h2>Registration</h2>
      <Row>
        <Col className="formControl">FirstName</Col>
        <Col className="formControl">
          <input
            name="firstName"
            type="text"
            placeholder="Enter your firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            {formik.touched.firstName && formik.errors.firstName ? (
              <div style={{ color: "red" }}>{formik.errors.firstName}</div>
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="formControl">lastName</Col>
        <Col className="formControl">
          <input
            name="lastName"
            type="text"
            placeholder="Enter your lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            {formik.touched.lastName && formik.errors.lastName ? (
              <div style={{ color: "red" }}>{formik.errors.lastName}</div>
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="formControl">Address</Col>
        <Col className="formControl">
          <input
            name="address"
            type="text"
            placeholder="Enter your address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div>
            {formik.touched.address && formik.errors.address ? (
              <div style={{ color: "red" }}>{formik.errors.address}</div>
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={18} push={4}>
          <button type="submit">Submit</button>
        </Col>
      </Row>
    </Form>
  );
}