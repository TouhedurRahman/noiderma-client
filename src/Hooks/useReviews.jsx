import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
    const { data: reviews = [], isLoading: reviewsloading, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const url = '/reviews.json';
            const result = await fetch(url);
            return result.json();
        }
    })

    return [reviews, reviewsloading, refetch];
};

export default useReviews;