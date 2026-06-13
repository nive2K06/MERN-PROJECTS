import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    objective: "",
    degree: "BSc IT",
    skills: []
  });

  const [skillInput, setSkillInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const addSkill = () => {
    if (skillInput.trim() !== "") {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput]
      });

      setSkillInput("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>React CV Builder</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="university"
          placeholder="University"
          value={formData.university}
          onChange={handleChange}
          required
        />

        <select
          name="degree"
          value={formData.degree}
          onChange={handleChange}
        >
          <option>BSc IT</option>
          <option>BSc SE</option>
          <option>BSc CS</option>
        </select>
        <br />
        <textarea
          name="objective"
          placeholder="Career Objective"
          value={formData.objective}
          onChange={handleChange}
        />
        <br />
        <div className="skill-section">
          <input
            type="text"
            placeholder="Enter Skill"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          />

          <button type="button" onClick={addSkill}>
            Add Skill
          </button>
        </div>

        <button type="submit">Generate CV</button>
      </form>

      {submitted && (
        <div className="cv">
          <h2>CURRICULUM VITAE</h2>

          <p>
            <strong>Name:</strong> {formData.fullName}
          </p>

          <p>
            <strong>Email:</strong> {formData.email}
          </p>

          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>

          <p>
            <strong>University:</strong> {formData.university}
          </p>

          <p>
            <strong>Degree:</strong> {formData.degree}
          </p>

          <h3>Objective</h3>
          <p>{formData.objective}</p>

          <h3>Skills</h3>

          <ol>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ol>

          <h3>Degree Qualification</h3>

          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Institute</th>
                <th>Year</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{formData.degree}</td>
                <td>{formData.university}</td>
                <td>2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;