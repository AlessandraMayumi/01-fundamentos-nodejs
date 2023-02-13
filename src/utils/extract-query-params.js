/**
    query='search=Batata&limit=5&page=1'
    counter = 1
    query.split('&').reduce((queryParams,param)=>{
        console.log(counter, queryParams, param)
        counter++
        const [key, value] = param.split('=');
        queryParams[key] = value;
        return queryParams;
    },{})

1 search=Batata limit=5 
2 undefined page=1
 */
export function extractQueryParams(query) {
    return query.split('&').reduce((queryParams, param) => {
        const [key, value] = param.split('=');
        queryParams[key] = value;
        return queryParams;
    }, {})
}