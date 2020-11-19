const { response } = require('express');
const request = require('supertest');
const app = require('../app');


afterAll((done) => {
    done();
});  

describe('Testing for api get province', () => {
  test('should return statusCode 200 for endpoint: /provinces', () => {
    request(app).get('/provinces').expect(200);
  });

  test('should return statusCode 200 and data "Bali" for endpoint: /provinces?searchKey=1', async () => {
    const responseMock = {
      code: 200,
      status: 'success',
      data: {
        province_id: '1',
        province: 'Bali',
      },
    };
    const req = await request(app).get('/provinces?searchKey=1');

    expect(req.status).toBe(200);
    expect(req.body).toEqual(responseMock);
  }, 30000);

  test('should return statusCode 404 for endpoint: /provinces?searchKey=0', async () => {
    const responseMock = {
      code: 404,
      status: 'failed',
      msg: 'Data tidak ditemukan',
    };
    const req = await request(app).get('/provinces?searchKey=0');

    expect(req.status).toBe(404);
    expect(req.body).toEqual(responseMock);
  }, 30000);
});

describe('Testing for api get city', () => {
  test('should return statusCode 200 for endpoint: /cities', () => {
    request(app).get('/cities').expect(200);
  });

  test('should return statusCode 200 and data "Aceh Barat" for endpoint: /cities?searchKey=1', async () => {
    const responseMock = {
      code: 200,
      status: 'success',
      data: {
        city_id: '1',
        province_id: '21',
        province: 'Nanggroe Aceh Darussalam (NAD)',
        type: 'Kabupaten',
        city_name: 'Aceh Barat',
        postal_code: '23681',
      },
    };
    const req = await request(app).get('/cities?searchKey=1');

    expect(req.status).toBe(200);
    expect(req.body).toEqual(responseMock);
  }, 30000);

  test('should return statusCode 404 for endpoint: /cities?searchKey=0', async () => {
    const responseMock = {
      code: 404,
      status: 'failed',
      msg: 'Data tidak ditemukan',
    };
    const req = await request(app).get('/cities?searchKey=0');

    expect(req.status).toBe(404);
    expect(req.body).toEqual(responseMock);
  }, 30000);
});

describe('Testing for endpoint not found', () => {
    test('should be not found for endpoint: /kota', async () => {
        const responseMock = {
            code:404,
            msg: 'Endpoint not found'
        }
        const req = await request(app).get('/kota');

        expect(req.status).toBe(404);
        expect(req.body).toEqual(responseMock);
    })
    
})
