import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
    const { data: reviews = [], isLoading: reviewsloading, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const url = 'http://localhost:5000/reviews';
            const result = await fetch(url);
            return result.json();
        }
    })

    return [reviews, reviewsloading, refetch];
};

export default useReviews;