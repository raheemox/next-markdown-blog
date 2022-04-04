

const Contact = () => {
    return (
        <div className="divspace">
            <form className="small-card" name="contact" method="POST" data-netlify="true" action="/success" netlify-honeypot="bot-field">
                <input className="form" placeholder="enter your email" type="email" name="email" />
                <textarea placeholder="exapmle: build me a website?" className="form" name="" id="" cols="25" rows="3"></textarea>
                <button className="" type="submit">submit this</button>
                <p className="p">I will answer you after 2 hours</p>
               
                <label className="hidden">
                    Dont fill this out if youre human
                    <input name="bot-field" />
                 <input type="hidden" name="form-name" value="contact"/>
                </label>
            </form>
        </div>
    );
}

export default Contact;
