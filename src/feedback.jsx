import { useState } from "react";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFeedbacks([...feedbacks, formData]);

    setFormData({
      name: "",
      email: "",
      feedback: "",
    });
  };

  return (
    <div className="feedback">
      <h1>للاستفسار</h1>

      <form onSubmit={handleSubmit} className="feedback-info">
        <label>
          Your name
          <input
            placeholder="Enter your name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Your email
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Your feedback
          <textarea
            placeholder="Enter your feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      <div className="feedback-container">
        {feedbacks.map((item, index) => (
          <div key={index} className="feedbacks">
            <div className="user-info">
              <p className="user-name">{item.name}</p>
              <p className="user-email">{item.email}</p>
            </div>
            <p>{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
