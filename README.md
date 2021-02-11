# Mental Health Application - React Native

Be in control of your own counselling!

<!-- ![Mental Health App Homepage](https://user-images.githubusercontent.com/63508057/107687290-3719c380-6c9e-11eb-9876-aa8783e55baa.jpg) -->
<img width="200" height="400" src="https://user-images.githubusercontent.com/63508057/107687290-3719c380-6c9e-11eb-9876-aa8783e55baa.jpg">

### The Problem

- An aspect of the role of a counsellor is to present information you disclose with them back at you to help you understand your wraped thoughts and subjectivity bias.
- However, not everyone has access to mental health experts, and for the ones who do, they do not always need them during their visits. Instead they need instant help so they can diagnose and resolve the issues dynamically as they emotionally arrive.

### The Solution & Function of Application

This application asks a simple set of 4 questions from the user:

1. What do you feel?
   - Emotion (Happy, Sad, Depressed, Anxious, Dispare, Excited).
2. How intense is the feeling?
   - Likert Scale (1=10 Scale).
3. Where did this occur?
   - Context (Working, Shopping, Socialising, Exercising).
4. What time did this occur?
   - Time (Morning, Afternoon, Nighttime)

If the app is consistently used, the user can populate abstract data about their emotional blindspots.
Examples of possible data to extract from user data:

- {70%} of the time during the {Morning} you feel {Anxious} because you are {working}
- {40%} of the time during the {Night} you feel {Angry} because you are {Exercising}
- {10%} of the time during the {Afternoon} you feel {Happy} because you are {Socialising}

Ideally, these will be presented into Visualisations with Chart libraries! However this is in very early development.

### Entity Relationship Diagram for API

- The user will input abstract data which will be posted to an API to store in a database.
- The email will act as the @Id index for accesing the user data
- The data will be mapped to a Model, which will be a Class named 'Event'
- This data will be manipulated using Visualisation and Chart data

<img width="300" height="300" alt="ERD" src="https://user-images.githubusercontent.com/63508057/107350992-ffeebb00-6ac1-11eb-9f75-b2748019eff8.png">
