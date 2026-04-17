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
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="feedback">
      <h1>للاستفسار</h1>

      <form onSubmit={handleSubmit} className="feedback-info">
        <label>
          الاسم
          <input
            placeholder="أدخل اسمك"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          البريد الإلكتروني
          <input
            placeholder="أدخل بريدك الإلكتروني"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          رسالتك
          <textarea
            placeholder="اكتب رسالتك هنا..."
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">إرسال</button>
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
