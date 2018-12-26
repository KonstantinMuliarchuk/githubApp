import axios from 'axios';

export const fetchHome = (params) => {
    let url = '/search/repositories?'
    if (params) {
        if (params.search){
            url += `q=${params.search}&`
        }
        if(params.sorting) {
            url += `sort=${params.search}&`
        }
    }
    url += `page=${params.page}&per_page=15`
    return axios({
        ...axios.defaults,
        method: 'get',
        url
    })
    .then(response => ({data: response.data}))
    .catch(error => ({Error: error.data}))
}