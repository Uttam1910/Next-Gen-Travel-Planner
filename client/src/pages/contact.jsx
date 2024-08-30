<section className="contact">
  <div className="contact-info">
    <h1>Contact Us</h1>
    <p>We'd love to hear from you. Here's how you can reach us...</p>
    <ul>
      <li><strong>Email:</strong> contact@yourcompany.com</li>
      <li><strong>Phone:</strong> +123-456-7890</li>
      <li><strong>Address:</strong> 123 Your Street, Your City, Your Country</li>
    </ul>
  </div>
  <div className="contact-form">
    <h2>Send Us a Message</h2>
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div className="map">
    <h2>Our Location</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799140087!2d-74.25986786942512!3d40.697149413782245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f1d41453ba03%3A0x6968d7f9ff97f0c5!2sYour%20Company!5e0!3m2!1sen!2sus!4v1591012345678!5m2!1sen!2sus"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Google Map Location"
    ></iframe>
  </div>
  <div className="social-media">
    <h2>Follow Us</h2>
    <a href="https://facebook.com/yourcompany">Facebook</a>
    <a href="https://twitter.com/yourcompany">Twitter</a>
    <a href="https://instagram.com/yourcompany">Instagram</a>
  </div>
  <div className="faq">
    <h2>Frequently Asked Questions</h2>
    <details>
      <summary>How can I get in touch with customer support?</summary>
      <p>You can reach our support team at support@yourcompany.com or call us at +123-456-7890.</p>
    </details>
    <details>
      <summary>What are your business hours?</summary>
      <p>Our business hours are Monday to Friday, 9 AM to 5 PM.</p>
    </details>
  </div>
</section>
