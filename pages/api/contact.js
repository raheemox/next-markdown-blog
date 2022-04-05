import React from 'react';

const Contact = () => {
    return (
        <div>
            <form action="#" noValidate>
                <div className="form-group has-icon fa-envelope-o">
                    <label className="movable" htmlFor="email">Email address</label>
                    <input type="email" name="email" id="email" className="form-field required email" />
                    <span className="error-message">Please enter a valid email address</span>
                </div>
                <div className="form-group has-icon fa-user-o">
                    <label className="movable" htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="form-field required" />
                    <span className="error-message">This is a required field with a much longer error message to see what it is like with multiple lines</span>
                </div>
                <div className="form-group has-icon fa-comment-o">
                    <label className="movable" htmlFor="comment">Comment</label>
                    <textarea name="message" id="comment" rows="6" className="form-field required"></textarea>
                    <span className="error-message">Your message perhaps?</span>
                </div>
                <div className="form-group has-icon select fa-heart-o">
                </div>
                <div className="form-group">
                    <button type="submit" className="form-submit">Submit Form</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
