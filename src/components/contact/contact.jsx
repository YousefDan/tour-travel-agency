import "./contact.scss";
import Heading from "../heading/Heading";
const Contact = () => {
    return ( <section className="contact" id="contact">
        <Heading title="contact" />
        <div className="container">
        <div className="contact-pic">
            <img src="images/contact-img.svg" alt="" />
        </div>
        <div className="contact-form">
            <form>
                 <div className="input-group">
                 <input type="text" placeholder="name" />
                <input type="email" placeholder="email"/>
                <input type="number" min={1} placeholder="number" />
                <input type="text" placeholder="subject"/>
                 </div>
                <textarea placeholder="message" rows="5"></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
        </div>
        </div>
    </section>);
}
 
export default Contact;