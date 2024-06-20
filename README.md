# Amazon

Register - 
url - http://localhost:8000/api/user/register/
request - {
    "username": "admin",
    "password": 1234
}

Token -
url - http://localhost:8000/api/token
request - {
    "username": "admin",
    "password": 1234
}
response - {
    "refresh": "",
    "access": ""
}

Refresh - 
url - http://localhost:8000/api/token/refresh
request - {
    "refresh": ""
}
response - {
    "access": ""
}