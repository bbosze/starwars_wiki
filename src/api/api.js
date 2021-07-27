import axios from 'axios';
import { changeKeysToCamelCase } from 'Utils/utils';

// eslint-disable-next-line import/prefer-default-export
export const getData = (url) => axios.get(url).then((response) => (changeKeysToCamelCase(response.data)));
