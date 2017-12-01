export function get({ url, headers = {}, withCredentials, onSuccess, onError }) {
  fetch(url, {
    method: 'GET',
    headers,
    ...withCredentials && { credentials: 'include' }
  })
    .then(response => response.json())
    .then(json => onSuccess(json))
    .catch(err => onError(err));
}

export function post({ url, body, headers = {}, onSuccess, onError, multipart = false }) {
  fetch(url, {
    method: 'POST',
    headers,
    body: multipart ? body : JSON.stringify(body)
  })
    .then(response => response.json())
    .then(json => onSuccess(json))
    .catch(err => onError(err));
}

export function patch({ url, body, headers = {}, onSuccess, onError, multipart = false }) {
  fetch(url, {
    method: 'PATCH',
    headers,
    body: multipart ? body : JSON.stringify(body)
  })
    .then(response => response.json())
    .then(json => onSuccess(json))
    .catch(err => onError(err));
}

export function remove({ url, headers = {}, onSuccess, onError }) {
  fetch(url, {
    method: 'DELETE',
    headers
  })
    .then(response => response.json())
    .then(json => onSuccess(json))
    .catch(err => onError(err));
}
