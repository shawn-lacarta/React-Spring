import React from 'react'
import { Formik, Field, Form, FormikHelpers} from 'formik';

interface Input{
    firstName: string;
    lastName: string;
    age: string;
    email: string;
}

 function Formular() {
    return (
       <div> 
           <h1 className="site_title">Formular</h1>
           <Formik
           initialValues={{
               firstName: '',
               lastName: '',
               age: '',
               email: '',
           }}
           onSubmit={(
               input: Input,
               { setSubmitting }: FormikHelpers<Input>
           ) => {
                setTimeout(() => {
                    alert(JSON.stringify(input, null, 2));
                    setSubmitting(false);
                }, 500);
           }}
           >
               <Form>
                   <label htmlFor="firstName">first name</label>
                   <Field 
                   id="firstName" 
                   name="firstName" 
                   placeholder="first name" 
                   className="form-control"
                   required/>

                   <label htmlFor="lastName">last name</label>
                   <Field 
                   id="lastName" 
                   name="lastName" 
                   placeholder="last name" 
                   className="form-control"
                   required/>

                   <label htmlFor="age">age</label>
                   <Field 
                   id="age" 
                   name="age" 
                   placeholder="age" 
                   className="form-control"
                   required/>

                   <label htmlFor="email">email</label>
                   <Field
                   id="email"
                   name="email"
                   placeholder="foo@example.com"
                   type="email"
                   className="form-control"
                   required
                   />

                   <button type="submit">submit</button>

               </Form>

           </Formik>
       </div>
    )
}

export default Formular;