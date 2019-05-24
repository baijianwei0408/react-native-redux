import axios from 'axios';

async function requestApi(opts) {
    let { dispatch, type, url, method, params } = opts;

    if (!type) new Error('type为空');
    if (!url) new Error('url为空');

    if (!method) method = 'get';
    method && method.toLowerCase();

    params = getDatas(params);

    await axios({
        method: method,
        url: url,
        data: params ? getDatas(params) : null
    }).then(response => {
        dispatch({
            type,
            preload: response.data
        });
    }).catch(error => {
        console.log(error);
    })

}


function getDatas(params) {
    let data = {};
    for (let key in params) {
        data[key] = params[key];
    }
    return data
}

export { requestApi } ;