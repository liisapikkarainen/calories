import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  const calculate = () => {
    let calories = 0;
    if (gender === 'male') {
      calories = (879 + 10.2 * weight) * intensity;
    } else {
      calories = (795 + 7.18 * weight) * intensity;
    }
    setResult(calories);
  }

 /* function calculate(e) {
    //e.preventDefault();
    let calories = 0;
    if (gender === 'male') {
      calories = (879 + 10.2 * weight) * intensity;
    } else {
      calories = (795 + 7.18 * weight) * intensity;
    }
    setResult(calories);
  } */

  return (
   /* onSubmit={calculate}> */
   <form>
      <h3>Counting calories</h3>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Intensity</label>
        <select onChange={e => setIntensity(e.target.value)}>
          <option value="1.3">Light</option>
          <option value="1.5">Usual</option>
          <option value="1.7">Moderate</option>
          <option value="2">Hard</option>
          <option value="2.2">Very hard</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <label><input type="radio" name="sukupuoli" value="male" defaultChecked onChange={e => setGender(e.target.value)} />Male</label>
        <label><input type="radio" name="sukupuoli" value="female" onChange={e => setGender(e.target.value)} />Female</label>
      </div>
      <div>
        <label>Calories</label>
        <output>{result.toFixed(0)}</output>
      </div>
      <button type="button" onClick={calculate}>Calculate</button>
    </form>
  );
}

export default App;
