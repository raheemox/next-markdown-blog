

const Contact = () => {
    return (
        <div className="divspace">
            <form className="small-card" name="contact" method="POST" data-netlify="true" action="/success" netlify-honeypot="bot-field">
                <input className="form" placeholder="enter your email" type="email" name="email" />
                <textarea placeholder="exapmle: build me a website?" className="form" name="" id="" cols="25" rows="3"></textarea>
                <button className="btn" type="submit">submit</button>
                <input type="hidden" name="form-name" value="contact"/>
                <label className="hidden">
                    Dont fill this out if youre human:
                    <input name="bot-field" />
                </label>
            </form>
        </div>
    );
}

export default Contact;
