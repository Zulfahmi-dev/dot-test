# DOT-Test
DOT-test is an api for get data province anda city in indonesia

## Built With
[![Express.js](https://img.shields.io/badge/express-4.17.1-yellow?style=rounded-square)](https://expressjs.com/en/starter/installing.html) [![Node.js](https://img.shields.io/badge/npm-6.4.1-greenstyle?rounded-square)](https://nodejs.org/) [![Morgan](https://img.shields.io/badge/axios-0.19.2-red?style=rounded-square)](https://www.npmjs.com/package/morgan)  [![CORS](https://img.shields.io/badge/module_alias-2.2.2-yellowgreen?style=rounded-square)](https://www.npmjs.com/package/jsonwebtoken)


##  Installation
- Clone this repository.
- Install the dependencies and devDependencies and start the server.
```sh
$ cd dot-test
$ npm install
$ npm start
```
- For running automation test

```sh
$ npm run test
```

### HTTP Requests

All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

-   `GET`  Get a resource or list of resources
-   `POST`  Create a resource
-   `PUT`  Update a resource
-   `DELETE`  Delete a resource

### HTTP Response Codes
| Code  | Status               | Description                                                                         |
| :---- | :------------------- | :---------------------------------------------------------------------------------- |
| `200` | `Succes`                 | The request was successful and there is data                                                         |
| `404` | `Failed`        | There was not found data    |

## Endpoints

### A. Endpoint for province
**1. Read All Province**
 -   **Request**  :  **`GET /provincies`**
 -   **Response**  :
```
{
    "code": 200,
    "status": "success",
    "data": [
        {
            "province_id": "1",
            "province": "Bali"
        },
        {
            "province_id": "2",
            "province": "Bangka Belitung"
        },
        ...
	]
}
```
**2. Read Province By Id**
 -   **Request**  :  **`GET /provincies?searchKey=1`**
 -   **Response**  :
```
{
    "code": 200,
    "status": "success",
    "data": {
        "province_id": "1",
        "province": "Bali"
    }
}
```
 -   **Error Response**  :
```
{
    "code": 404,
    "status": "failed",
    "msg": "Data tidak ditemukan"
}
```


### B. Endpoint for city
**1. Read All Cities**
 -   **Request**  :  **`GET /cities`**
 -   **Response**  :
```
{
    "code": 200,
    "status": "success",
    "data": [
        {
            "city_id": "1",
            "province_id": "21",
            "province": "Nanggroe Aceh Darussalam (NAD)",
            "type": "Kabupaten",
            "city_name": "Aceh Barat",
            "postal_code": "23681"
        },
        {
            "city_id": "2",
            "province_id": "21",
            "province": "Nanggroe Aceh Darussalam (NAD)",
            "type": "Kabupaten",
            "city_name": "Aceh Barat Daya",
            "postal_code": "23764"
        },
        ...
	]
}
```
**2. Read City By Id**
 -   **Request**  :  **`GET /cities?searchKey=1`**
 -   **Response**  :
```
{
    "code": 200,
    "status": "success",
    "data": {
        "city_id": "1",
        "province_id": "21",
        "province": "Nanggroe Aceh Darussalam (NAD)",
        "type": "Kabupaten",
        "city_name": "Aceh Barat",
        "postal_code": "23681"
    }
}
```
 -   **Error Response**  :
```
{
    "code": 404,
    "status": "failed",
    "msg": "Data tidak ditemukan"
}
```