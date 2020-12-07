const request = async (method, url, body) => {
    let options = {
        method,
    };

    if (body) {
        Object.assign(options, {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
    }

    let response = await fetch(url, options);
    let data = await response.json();
    return data;
}

export default {
    post: request.bind(this,'POST'),
    get: request.bind(this,'GET'),
    delete: request.bind(this,'DELETE'),
    put: request.bind(this,'PUT'),
    patch: request.bind(this,'PATCH')
}