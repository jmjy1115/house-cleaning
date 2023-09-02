import db from '../models/index.js';
const { Review } = db;

export const getReview = async (req, res, next) => {
  const currentPage = req.query.page;
  const limit = req.query.limit;
  const offest = (currentPage - 1) * pageLimit;

  try {
    const reviews = await Review.findAll({
      order: [['createdAt', 'ASC']],
      limit: limit,
      offest: offest,
    });
    res.json(reviews);
  } catch (err) {
    console.error(err);
    next(err);
  }
}
