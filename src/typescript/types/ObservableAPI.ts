import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ErrorsMapValueInner } from '../models/ErrorsMapValueInner';
import { ErrorsObject } from '../models/ErrorsObject';
import { Organization } from '../models/Organization';
import { User } from '../models/User';
import { UserAuthentication } from '../models/UserAuthentication';
import { UserAuthenticationUser } from '../models/UserAuthenticationUser';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * List organizations
     * @param accept 
     * @param authorization 
     */
    public apiV1OrganizationsGet(accept?: string, authorization?: string, _options?: Configuration): Observable<Array<Organization>> {
        const requestContextPromise = this.requestFactory.apiV1OrganizationsGet(accept, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiV1OrganizationsGet(rsp)));
            }));
    }

    /**
     * Delete an organization
     * @param id id
     * @param accept 
     * @param authorization 
     */
    public apiV1OrganizationsIdDelete(id: string, accept?: string, authorization?: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiV1OrganizationsIdDelete(id, accept, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiV1OrganizationsIdDelete(rsp)));
            }));
    }

    /**
     * Retrieve an organization
     * @param id id
     * @param accept 
     * @param authorization 
     */
    public apiV1OrganizationsIdGet(id: string, accept?: string, authorization?: string, _options?: Configuration): Observable<Organization> {
        const requestContextPromise = this.requestFactory.apiV1OrganizationsIdGet(id, accept, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiV1OrganizationsIdGet(rsp)));
            }));
    }

    /**
     * Update an organization
     * @param id id
     * @param organization 
     * @param accept 
     * @param authorization 
     */
    public apiV1OrganizationsIdPatch(id: string, organization: Organization, accept?: string, authorization?: string, _options?: Configuration): Observable<Organization> {
        const requestContextPromise = this.requestFactory.apiV1OrganizationsIdPatch(id, organization, accept, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiV1OrganizationsIdPatch(rsp)));
            }));
    }

    /**
     * Create an organization
     * @param organization 
     * @param accept 
     * @param authorization 
     */
    public apiV1OrganizationsPost(organization: Organization, accept?: string, authorization?: string, _options?: Configuration): Observable<Organization> {
        const requestContextPromise = this.requestFactory.apiV1OrganizationsPost(organization, accept, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiV1OrganizationsPost(rsp)));
            }));
    }

    /**
     * Retrieve a user
     * @param id id
     * @param accept 
     * @param authorization 
     */
    public apiV1UsersIdGet(id: string, accept?: string, authorization?: string, _options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.apiV1UsersIdGet(id, accept, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiV1UsersIdGet(rsp)));
            }));
    }

    /**
     * Update a user
     * @param id id
     * @param user 
     * @param accept 
     * @param authorization 
     */
    public apiV1UsersIdPatch(id: string, user: User, accept?: string, authorization?: string, _options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.apiV1UsersIdPatch(id, user, accept, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiV1UsersIdPatch(rsp)));
            }));
    }

    /**
     * Retrieve user profile information based on JWT
     * @param accept 
     * @param authorization 
     */
    public apiV1UsersProfileGet(accept?: string, authorization?: string, _options?: Configuration): Observable<User> {
        const requestContextPromise = this.requestFactory.apiV1UsersProfileGet(accept, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiV1UsersProfileGet(rsp)));
            }));
    }

    /**
     * User sign up
     * @param user 
     * @param accept 
     */
    public apiV1UsersRegistrationsPost(user: User, accept?: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiV1UsersRegistrationsPost(user, accept, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiV1UsersRegistrationsPost(rsp)));
            }));
    }

    /**
     * Sign out as a user
     * @param accept 
     * @param authorization 
     */
    public apiV1UsersSessionsDelete(accept?: string, authorization?: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiV1UsersSessionsDelete(accept, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiV1UsersSessionsDelete(rsp)));
            }));
    }

    /**
     * Sign in as a user
     * @param userAuthentication 
     * @param accept 
     */
    public apiV1UsersSessionsPost(userAuthentication: UserAuthentication, accept?: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.apiV1UsersSessionsPost(userAuthentication, accept, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiV1UsersSessionsPost(rsp)));
            }));
    }

}
