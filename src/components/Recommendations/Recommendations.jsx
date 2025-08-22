import React, { useState } from 'react';
import './Recommendations.css';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      text: "Jane is a very quick learner and quickly grasps key concepts of Web development. She got a great attitude & she is an excellent team player. She has a curious mind and asks the right question. She takes initiative within a team and has potentials to lead the team."
    },
    {
      id: 2,
      text: "Working with Jane has been an awesome experience. She is highly knowledgable and always goes the extra step to make sure everything is right. For any future projects that need her expertise I would definitely want to work with her again."
    },
    {
      id: 3,
      text: "I had worked along with Jane during the initial phase of our venture which needed Web development. She is a committed resource who has in depth knowledge about the domain. She will be an asset for any organisation!"
    }
  ]);

  const [newRecommendation, setNewRecommendation] = useState({
    name: '',
    message: ''
  });

  const addRecommendation = () => {
    if (newRecommendation.message.trim() === '') {
      alert('Please enter a recommendation message');
      return;
    }

    const newRec = {
      id: recommendations.length + 1,
      text: newRecommendation.message,
      name: newRecommendation.name || 'Anonymous'
    };

    setRecommendations([...recommendations, newRec]);
    setNewRecommendation({ name: '', message: '' });
    
    // Scroll to the new recommendation
    setTimeout(() => {
      const allRecs = document.getElementById('all_recommendations');
      allRecs.scrollTop = allRecs.scrollHeight;
    }, 100);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecommendation({
      ...newRecommendation,
      [name]: value
    });
  };

  return (
    <div className="recommendations-container">
      {/* Recommendations */}
      <section id="recommendations">
        <h2>Recommendations</h2>
        <div style={{clear: 'both'}}></div>
        <div className="all_recommendations" id="all_recommendations">
          {recommendations.map((rec) => (
            <div key={rec.id} className="recommendation">
              <span>&#8220;</span>
              {rec.text}
              <span>&#8221;</span>
              {rec.name && <div className="recommendation-author">- {rec.name}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Recommendation Form */}
      <section id="contact">
        <div className="flex_center">
          <fieldset>
            <legend className="introduction">Leave a Recommendation</legend>          
            <input 
              type="text" 
              name="name"
              placeholder="Name (Optional)" 
              value={newRecommendation.name}
              onChange={handleInputChange}
            /> 
            <br/>
            <textarea 
              name="message"
              cols="50" 
              rows="5" 
              placeholder="Message"
              value={newRecommendation.message}
              onChange={handleInputChange}
            ></textarea>
            <div className="flex_center">
              <button id="recommend_btn" onClick={addRecommendation}>Submit</button>
            </div>
          </fieldset>
        </div>
      </section>
    </div>
  );
};

export default Recommendations;