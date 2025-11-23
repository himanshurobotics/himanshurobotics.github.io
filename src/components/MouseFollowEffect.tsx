
import React from 'react';
import MouseGlowCanvas from './effects/MouseGlowCanvas';

// Lightweight wrapper to keep the same public component while moving
// heavy animation work to a performant canvas implementation.
const MouseFollowEffect: React.FC = () => {
  return <MouseGlowCanvas />;
};

export default MouseFollowEffect;

