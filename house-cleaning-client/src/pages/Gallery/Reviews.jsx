import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectCases.css';
  
function Reviews() {
  const [ reviews, setReviews ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);
  
  // 생명주기를 활용하면 currentPage가 변경될 때마다 게시판이 최신화 됨
  // 버튼 클릭으로 currentPage는 자동으로 변경됨
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/review?page=${currentPage}&limit=10`
        );
        setReviews(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  }, [currentPage]);

  return (
    <div className="review-board">
      <ul>
        {reviews.map(review => (
          <li key={review.id}>{review.title}</li>
        ))}
        {reviews.length < 10 &&
          [...Array.from({ length: 10 - reviews.length })].map((_, index) => (
            <li key={`empty-${index}`}></li>
          ))
        }
      </ul>
    </div>
  );
}

export default Reviews;
