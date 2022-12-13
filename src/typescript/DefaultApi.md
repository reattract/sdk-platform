# .DefaultApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1OrganizationsGet**](DefaultApi.md#apiV1OrganizationsGet) | **GET** /api/v1/organizations | List organizations
[**apiV1OrganizationsIdDelete**](DefaultApi.md#apiV1OrganizationsIdDelete) | **DELETE** /api/v1/organizations/{id} | Delete an organization
[**apiV1OrganizationsIdGet**](DefaultApi.md#apiV1OrganizationsIdGet) | **GET** /api/v1/organizations/{id} | Retrieve an organization
[**apiV1OrganizationsIdPatch**](DefaultApi.md#apiV1OrganizationsIdPatch) | **PATCH** /api/v1/organizations/{id} | Update an organization
[**apiV1OrganizationsPost**](DefaultApi.md#apiV1OrganizationsPost) | **POST** /api/v1/organizations | Create an organization
[**apiV1UsersIdGet**](DefaultApi.md#apiV1UsersIdGet) | **GET** /api/v1/users/{id} | Retrieve a user
[**apiV1UsersIdPatch**](DefaultApi.md#apiV1UsersIdPatch) | **PATCH** /api/v1/users/{id} | Update a user
[**apiV1UsersProfileGet**](DefaultApi.md#apiV1UsersProfileGet) | **GET** /api/v1/users/profile | Retrieve user profile information based on JWT
[**apiV1UsersRegistrationsPost**](DefaultApi.md#apiV1UsersRegistrationsPost) | **POST** /api/v1/users/registrations | User sign up
[**apiV1UsersSessionsDelete**](DefaultApi.md#apiV1UsersSessionsDelete) | **DELETE** /api/v1/users/sessions | Sign out as a user
[**apiV1UsersSessionsPost**](DefaultApi.md#apiV1UsersSessionsPost) | **POST** /api/v1/users/sessions | Sign in as a user


# **apiV1OrganizationsGet**
> Array<Organization> apiV1OrganizationsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiV1OrganizationsGetRequest = {
  // string (optional)
  accept: "Accept_example",
  // string (optional)
  authorization: "Authorization_example",
};

apiInstance.apiV1OrganizationsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<Organization>**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiV1OrganizationsIdDelete**
> void apiV1OrganizationsIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiV1OrganizationsIdDeleteRequest = {
  // string | id
  id: "id_example",
  // string (optional)
  accept: "Accept_example",
  // string (optional)
  authorization: "Authorization_example",
};

apiInstance.apiV1OrganizationsIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined
 **accept** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The organization is removed |  -  |
**403** | unowned organization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiV1OrganizationsIdGet**
> Organization apiV1OrganizationsIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiV1OrganizationsIdGetRequest = {
  // string | id
  id: "id_example",
  // string (optional)
  accept: "Accept_example",
  // string (optional)
  authorization: "Authorization_example",
};

apiInstance.apiV1OrganizationsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined
 **accept** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**Organization**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | organization found |  -  |
**403** | unowned organization |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiV1OrganizationsIdPatch**
> Organization apiV1OrganizationsIdPatch(organization)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiV1OrganizationsIdPatchRequest = {
  // string | id
  id: "id_example",
  // Organization
  organization: {
    name: "name_example",
    description: "description_example",
  },
  // string (optional)
  accept: "Accept_example",
  // string (optional)
  authorization: "Authorization_example",
};

apiInstance.apiV1OrganizationsIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **Organization**|  |
 **id** | [**string**] | id | defaults to undefined
 **accept** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**Organization**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization updated successfully |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiV1OrganizationsPost**
> Organization apiV1OrganizationsPost(organization)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiV1OrganizationsPostRequest = {
  // Organization
  organization: {
    name: "name_example",
    description: "description_example",
  },
  // string (optional)
  accept: "Accept_example",
  // string (optional)
  authorization: "Authorization_example",
};

apiInstance.apiV1OrganizationsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **Organization**|  |
 **accept** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**Organization**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The organization is created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiV1UsersIdGet**
> User apiV1UsersIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiV1UsersIdGetRequest = {
  // string | id
  id: "id_example",
  // string (optional)
  accept: "Accept_example",
  // string (optional)
  authorization: "Authorization_example",
};

apiInstance.apiV1UsersIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | id | defaults to undefined
 **accept** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**User**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | user found |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiV1UsersIdPatch**
> User apiV1UsersIdPatch(user)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiV1UsersIdPatchRequest = {
  // string | id
  id: "id_example",
  // User
  user: {
    email: "email_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
    role: "engineer",
  },
  // string (optional)
  accept: "Accept_example",
  // string (optional)
  authorization: "Authorization_example",
};

apiInstance.apiV1UsersIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**|  |
 **id** | [**string**] | id | defaults to undefined
 **accept** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**User**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User updated successfully |  -  |
**403** | forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiV1UsersProfileGet**
> User apiV1UsersProfileGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiV1UsersProfileGetRequest = {
  // string (optional)
  accept: "Accept_example",
  // string (optional)
  authorization: "Authorization_example",
};

apiInstance.apiV1UsersProfileGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**User**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Currently authenticated user profile information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiV1UsersRegistrationsPost**
> void apiV1UsersRegistrationsPost(user)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiV1UsersRegistrationsPostRequest = {
  // User
  user: {
    email: "email_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
    role: "engineer",
  },
  // string (optional)
  accept: "Accept_example",
};

apiInstance.apiV1UsersRegistrationsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**|  |
 **accept** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User is created successfully |  * Authorization - The JWT Bearer token <br>  |
**422** | User already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiV1UsersSessionsDelete**
> void apiV1UsersSessionsDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiV1UsersSessionsDeleteRequest = {
  // string (optional)
  accept: "Accept_example",
  // string (optional)
  authorization: "Authorization_example",
};

apiInstance.apiV1UsersSessionsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |
**422** | already signed out |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiV1UsersSessionsPost**
> void apiV1UsersSessionsPost(userAuthentication)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiApiV1UsersSessionsPostRequest = {
  // UserAuthentication
  userAuthentication: {
    user: {
      email: "email_example",
      password: "password_example",
    },
  },
  // string (optional)
  accept: "Accept_example",
};

apiInstance.apiV1UsersSessionsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userAuthentication** | **UserAuthentication**|  |
 **accept** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  * Authorization - The JWT Bearer token <br>  |
**401** | bad username/password |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


