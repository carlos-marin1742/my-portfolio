import React from 'react';
import './Recommendations.css';

const Recommendations = ({ id }) => {
  const recommendations = [
    {
      id: 1,
      name: "Carlos Marin",
      position: "Research Coordinator",
      company: "sample company",
      text: "Great Recomendation sample text 1",
      avatar: "https://d29fhpw069ctt2.cloudfront.net/clipart/111835/preview/KofferV3_preview_414a.png", // url or path to image
      date: "10-aug-2025"
    },
    {
      id: 2,
      name: "Carlos Marin 2",
      position: "AI Developer",
      company: " AI TECH COMPANY",
      text: "BUILDING RECOMMENDATION PORTION FOR PROJECT",
      avatar: "https://media.istockphoto.com/id/959848076/photo/rottweiler-dog-sitting-against-brown-background.jpg?s=1024x1024&w=is&k=20&c=7x_u7EgFW9JbLPjXtYNmxSicuEF1pSTN7U9IWjrv-DQ=", // URL or path to image
      date: "10-AUG-2025"
    }
  ];

  return (
    <section className="recommendations" id="recommendations">
      <h2 className="section-title">Recommendations</h2>
      
      <div className="recommendations-container">
        {recommendations.map((rec) => (
          <div key={rec.id} className="recommendation-card">
            <div className="recommendation-content">
              <blockquote>
                <p>"{rec.text}"</p>
              </blockquote>
            </div>
            
            <div className="recommendation-author">
              {rec.avatar && (
                <img 
                  src={rec.avatar} 
                  alt={rec.name} 
                  className="recommendation-avatar"
                />
              )}
              <div className="author-info">
                <h4>{rec.name}</h4>
                <p className="author-meta">
                  {rec.position}{rec.position && rec.company && ', '}{rec.company}
                </p>
                {rec.date && <p className="recommendation-date">{rec.date}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;