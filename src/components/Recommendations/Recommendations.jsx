import React, { useState } from 'react';

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

  const [showSuccess, setShowSuccess] = useState(false);

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
    
    // Show success message
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
    
    // Scroll to the new recommendation
    setTimeout(() => {
      const allRecs = document.getElementById('all_recommendations');
      if (allRecs) {
        allRecs.scrollTop = allRecs.scrollHeight;
      }
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

      {/* Success Message */}
      {showSuccess && (
        <div className="success-message">
          Thank you for leaving a recommendation!
        </div>
      )}

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

      <style jsx>{`
        .recommendations-container {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        #recommendations h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 30px;
          color: #2c3e50;
          position: relative;
          padding-bottom: 15px;
        }

        #recommendations h2:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #3498db, #2ecc71);
          border-radius: 2px;
        }

        .all_recommendations {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 30px;
          max-height: 500px;
          overflow-y: auto;
          padding: 10px;
        }

        .recommendation {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-left: 5px solid #3498db;
        }

        .recommendation:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .recommendation span:first-child {
          font-size: 3rem;
          color: #3498db;
          line-height: 1;
          position: absolute;
          top: 10px;
          left: 15px;
          opacity: 0.3;
        }

        .recommendation span:last-child {
          font-size: 3rem;
          color: #3498db;
          line-height: 1;
          position: absolute;
          bottom: -15px;
          right: 15px;
          opacity: 0.3;
        }

        .recommendation-author {
          text-align: right;
          font-style: italic;
          margin-top: 15px;
          color: #7f8c8d;
          font-weight: 500;
        }

        #contact {
          margin-top: 60px;
          padding: 30px 0;
          background-color: #f8f9fa;
          border-radius: 12px;
        }

        .flex_center {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        fieldset {
          border: 2px solid #3498db;
          border-radius: 12px;
          padding: 25px;
          width: 90%;
          max-width: 600px;
          background: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        legend.introduction {
          font-size: 1.5rem;
          font-weight: 600;
          color: #2c3e50;
          padding: 0 15px;
          background: linear-gradient(90deg, #3498db, #2ecc71);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        input[type="text"], textarea {
          width: 100%;
          padding: 12px 15px;
          margin: 10px 0;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        input[type="text"]:focus, textarea:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }

        textarea {
          min-height: 150px;
          resize: vertical;
        }

        #recommend_btn {
          background: linear-gradient(90deg, #3498db, #2ecc71);
          color: white;
          border: none;
          padding: 12px 30px;
          font-size: 1.1rem;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-top: 15px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        #recommend_btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        #recommend_btn:active {
          transform: translateY(0);
        }

        .success-message {
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(90deg, #2ecc71, #27ae60);
          color: white;
          padding: 15px 25px;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          animation: slideIn 0.5s ease, fadeOut 0.5s ease 2.5s;
          animation-fill-mode: forwards;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .recommendations-container {
            padding: 20px 15px;
          }
          
          #recommendations h2 {
            font-size: 2rem;
          }
          
          .all_recommendations {
            grid-template-columns: 1fr;
          }
          
          fieldset {
            width: 95%;
            padding: 20px 15px;
          }
          
          legend.introduction {
            font-size: 1.3rem;
          }
          
          .success-message {
            top: 10px;
            right: 10px;
            left: 10px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Recommendations;