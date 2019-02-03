import React from "react";

const Contact = () => (
    <section className="contact">
        <h1>Contact</h1>

        <div>
            <h2>Leave me a message!(Currently not available)</h2>
            <form method="POST">
                <label className="contact__label">
                    Title:
                    <input type="text"/>
                </label>
                <label className="contact__label">
                    Message:
                    <input type="text"/>
                </label>
                <label className="contact__label">
                    Your Email(Optional):
                    <input type="text"/>
                </label>
            <button disabled={true}>Submit</button>
            </form>
        </div>
        
        <p>Click <a  target="_blank" href="https://github.com/neville-li"> here</a> to check out my Github</p>
        <p>Click <a  target="_blank" href="https://www.linkedin.com/in/neville-li-261320141/"> here</a> to check out my Linkedin</p>
    </section>
);

export default Contact;