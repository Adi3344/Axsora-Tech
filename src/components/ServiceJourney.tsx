'use client';

import { useState } from 'react';

type JourneyStep = {
  title: string;
  description: string;
};

export default function ServiceJourney({ steps }: { steps: JourneyStep[] }) {
  const [active, setActive] = useState(0);
  const currentStep = steps[active];

  return (
    <div className="service-journey">
      <div className="service-journey-track" role="tablist" aria-label="Project steps">
        {steps.map((step, index) => (
          <button
            className={`service-journey-tab${index === active ? ' is-active' : ''}`}
            type="button"
            role="tab"
            id={`service-step-tab-${index}`}
            aria-selected={index === active}
            aria-controls="service-step-panel"
            key={step.title}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <small>{step.title}</small>
          </button>
        ))}
      </div>
      <div
        className="service-journey-panel"
        id="service-step-panel"
        role="tabpanel"
        aria-labelledby={`service-step-tab-${active}`}
      >
        <p>STEP {String(active + 1).padStart(2, '0')} OF {String(steps.length).padStart(2, '0')}</p>
        <h3>{currentStep.title}</h3>
        <span>{currentStep.description}</span>
      </div>
      <div className="service-journey-progress" aria-hidden="true">
        {steps.map((step, index) => (
          <i className={index <= active ? 'is-active' : ''} key={step.title} />
        ))}
      </div>
    </div>
  );
}
