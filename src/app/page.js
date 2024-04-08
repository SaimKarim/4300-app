"use client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import BlogPostPage from "./SignIn";
import Navigation from "./Navigation";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AddWorkout from "./components/AddWorkout";
import WorkoutHistory from "./components/WorkoutHistory";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login/" element={<SignIn />} />
          <Route path="/signup/" element={<SignUp />} />
          <Route path="/workout-history" element={<WorkoutHistory />} />
          <Route path="/add-workout" element={<AddWorkout />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
