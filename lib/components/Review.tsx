import dayjs from "dayjs";
import IReview from "../types/review";

const Review = ({ review }: { review: IReview }) => {
  return (
    <div className="mt-3">
      <div className="flex flex-row gap-2">
        <div>
          {Array(parseInt(`${review.rating}`) + 1)
            .fill(0)
            .map((_, index: number) => (
              <span key={index}>⭐</span>
            ))}
        </div>
        <p>
          {review.reviewerName} <span className="text-sm text-gray-400">{dayjs(review.date).format("DD/MM/YYYY")}</span>
        </p>
      </div>

      <p className="mt-1">{review.comment}</p>
    </div>
  );
};

export default Review;
