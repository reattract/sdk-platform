import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { ErrorsMapValueInner } from '../models/ErrorsMapValueInner';
import { ErrorsObject } from '../models/ErrorsObject';
import { Organization } from '../models/Organization';
import { User } from '../models/User';
import { UserAuthentication } from '../models/UserAuthentication';
import { UserAuthenticationUser } from '../models/UserAuthenticationUser';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List organizations
     * @param accept 
     * @param authorization 
     */
    public apiV1OrganizationsGet(accept?: string, authorization?: string, _options?: Configuration): Promise<Array<Organization>> {
        const result = this.api.apiV1OrganizationsGet(accept, authorization, _options);
        return result.toPromise();
    }

    /**
     * Delete an organization
     * @param id id
     * @param accept 
     * @param authorization 
     */
    public apiV1OrganizationsIdDelete(id: string, accept?: string, authorization?: string, _options?: Configuration): Promise<void> {
        const result = this.api.apiV1OrganizationsIdDelete(id, accept, authorization, _options);
        return result.toPromise();
    }

    /**
     * Retrieve an organization
     * @param id id
     * @param accept 
     * @param authorization 
     */
    public apiV1OrganizationsIdGet(id: string, accept?: string, authorization?: string, _options?: Configuration): Promise<Organization> {
        const result = this.api.apiV1OrganizationsIdGet(id, accept, authorization, _options);
        return result.toPromise();
    }

    /**
     * Update an organization
     * @param id id
     * @param organization 
     * @param accept 
     * @param authorization 
     */
    public apiV1OrganizationsIdPatch(id: string, organization: Organization, accept?: string, authorization?: string, _options?: Configuration): Promise<Organization> {
        const result = this.api.apiV1OrganizationsIdPatch(id, organization, accept, authorization, _options);
        return result.toPromise();
    }

    /**
     * Create an organization
     * @param organization 
     * @param accept 
     * @param authorization 
     */
    public apiV1OrganizationsPost(organization: Organization, accept?: string, authorization?: string, _options?: Configuration): Promise<Organization> {
        const result = this.api.apiV1OrganizationsPost(organization, accept, authorization, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a user
     * @param id id
     * @param accept 
     * @param authorization 
     */
    public apiV1UsersIdGet(id: string, accept?: string, authorization?: string, _options?: Configuration): Promise<User> {
        const result = this.api.apiV1UsersIdGet(id, accept, authorization, _options);
        return result.toPromise();
    }

    /**
     * Update a user
     * @param id id
     * @param user 
     * @param accept 
     * @param authorization 
     */
    public apiV1UsersIdPatch(id: string, user: User, accept?: string, authorization?: string, _options?: Configuration): Promise<User> {
        const result = this.api.apiV1UsersIdPatch(id, user, accept, authorization, _options);
        return result.toPromise();
    }

    /**
     * Retrieve user profile information based on JWT
     * @param accept 
     * @param authorization 
     */
    public apiV1UsersProfileGet(accept?: string, authorization?: string, _options?: Configuration): Promise<User> {
        const result = this.api.apiV1UsersProfileGet(accept, authorization, _options);
        return result.toPromise();
    }

    /**
     * User sign up
     * @param user 
     * @param accept 
     */
    public apiV1UsersRegistrationsPost(user: User, accept?: string, _options?: Configuration): Promise<void> {
        const result = this.api.apiV1UsersRegistrationsPost(user, accept, _options);
        return result.toPromise();
    }

    /**
     * Sign out as a user
     * @param accept 
     * @param authorization 
     */
    public apiV1UsersSessionsDelete(accept?: string, authorization?: string, _options?: Configuration): Promise<void> {
        const result = this.api.apiV1UsersSessionsDelete(accept, authorization, _options);
        return result.toPromise();
    }

    /**
     * Sign in as a user
     * @param userAuthentication 
     * @param accept 
     */
    public apiV1UsersSessionsPost(userAuthentication: UserAuthentication, accept?: string, _options?: Configuration): Promise<void> {
        const result = this.api.apiV1UsersSessionsPost(userAuthentication, accept, _options);
        return result.toPromise();
    }


}



