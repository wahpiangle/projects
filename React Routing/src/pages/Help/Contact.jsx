export default function Contact(){
    return(
        <div className="contact">
            <form>
                <label>
                    <span>Your Email</span>
                    <input type="email" name="email" required></input>
                </label>
                <label>
                    <span>Your Message</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}