import React from 'react';
import ReactDOM from 'react-dom';

import './components/ReviewsList/ReviewsList.css';
import './components/ReviewsOverall/ReviewsOverall.css';
import './styles.css';
import ReviewsOverview from './components/ReviewsOverview';

const ReviewsOverviewEl = document.getElementById('reviews-overview');
if (ReviewsOverviewEl) {
  ReactDOM.render(<ReviewsOverview />, ReviewsOverviewEl);
}