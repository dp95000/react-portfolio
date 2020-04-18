import React from "react";

function Contact() {
    return (
        <div class="container">
        <div id="content">
            <div id="title"><h2>Contact</h2></div>
                <form>
                    Name<br /><input type="text" placeholder="John Smith" name="name" /><br />
                    Email<br /><input type="text" placeholder="example@email.com" name="email" /><br />
                    Message
                    <textarea name="message" rows="10" cols="30"></textarea>
                    <br />
                    <input type="submit" />
                </form>
        </div>
    </div>
    );
  }
  
  export default Contact;