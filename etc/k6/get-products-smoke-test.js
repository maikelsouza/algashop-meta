import http from 'k6/http';
import {check, sleep} from 'k6';

const BASE_URL = __ENV.BASE_URL || 'http://localhost:8083';

export const options = {
  vus: 10,
  duration: '5s',
};

export default function() {
  let res = http.get(`${BASE_URL}/api/v1/products`);
  check(res, { "status is 200": (res) => res.status === 200 });
  sleep(1);
}
