# OpenapiClient::User

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** |  | [readonly] |
| **email** | **String** |  |  |
| **first_name** | **String** |  | [optional] |
| **last_name** | **String** |  | [optional] |
| **role** | **String** |  | [optional] |
| **created_at** | **Time** |  | [readonly] |
| **updated_at** | **Time** |  | [readonly] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::User.new(
  id: null,
  email: null,
  first_name: null,
  last_name: null,
  role: null,
  created_at: null,
  updated_at: null
)
```

