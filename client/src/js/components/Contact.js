import React from "react";

const Contact = () => {

    return (
        <section className="contact">
            <h1>Contact</h1>
    
            <div>
                <h2>Leave me a message!(Currently not available)</h2>
                <form onSubmit={
                    (e) => {
                        e.preventDefault();
                        fetch("https://neville-li-portfolio.herokuapp.com/email", {
                            method: "POST",
                            mode:"cors",
                            body: JSON.stringify({
                                subject: e.target.elements.subject.value,
                                sender: e.target.elements.sender.value,
                                senderEmail: e.target.elements.senderEmail.value,
                                text: e.target.elements.text.value
                            }),
                            headers:{
                                "Content-Type": "application/json",
                                Accept: 'application/json'
                            }
                        })
                        .then(res => console.log(res))
                        .catch(err => console.log(err));
                        e.target.elements.subject.value = '';
                        e.target.elements.sender.value = '';
                        e.target.elements.text.value = '';
                        e.target.elements.senderEmail.value = '';
                    }
                }>
                    <input
                        className="contact__input"    
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        id="subject"
                    />
                    <input
                        className="contact__input"    
                        type="text"
                        placeholder="Your name"
                        name="sender"
                        id="sender"
                    />
                    <input
                        className="contact__input"
                        type="email"
                        placeholder="Your email(required)"
                        name="senderEmail"
                        id="senderEmail"
                        required
                    />
                    <textarea
                        className="contact__message"
                        placeholder="Message"
                        name="text"
                        id="text"
                    />  
                    <button>
                        Submit
                    </button>
                </form>
            </div>
            <p>Click <a  target="_blank" href="https://github.com/neville-li"> here</a> to check out my Github</p>
            <p>Click <a  target="_blank" href="https://www.linkedin.com/in/neville-li-261320141/"> here</a> to check out my Linkedin</p>
        </section>
    )
};

export default Contact;