import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { ErrorsMapValueInner } from '../models/ErrorsMapValueInner';
import { ErrorsObject } from '../models/ErrorsObject';
import { Organization } from '../models/Organization';
import { User } from '../models/User';
import { UserAuthentication } from '../models/UserAuthentication';
import { UserAuthenticationUser } from '../models/UserAuthenticationUser';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiApiV1OrganizationsGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1OrganizationsGet
     */
    accept?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1OrganizationsGet
     */
    authorization?: string
}

export interface DefaultApiApiV1OrganizationsIdDeleteRequest {
    /**
     * id
     * @type string
     * @memberof DefaultApiapiV1OrganizationsIdDelete
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1OrganizationsIdDelete
     */
    accept?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1OrganizationsIdDelete
     */
    authorization?: string
}

export interface DefaultApiApiV1OrganizationsIdGetRequest {
    /**
     * id
     * @type string
     * @memberof DefaultApiapiV1OrganizationsIdGet
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1OrganizationsIdGet
     */
    accept?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1OrganizationsIdGet
     */
    authorization?: string
}

export interface DefaultApiApiV1OrganizationsIdPatchRequest {
    /**
     * id
     * @type string
     * @memberof DefaultApiapiV1OrganizationsIdPatch
     */
    id: string
    /**
     * 
     * @type Organization
     * @memberof DefaultApiapiV1OrganizationsIdPatch
     */
    organization: Organization
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1OrganizationsIdPatch
     */
    accept?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1OrganizationsIdPatch
     */
    authorization?: string
}

export interface DefaultApiApiV1OrganizationsPostRequest {
    /**
     * 
     * @type Organization
     * @memberof DefaultApiapiV1OrganizationsPost
     */
    organization: Organization
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1OrganizationsPost
     */
    accept?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1OrganizationsPost
     */
    authorization?: string
}

export interface DefaultApiApiV1UsersIdGetRequest {
    /**
     * id
     * @type string
     * @memberof DefaultApiapiV1UsersIdGet
     */
    id: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1UsersIdGet
     */
    accept?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1UsersIdGet
     */
    authorization?: string
}

export interface DefaultApiApiV1UsersIdPatchRequest {
    /**
     * id
     * @type string
     * @memberof DefaultApiapiV1UsersIdPatch
     */
    id: string
    /**
     * 
     * @type User
     * @memberof DefaultApiapiV1UsersIdPatch
     */
    user: User
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1UsersIdPatch
     */
    accept?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1UsersIdPatch
     */
    authorization?: string
}

export interface DefaultApiApiV1UsersProfileGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1UsersProfileGet
     */
    accept?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1UsersProfileGet
     */
    authorization?: string
}

export interface DefaultApiApiV1UsersRegistrationsPostRequest {
    /**
     * 
     * @type User
     * @memberof DefaultApiapiV1UsersRegistrationsPost
     */
    user: User
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1UsersRegistrationsPost
     */
    accept?: string
}

export interface DefaultApiApiV1UsersSessionsDeleteRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1UsersSessionsDelete
     */
    accept?: string
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1UsersSessionsDelete
     */
    authorization?: string
}

export interface DefaultApiApiV1UsersSessionsPostRequest {
    /**
     * 
     * @type UserAuthentication
     * @memberof DefaultApiapiV1UsersSessionsPost
     */
    userAuthentication: UserAuthentication
    /**
     * 
     * @type string
     * @memberof DefaultApiapiV1UsersSessionsPost
     */
    accept?: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List organizations
     * @param param the request object
     */
    public apiV1OrganizationsGet(param: DefaultApiApiV1OrganizationsGetRequest = {}, options?: Configuration): Promise<Array<Organization>> {
        return this.api.apiV1OrganizationsGet(param.accept, param.authorization,  options).toPromise();
    }

    /**
     * Delete an organization
     * @param param the request object
     */
    public apiV1OrganizationsIdDelete(param: DefaultApiApiV1OrganizationsIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.apiV1OrganizationsIdDelete(param.id, param.accept, param.authorization,  options).toPromise();
    }

    /**
     * Retrieve an organization
     * @param param the request object
     */
    public apiV1OrganizationsIdGet(param: DefaultApiApiV1OrganizationsIdGetRequest, options?: Configuration): Promise<Organization> {
        return this.api.apiV1OrganizationsIdGet(param.id, param.accept, param.authorization,  options).toPromise();
    }

    /**
     * Update an organization
     * @param param the request object
     */
    public apiV1OrganizationsIdPatch(param: DefaultApiApiV1OrganizationsIdPatchRequest, options?: Configuration): Promise<Organization> {
        return this.api.apiV1OrganizationsIdPatch(param.id, param.organization, param.accept, param.authorization,  options).toPromise();
    }

    /**
     * Create an organization
     * @param param the request object
     */
    public apiV1OrganizationsPost(param: DefaultApiApiV1OrganizationsPostRequest, options?: Configuration): Promise<Organization> {
        return this.api.apiV1OrganizationsPost(param.organization, param.accept, param.authorization,  options).toPromise();
    }

    /**
     * Retrieve a user
     * @param param the request object
     */
    public apiV1UsersIdGet(param: DefaultApiApiV1UsersIdGetRequest, options?: Configuration): Promise<User> {
        return this.api.apiV1UsersIdGet(param.id, param.accept, param.authorization,  options).toPromise();
    }

    /**
     * Update a user
     * @param param the request object
     */
    public apiV1UsersIdPatch(param: DefaultApiApiV1UsersIdPatchRequest, options?: Configuration): Promise<User> {
        return this.api.apiV1UsersIdPatch(param.id, param.user, param.accept, param.authorization,  options).toPromise();
    }

    /**
     * Retrieve user profile information based on JWT
     * @param param the request object
     */
    public apiV1UsersProfileGet(param: DefaultApiApiV1UsersProfileGetRequest = {}, options?: Configuration): Promise<User> {
        return this.api.apiV1UsersProfileGet(param.accept, param.authorization,  options).toPromise();
    }

    /**
     * User sign up
     * @param param the request object
     */
    public apiV1UsersRegistrationsPost(param: DefaultApiApiV1UsersRegistrationsPostRequest, options?: Configuration): Promise<void> {
        return this.api.apiV1UsersRegistrationsPost(param.user, param.accept,  options).toPromise();
    }

    /**
     * Sign out as a user
     * @param param the request object
     */
    public apiV1UsersSessionsDelete(param: DefaultApiApiV1UsersSessionsDeleteRequest = {}, options?: Configuration): Promise<void> {
        return this.api.apiV1UsersSessionsDelete(param.accept, param.authorization,  options).toPromise();
    }

    /**
     * Sign in as a user
     * @param param the request object
     */
    public apiV1UsersSessionsPost(param: DefaultApiApiV1UsersSessionsPostRequest, options?: Configuration): Promise<void> {
        return this.api.apiV1UsersSessionsPost(param.userAuthentication, param.accept,  options).toPromise();
    }

}
