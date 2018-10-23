const apiGet = (url) => () => fetch(url).then(note => note.json());

const apiPost = (url, obj) => () =>
    fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' }),
    }).then(v => v.json())
        .then(r => {
            if (r.error) {
                return Promise.reject(r.validation);
            }
            return r;
        });

const apiPut = (url, id, obj) => () =>
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
        .then(r => {
            if (r.error) {
                return Promise.reject(r.validation);
            }
            return r;
        });

const apiDelete = (url, id) => () =>
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: new Headers({ 'Content-type': 'application/json' })
    }).then(v => v.json())
        .then(r => {
            if (r.error) {
                return Promise.reject(r.validation);
            }
            return id;
        });

export {
    apiGet,
    apiPost,
    apiPut,
    apiDelete,
};
