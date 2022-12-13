# OpenapiClient::DefaultApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**api_v1_organizations_get**](DefaultApi.md#api_v1_organizations_get) | **GET** /api/v1/organizations | List organizations |
| [**api_v1_organizations_id_delete**](DefaultApi.md#api_v1_organizations_id_delete) | **DELETE** /api/v1/organizations/{id} | Delete an organization |
| [**api_v1_organizations_id_get**](DefaultApi.md#api_v1_organizations_id_get) | **GET** /api/v1/organizations/{id} | Retrieve an organization |
| [**api_v1_organizations_id_patch**](DefaultApi.md#api_v1_organizations_id_patch) | **PATCH** /api/v1/organizations/{id} | Update an organization |
| [**api_v1_organizations_post**](DefaultApi.md#api_v1_organizations_post) | **POST** /api/v1/organizations | Create an organization |
| [**api_v1_users_id_get**](DefaultApi.md#api_v1_users_id_get) | **GET** /api/v1/users/{id} | Retrieve a user |
| [**api_v1_users_id_patch**](DefaultApi.md#api_v1_users_id_patch) | **PATCH** /api/v1/users/{id} | Update a user |
| [**api_v1_users_profile_get**](DefaultApi.md#api_v1_users_profile_get) | **GET** /api/v1/users/profile | Retrieve user profile information based on JWT |
| [**api_v1_users_registrations_post**](DefaultApi.md#api_v1_users_registrations_post) | **POST** /api/v1/users/registrations | User sign up |
| [**api_v1_users_sessions_delete**](DefaultApi.md#api_v1_users_sessions_delete) | **DELETE** /api/v1/users/sessions | Sign out as a user |
| [**api_v1_users_sessions_post**](DefaultApi.md#api_v1_users_sessions_post) | **POST** /api/v1/users/sessions | Sign in as a user |


## api_v1_organizations_get

> <Array<Organization>> api_v1_organizations_get(opts)

List organizations

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
opts = {
  accept: 'accept_example', # String | 
  authorization: 'authorization_example' # String | 
}

begin
  # List organizations
  result = api_instance.api_v1_organizations_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_organizations_get: #{e}"
end
```

#### Using the api_v1_organizations_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Organization>>, Integer, Hash)> api_v1_organizations_get_with_http_info(opts)

```ruby
begin
  # List organizations
  data, status_code, headers = api_instance.api_v1_organizations_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Organization>>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_organizations_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **accept** | **String** |  | [optional] |
| **authorization** | **String** |  | [optional] |

### Return type

[**Array&lt;Organization&gt;**](Organization.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## api_v1_organizations_id_delete

> api_v1_organizations_id_delete(id, opts)

Delete an organization

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
id = 'id_example' # String | id
opts = {
  accept: 'accept_example', # String | 
  authorization: 'authorization_example' # String | 
}

begin
  # Delete an organization
  api_instance.api_v1_organizations_id_delete(id, opts)
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_organizations_id_delete: #{e}"
end
```

#### Using the api_v1_organizations_id_delete_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> api_v1_organizations_id_delete_with_http_info(id, opts)

```ruby
begin
  # Delete an organization
  data, status_code, headers = api_instance.api_v1_organizations_id_delete_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_organizations_id_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | id |  |
| **accept** | **String** |  | [optional] |
| **authorization** | **String** |  | [optional] |

### Return type

nil (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## api_v1_organizations_id_get

> <Organization> api_v1_organizations_id_get(id, opts)

Retrieve an organization

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
id = 'id_example' # String | id
opts = {
  accept: 'accept_example', # String | 
  authorization: 'authorization_example' # String | 
}

begin
  # Retrieve an organization
  result = api_instance.api_v1_organizations_id_get(id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_organizations_id_get: #{e}"
end
```

#### Using the api_v1_organizations_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Organization>, Integer, Hash)> api_v1_organizations_id_get_with_http_info(id, opts)

```ruby
begin
  # Retrieve an organization
  data, status_code, headers = api_instance.api_v1_organizations_id_get_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Organization>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_organizations_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | id |  |
| **accept** | **String** |  | [optional] |
| **authorization** | **String** |  | [optional] |

### Return type

[**Organization**](Organization.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## api_v1_organizations_id_patch

> <Organization> api_v1_organizations_id_patch(id, organization, opts)

Update an organization

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
id = 'id_example' # String | id
organization = OpenapiClient::Organization.new({id: 37, name: 'name_example', created_at: Time.now, updated_at: Time.now}) # Organization | 
opts = {
  accept: 'accept_example', # String | 
  authorization: 'authorization_example' # String | 
}

begin
  # Update an organization
  result = api_instance.api_v1_organizations_id_patch(id, organization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_organizations_id_patch: #{e}"
end
```

#### Using the api_v1_organizations_id_patch_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Organization>, Integer, Hash)> api_v1_organizations_id_patch_with_http_info(id, organization, opts)

```ruby
begin
  # Update an organization
  data, status_code, headers = api_instance.api_v1_organizations_id_patch_with_http_info(id, organization, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Organization>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_organizations_id_patch_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | id |  |
| **organization** | [**Organization**](Organization.md) |  |  |
| **accept** | **String** |  | [optional] |
| **authorization** | **String** |  | [optional] |

### Return type

[**Organization**](Organization.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## api_v1_organizations_post

> <Organization> api_v1_organizations_post(organization, opts)

Create an organization

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
organization = OpenapiClient::Organization.new({id: 37, name: 'name_example', created_at: Time.now, updated_at: Time.now}) # Organization | 
opts = {
  accept: 'accept_example', # String | 
  authorization: 'authorization_example' # String | 
}

begin
  # Create an organization
  result = api_instance.api_v1_organizations_post(organization, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_organizations_post: #{e}"
end
```

#### Using the api_v1_organizations_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Organization>, Integer, Hash)> api_v1_organizations_post_with_http_info(organization, opts)

```ruby
begin
  # Create an organization
  data, status_code, headers = api_instance.api_v1_organizations_post_with_http_info(organization, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Organization>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_organizations_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **organization** | [**Organization**](Organization.md) |  |  |
| **accept** | **String** |  | [optional] |
| **authorization** | **String** |  | [optional] |

### Return type

[**Organization**](Organization.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## api_v1_users_id_get

> <User> api_v1_users_id_get(id, opts)

Retrieve a user

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
id = 'id_example' # String | id
opts = {
  accept: 'accept_example', # String | 
  authorization: 'authorization_example' # String | 
}

begin
  # Retrieve a user
  result = api_instance.api_v1_users_id_get(id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_users_id_get: #{e}"
end
```

#### Using the api_v1_users_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<User>, Integer, Hash)> api_v1_users_id_get_with_http_info(id, opts)

```ruby
begin
  # Retrieve a user
  data, status_code, headers = api_instance.api_v1_users_id_get_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <User>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_users_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | id |  |
| **accept** | **String** |  | [optional] |
| **authorization** | **String** |  | [optional] |

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## api_v1_users_id_patch

> <User> api_v1_users_id_patch(id, user, opts)

Update a user

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
id = 'id_example' # String | id
user = OpenapiClient::User.new({id: 37, email: 'email_example', created_at: Time.now, updated_at: Time.now}) # User | 
opts = {
  accept: 'accept_example', # String | 
  authorization: 'authorization_example' # String | 
}

begin
  # Update a user
  result = api_instance.api_v1_users_id_patch(id, user, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_users_id_patch: #{e}"
end
```

#### Using the api_v1_users_id_patch_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<User>, Integer, Hash)> api_v1_users_id_patch_with_http_info(id, user, opts)

```ruby
begin
  # Update a user
  data, status_code, headers = api_instance.api_v1_users_id_patch_with_http_info(id, user, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <User>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_users_id_patch_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | id |  |
| **user** | [**User**](User.md) |  |  |
| **accept** | **String** |  | [optional] |
| **authorization** | **String** |  | [optional] |

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## api_v1_users_profile_get

> <User> api_v1_users_profile_get(opts)

Retrieve user profile information based on JWT

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
opts = {
  accept: 'accept_example', # String | 
  authorization: 'authorization_example' # String | 
}

begin
  # Retrieve user profile information based on JWT
  result = api_instance.api_v1_users_profile_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_users_profile_get: #{e}"
end
```

#### Using the api_v1_users_profile_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<User>, Integer, Hash)> api_v1_users_profile_get_with_http_info(opts)

```ruby
begin
  # Retrieve user profile information based on JWT
  data, status_code, headers = api_instance.api_v1_users_profile_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <User>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_users_profile_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **accept** | **String** |  | [optional] |
| **authorization** | **String** |  | [optional] |

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## api_v1_users_registrations_post

> api_v1_users_registrations_post(user, opts)

User sign up

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
user = OpenapiClient::User.new({id: 37, email: 'email_example', created_at: Time.now, updated_at: Time.now}) # User | 
opts = {
  accept: 'accept_example' # String | 
}

begin
  # User sign up
  api_instance.api_v1_users_registrations_post(user, opts)
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_users_registrations_post: #{e}"
end
```

#### Using the api_v1_users_registrations_post_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> api_v1_users_registrations_post_with_http_info(user, opts)

```ruby
begin
  # User sign up
  data, status_code, headers = api_instance.api_v1_users_registrations_post_with_http_info(user, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_users_registrations_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user** | [**User**](User.md) |  |  |
| **accept** | **String** |  | [optional] |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## api_v1_users_sessions_delete

> api_v1_users_sessions_delete(opts)

Sign out as a user

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (JWT): bearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
opts = {
  accept: 'accept_example', # String | 
  authorization: 'authorization_example' # String | 
}

begin
  # Sign out as a user
  api_instance.api_v1_users_sessions_delete(opts)
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_users_sessions_delete: #{e}"
end
```

#### Using the api_v1_users_sessions_delete_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> api_v1_users_sessions_delete_with_http_info(opts)

```ruby
begin
  # Sign out as a user
  data, status_code, headers = api_instance.api_v1_users_sessions_delete_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_users_sessions_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **accept** | **String** |  | [optional] |
| **authorization** | **String** |  | [optional] |

### Return type

nil (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## api_v1_users_sessions_post

> api_v1_users_sessions_post(user_authentication, opts)

Sign in as a user

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
user_authentication = OpenapiClient::UserAuthentication.new({user: OpenapiClient::UserAuthenticationUser.new({email: 'email_example', password: 'password_example'})}) # UserAuthentication | 
opts = {
  accept: 'accept_example' # String | 
}

begin
  # Sign in as a user
  api_instance.api_v1_users_sessions_post(user_authentication, opts)
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_users_sessions_post: #{e}"
end
```

#### Using the api_v1_users_sessions_post_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> api_v1_users_sessions_post_with_http_info(user_authentication, opts)

```ruby
begin
  # Sign in as a user
  data, status_code, headers = api_instance.api_v1_users_sessions_post_with_http_info(user_authentication, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->api_v1_users_sessions_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_authentication** | [**UserAuthentication**](UserAuthentication.md) |  |  |
| **accept** | **String** |  | [optional] |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

