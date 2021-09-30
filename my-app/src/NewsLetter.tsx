import React from 'react'
import { Formik, Field, Form, FormikHelpers} from 'formik';


import * as Yup from 'yup';

interface Input{
    firstName: string;
    lastName: string;
    email: string;
}

//Yup object with elements
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Required'),
    lastName: Yup.string()
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  

 function NewsLetter() {
    return (
       <><div>
            <h1 className="site_title">News Letter</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(
                    input: Input,
                    { setSubmitting }: FormikHelpers<Input>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(input, null, 2));
                        setSubmitting(false);
                    }, 500);
                } }
            >
                {/* destructuring with errors, touched */}
                   {({ errors, touched }) => ( 
                <Form>
                    <label htmlFor="firstName"></label>
                    <Field
                        id="firstName"
                        name="firstName"
                        placeholder="first name"
                        className="form-control input_space"
                         />

                         {/* if true -> div else null */}
                            {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}

                    
                    <Field
                        id="lastName"
                        name="lastName"
                        placeholder="last name"
                        className="form-control input_space"
                         />
                            {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
                    
                    <Field
                        id="email"
                        name="email"
                        placeholder="foo@example.com"
                        className="form-control input_space"
                         />
                            {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}

                    <button type="submit" className="btn btn-primary" id="space_top_button">submit</button>

                </Form>
                  )}

            </Formik>

        </div>
  
        <div id="space_top">
                <img src="https://images.stockx.com/images/Air-Jordan-4-Retro-PSG-Paris-Saint-Germain-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1607050018" alt="" />
            </div>
  
     </>
    )
}

export default NewsLetter;