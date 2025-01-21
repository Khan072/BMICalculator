import React, { useState } from "react";

const Home = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBmi = weight / (heightInMeters * heightInMeters);

      setBmi(calculatedBmi.toFixed(2));

      if (calculatedBmi < 18.5) {
        setMessage(
          "Ohh, you are Underweight! A balanced diet and healthy nutrition can help you improve. Take care of yourself!"
        );
      } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        setMessage(
          "Awesome! You have a healthy BMI. Keep maintaining your lifestyle and stay fit!"
        );
      } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
        setMessage(
          "You are in the Overweight range! Focusing on a balanced diet and regular exercise can make a difference. You've got this!"
        );
      } else if (calculatedBmi >= 30 && calculatedBmi <= 34.9) {
        setMessage(
          "It seems you're in the Obesity (Class 1) category. Small changes in diet and physical activity can lead to big improvements. Stay positive and take small steps!"
        );
      } else if (calculatedBmi >= 35 && calculatedBmi <= 39.9) {
        setMessage(
          "You're in Obesity (Class 2). Taking care of your health through consistent effort is important. You can start today and work towards a healthier you!"
        );
      } else {
        setMessage(
          "Ohh, you're in the Extreme Obesity (Class 3) range. It's never too late to adopt healthy habits. Every small step counts toward a better lifestyle. Stay motivated!"
        );
      }
    } else {
      setMessage("Please enter valid weight and height values.");
    }
  };

  const sectionStyle = {
    padding: "20px",
    margin: "20px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    lineHeight: "1.6",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "center",
  };

  const tableHeaderStyle = {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  };

  return (
    <div className="bmi-container" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Welcome to the BMI Calculator</h1>
      <p style={{ textAlign: "justify", marginBottom: "20px" }}>
        <center>The Body Mass Index (BMI) is a simple method to estimate your body fat based on your height and weight. Understanding your BMI can help you assess if you are underweight, normal weight, overweight, or obese, and understand the health risks associated with each category.</center>
      </p>
<center>
         
        <form onSubmit={calculateBMI} style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="weight" style={{ marginBottom: "8px", fontSize: "16px", color: "#34495e" }}>
            Weight (kg):
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
              outline: "none",
            }}
            required
          />
          <label htmlFor="height" style={{ marginBottom: "8px", fontSize: "16px", color: "#34495e" }}>
            Height (cm):
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
              outline: "none",
            }}
            required
          />
          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#3498db",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#2980b9"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#3498db"}
          >
            Calculate BMI
          </button>
        </form>
      </center>

      {bmi && (
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ color: "#2c3e50" }}>Your BMI is: {bmi}</h2>
          <h3 style={{ color: "#e74c3c" }}>{message}</h3>
        </div>
      )}
      

      <div style={sectionStyle}>
        <h2 style={{ color: "#2c3e50" }}>BMI Introduction</h2>
        <p>
        BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that are used by the calculator.
        </p>

      </div>
      <div style={sectionStyle}>
        <h2 style={{ color: "#2c3e50" }}>Risks associated with being overweight</h2>
        <p>
        Risks associated with being overweight
Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):

<li>High blood pressure</li>
<li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
<li>Type II diabetes</li>
<li>Coronary heart disease</li>
<li>Stroke</li>
<li>Gallbladder disease</li>
<li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage
Sleep apnea and breathing problems</li>
<li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)
Low quality of life</li>
<li>Mental illnesses such as clinical depression, anxiety, and others
Body pains and difficulty with certain physical functions</li>
Generally, an increased risk of mortality compared to those with a healthy BMI
As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that may result from being overweight. Generally, a person should try to maintain a BMI below 25 kg/m2, but ideally should consult their doctor to determine whether or not they need to make any changes to their lifestyle in order to be healthier.
        </p>
        
      </div>
      <div style={sectionStyle}>
        <h2 style={{ color: "#2c3e50" }}>Risks associated with being underweight</h2>
        <p>
        Being underweight has its own associated risks, listed below:

<li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
<li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
<li>A decrease in immune function</li>
<li>Growth and development issues, particularly in children and teenagers</li>
<li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
<li>Potential complications as a result of surgery/</li>
Generally, an increased risk of mortality compared to those with a healthy BMI
In some cases, being underweight can be a sign of some underlying condition or disease such as anorexia nervosa, which has its own risks. Consult your doctor if you think you or someone you know is underweight, particularly if the reason for being underweight does not seem obvious
        </p>

      </div>

      <div style={sectionStyle}>
        <h2 style={{ color: "#2c3e50" }}>BMI Range and Health Risk</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...thTdStyle, ...tableHeaderStyle }}>BMI Range</th>
              <th style={{ ...thTdStyle, ...tableHeaderStyle }}>Category</th>
              <th style={{ ...thTdStyle, ...tableHeaderStyle }}>Health Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thTdStyle}>Less than 18.5</td>
              <td style={thTdStyle}>Underweight</td>
              <td style={thTdStyle}>Possible nutritional deficiency and osteoporosis</td>
            </tr>
            <tr>
              <td style={thTdStyle}>18.5 - 24.9</td>
              <td style={thTdStyle}>Normal weight</td>
              <td style={thTdStyle}>Low risk (healthy range)</td>
            </tr>
            <tr>
              <td style={thTdStyle}>25 - 29.9</td>
              <td style={thTdStyle}>Overweight</td>
              <td style={thTdStyle}>Increased risk of cardiovascular disease</td>
            </tr>
            <tr>
              <td style={thTdStyle}>30 - 34.9</td>
              <td style={thTdStyle}>Obese (Class I)</td>
              <td style={thTdStyle}>High risk of cardiovascular diseases and diabetes</td>
            </tr>
            <tr>
              <td style={thTdStyle}>35 - 39.9</td>
              <td style={thTdStyle}>Obese (Class II)</td>
              <td style={thTdStyle}>Very high risk of severe health issues</td>
            </tr>
            <tr>
              <td style={thTdStyle}>40 or more</td>
              <td style={thTdStyle}>Morbidly Obese</td>
              <td style={thTdStyle}>Extremely high risk, requires immediate medical attention</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
    
  );
};

export default Home;
