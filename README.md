# The Living Credential

A frontend-only learning credential built for the Pripton Innovations Software Developer Assignment.

## Overview

The Living Credential is designed as more than a static certificate.

The front side represents the candidate's achievement:

* Exam result
* Score and percentage
* Pass/fail status
* Syllabus covered

The back side represents the candidate's ongoing learning journey:

* Seven-day activity
* Learning progress
* Streak
* Recently refreshed activity

The certificate can be claimed using a candidate roll number and then viewed publicly through a shareable certificate URL.

## Concept

I interpreted the "living credential" as a combination of a traditional certificate and a learning-progress profile.

The flip interaction has a specific meaning:

**Front = What you achieved**

**Back = How you continue to grow**

This allows the certificate to communicate both a verified outcome and the learning activity behind it.

## Features

* Roll number validation using mock candidate data
* Feedback validation with a 20-character minimum
* Claim state persistence using localStorage
* Public certificate route
* Invalid and unclaimed certificate states
* Certificate front and back
* Syllabus accordion
* Seven-day learning progress visualization
* Progress values that change slightly on reload
* Smooth front/back flip interaction
* Keyboard-friendly interaction
* Reduced-motion support
* Responsive layout for mobile and desktop
* Verified credential indicator
* Copy public certificate link

## Tech Stack

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS
* Browser localStorage

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite.

## Demo Roll Number

Use:

```text
PRIP001
```

For feedback, enter at least 20 characters.

## Data Approach

This project is intentionally frontend-only.

Candidate information is stored in mock TypeScript data. Claim state is simulated with localStorage.

Seven-day progress is also mocked. On page reload, the displayed activity values shift slightly to simulate the living nature of the credential.

No backend or authentication layer was added because the assignment explicitly allows mocked frontend data.

## Accessibility

The interface was designed with:

* Semantic form controls
* Associated labels
* Visible focus states
* Keyboard-accessible buttons
* Keyboard-accessible syllabus sections
* Enter/Space interaction for the certificate flip
* Reduced-motion support

## Responsive Design

The interface was designed to work at:

* 375px mobile width
* 1440px desktop width

Special attention was given to certificate content, progress visualization, buttons, and long candidate names so that content remains readable without horizontal overflow.

## Tradeoffs

The project intentionally avoids unnecessary architectural complexity.

There is no Redux store, backend, database, authentication, or API layer because those pieces were not needed for the frontend-focused assignment.

The activity data is simulated rather than persisted so that a reload can demonstrate the changing nature of the credential.

## What I Would Do With More Time

With another day, I would explore:

* Persistent activity history backed by a real API
* Stronger social preview/Open Graph metadata
* QR-based certificate verification
* More detailed learning activity such as tasks completed and feedback trends
* Automated tests for claim and public-certificate flows

## Most Interesting Decision

The most interesting decision was treating the flip as a product concept rather than only a visual animation.

The front communicates the candidate's verified achievement, while the back communicates the continuing learning journey. This makes the interaction meaningful to the credential itself.

## Hardest Part

The hardest part was balancing the certificate's formal, trustworthy appearance with the more dynamic learning-progress experience on the back.

The two sides needed to feel like the same credential while still having clearly different purposes.

## What I Would Change With Another Day

I would spend more time refining the visual system and adding richer learning signals to the back side while keeping the certificate restrained and easy to share.

## License

Built as part of the Pripton Innovations Software Developer Assignment.
