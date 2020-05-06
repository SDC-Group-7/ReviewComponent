import React from 'react';
import ReactDOM from 'react-dom';

import './components/ReviewsList/ReviewsList.css';

import ReviewsList from './components/ReviewsList/index.jsx';

const ReviewsListEl = document.getElementById('reviews-list');
if (ReviewsListEl) {
  ReactDOM.render(<ReviewsList />, ReviewsListEl);
}