import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SubscriptionInfo({ subscriptionId }) {
  const [SubscriptionInfo, setSubscriptionInfo] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 


  useEffect(() => {
    if (subscriptionId) {
      showSubscriptionInfo(subscriptionId);
    };

    function showSubscriptionInfo(id) {
      fetch(`https://localhost:3000/api/v1/subscriptions/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Subscription not found');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setSubscriptionInfo(data); 
          setError(null);
        });
    };
    
  }, [subscriptionId, navigate]);


  if (error) {
    return <p className="subscription-detail-error">{error}</p>;
  }

  if (!SubscriptionInfo || !SubscriptionInfo.genre_ids) { 
    return <p className="SubscriptionInfo_genre">Loading movie genres...</p>;
  }

  const movieGenres = SubscriptionInfo.genre_ids.map(genre => (
    <p className="SubscriptionInfo_genre" key={genre}>
      {genre}
    </p>
  ));

  return (
    <section className='SubscriptionInfo'>
      <img className="SubscriptionInfo_image" src={SubscriptionInfo.backdrop_path} alt="Movie poster"/>
      <div className="SubscriptionInfo_attributes">
        <h2 className="SubscriptionInfo_title">{SubscriptionInfo.title}</h2>
        <div className="SubscriptionInfo_genreList">
          {movieGenres}
        </div>
        <p className="SubscriptionInfo_overview">{SubscriptionInfo.overview}</p>
      </div>
    </section>
  );
};

export default SubscriptionInfo;