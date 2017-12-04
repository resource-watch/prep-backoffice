import { post, patch } from 'utils/request';
// import sortBy from 'lodash/sortBy';

// import { getFieldUrl, getFields } from 'utils/datasets/fields';

export default class DatasetsService {
  constructor(options = {}) {
    this.opts = options;

    this.headers = {
      'Content-Type': 'application/json',
      Authorization: this.opts.authorization
    };
  }

  createDataset(body) {
    return new Promise((resolve, reject) => {
      post({
        url: `${process.env.WRI_API_URL}/dataset`,
        body,
        headers: this.headers,
        onSuccess: (response) => { resolve(response.data.attributes); },
        onError: (error) => { reject(error); }
      });
    });
  }

  updateDataset({ body, id }) {
    return new Promise((resolve, reject) => {
      patch({
        url: `${process.env.WRI_API_URL}/dataset/${id}`,
        body,
        headers: this.headers,
        onSuccess: (response) => {
          resolve({
            ...response.data.attributes,
            id: response.data.id
          });
        },
        onError: (error) => { reject(error); }
      });
    });
  }
}
