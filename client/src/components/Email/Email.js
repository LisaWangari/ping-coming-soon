import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "./Email.css";

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .required("An email address is required.")
});

const Email = () => {
  return (
    <section className="emailSection">
      <div className="inputSection">
        <Formik
          initialValues={{ email: "" }}
          validationSchema={emailSchema}
          onSubmit={values => {
            console.log("values ", values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="notifyForm">
              <div className="inputGroup">
                <Field className="notifyInput" name="email" />
                {errors.email && touched.email ? (
                  <div className="notifyError">{errors.email}</div>
                ) : (
                  <div className="notifyError">{errors.email}</div>
                )}
              </div>
              <button className="notifyButton">Notify Me</button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Email;
