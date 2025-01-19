import { storyblokEditable } from "@storyblok/react/rsc";
import "./Contact.css";

const ContactForm = ({ blok }) => {
  // Set the field as active when focused
  const handleFocus = (e) => {
    e.target.parentNode.setAttribute("data-active", "true");
  };

  // Remove the active state if the field is empty on blur
  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.parentNode.removeAttribute("data-active");
    }
  };

  // Handle form submission and prevent default behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Form submitted:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className="contact-form" {...storyblokEditable(blok)}>
      <form onSubmit={handleSubmit}>
        {["name", "surname", "email", "telephone", "message"].map(
          (field, index) => (
            <div key={index} className="form-field">
              <label htmlFor={field} className="floating-label">
                {field.charAt(0).toUpperCase() + field.slice(1)}*
              </label>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required={field !== "telephone"}
                />
              ) : (
                <textarea
                  id={field}
                  name={field}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                />
              )}
            </div>
          )
        )}
        <button className="submit-btn" type="submit">
          Send
        </button>
      </form>

      <img
        className="contactphoto"
        src={blok.contactphoto.filename}
        alt={blok.contactphoto.alt || "contactphoto"}
      />
    </div>
  );
};

export default ContactForm;
