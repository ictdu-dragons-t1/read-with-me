import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import AliceLevelScreenTwo from './AliceLevelScreenTwo';
import AliceLevelScreenThree from './AliceLevelScreenThree';

const GameFlow = () => {
  const [loading, setLoading] = useState(true); // Initially show loading screen
  const navigate = useNavigate();
  const location = useLocation();

  const [level, setLevel] = useState(null);

  // Simulate loading screen transitions
  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => {
        setLoading(false);
        if (location.pathname === "/level2") setLevel('level2');
        else if (location.pathname === "/level3") setLevel('level3');
      }, 5000); // Adjust loading time (5 seconds in this case)
    }
    return () => clearTimeout(timer);
  }, [loading, location]);

  // Trigger LoadingScreen before moving to Level 2
  useEffect(() => {
    if (location.pathname === "/level2") {
      setLoading(true);
    }
  }, [location.pathname]);

  const handleLevelTransition = () => {
    setLoading(true); // Show loading before next level
    setTimeout(() => {
      if (level === 'level2') {
        navigate('/level3');
      } else {
        navigate('/level2');
      }
    }, 5000); // Time for loading screen between levels
  };

  // Conditionally render loading screen or the level component
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      {level === 'level2' && <AliceLevelScreenTwo onNextLevel={handleLevelTransition} />}
      {level === 'level3' && <AliceLevelScreenThree onNextLevel={handleLevelTransition} />}
    </div>
  );
};

export default GameFlow;
