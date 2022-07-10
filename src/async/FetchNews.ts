export const fetchNews = async (page: number, limit: number, query: string, selector: string) => {
    const response = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&pageSize=${limit}&page=${page}&q=${query}&sortBy=${selector}&language=en&apiKey=11f36560abbc420682b173cd9f801257`);
    return await response.json();
}

export const fetchNewsByTitle = async (title: string | undefined) => {
    const response = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&serachIn=title&q=${title}&language=en&apiKey=11f36560abbc420682b173cd9f801257`);
    return await response.json();
}