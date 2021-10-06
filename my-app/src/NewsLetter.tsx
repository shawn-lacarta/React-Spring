import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import ProductService from "./ProductService";
import * as Yup from "yup";
import { Carousel } from 'react-responsive-carousel';

interface Input {
  firstName: string;
  lastName: string;
  email: string;
}

//Yup object with elements
const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("first name required"),
  lastName: Yup.string().required("last name required"),
  email: Yup.string().email("invalid email").required("email required"),
});

function NewsLetter() {
  return (
    <>
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(input: Input, { setSubmitting }: FormikHelpers<Input>) => {
            setTimeout(() => {
              console.log("submit");
              new ProductService().postData(
                input.firstName,
                input.lastName,
                input.email
              );
              alert("added");
              setSubmitting(false);
            }, 500);
          }}
        >
          {/* destructuring with errors, touched */}
          {({ errors, touched }) => (
            <Form>
              <div className="input_background">
                <h1 className="site_title">News Letter</h1>
                <Field
                  id="firstName"
                  name="firstName"
                  data-cy="firstname"
                  placeholder="first name"
                  className="form-control input_space"
                />

                {/* if true -> div else null */}
                {errors.firstName && touched.firstName ? (
                  <div className="error_message">{errors.firstName}</div>
                ) : null}

                <Field
                  id="lastName"
                  name="lastName"
                  data-cy="lastname"
                  placeholder="last name"
                  className="form-control input_space"
                />
                {errors.lastName && touched.lastName ? (
                  <div className="error_message">{errors.lastName}</div>
                ) : null}

                <Field
                  id="email"
                  name="email"
                  data-cy="email"
                  placeholder="email"
                  className="form-control input_space"
                />
                {errors.email && touched.email ? (
                  <div className="error_message">{errors.email}</div>
                ) : null}

                <button
                  type="submit"
                  className="btn btn-primary"
                  id="space_top_button"
                >
                  submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
    
      </div>
      <Carousel>
      
      <div id="space_top">
        <img src="https://images.stockx.com/images/Air-Jordan-4-Retro-White-Oreo-2021-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1620919867" alt="" />

      </div>
      <div>
        <img src="https://images.stockx.com/images/Air-Jordan-4-Retro-Fire-Red-2020-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1606762588" alt="" />

      </div>
      <div>
        <img src="https://images.stockx.com/images/Air-Jordan-4-Retro-PSG-Paris-Saint-Germain-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1607050018" alt="" />

      </div>
    
    </Carousel>
    </>
  );
}

export default NewsLetter;
