import axios from "axios"

export const fetchNews = async (page: number, limit: number) => {
    const response = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&pageSize=${limit}&page=${page}&language=en&apiKey=11f36560abbc420682b173cd9f801257`);
    return await response.json();
}