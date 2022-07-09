import { useEffect } from "react";

export const useNews = (setPagePagination: any, setNews: any, fetchFunc: any,[...args]: any): any => {
    useEffect(() => {
        fetchFunc(...args)
        .then((res: any) => {
            const result1: any = [];
            const result2: any = [];
            let pages = Math.ceil(res.totalResults / 10);
            res.articles.forEach((article: any) =>{
                result1.push(article);
            });

            if(pages > 10) pages = 10;
            for (let index = 1; index <= pages; index++) {
                result2.push(index);      
            }
            
            setNews(result1);
            setPagePagination(result2);
        })
    }, [...args]);
}