import axios from "axios"

export const fetchNews = async (page: number, limit: number) => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-06-07&sortBy=publishedAt&page=${page}&pageSize=${limit}&apiKey=11f36560abbc420682b173cd9f801257`);
    return await response.json();
}