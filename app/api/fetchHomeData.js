import axios from 'axios';

export const fetchHome = (params) => {

    let url = '/search/repositories?'
    
    if (params) {
        if (params.search){
            url += `q=${params.search}&`
        }
        if(params.sort) {
            url += `sort=${params.sort}&order=desc&`
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