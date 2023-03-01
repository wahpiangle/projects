import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact(){
    const data = useActionData();

    return(
        <div className="contact">
            <Form method="post" action="/help/contact">
                <label>
                    <span>Your Email</span>
                    <input type="email" name="email" required></input>
                </label>
                <label>
                    <span>Your Message</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>

                {/* To display error message if submission length < 10 */}
                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    )
}

//form action function that will be called when form is submitted
export const contactAction = async ({request}) => {
    //use request.formData() to get the form data
    const data = await request.formData();

    //get the data from the form, make sure the get mathces name of form items
    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    //send post request
    if(submission.message.length <10){
        return {error: "Message must be at least 10 characters"}
    }
    console.log(submission)
    //redirect user
    return redirect('/')
}