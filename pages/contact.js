

const Contact = () => {
    return (
        <div className="divspace">
            <form className="small-card" name="contact" method="POST" data-netlify="true" action="/success" netlify-honeypot="bot-field">
                <input className="form" placeholder="enter your email" type="email" name="email" />
                <textarea placeholder="exapmle: build me a website?" className="form" name="message" id="" cols="25" rows="3"></textarea>
                <button className="btn" type="submit">send now</button>
                <p className="p">the submit button 👆🏻</p>
               
                <label className="hidden">
                    Do not fill this out if you are a human
                    <input name="bot-field" />
                 <input type="hidden" name="form-name" value="contact"/>
                </label>
            </form>
        </div>
    );
}

export default Contact;
