/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 * Read the docs at https://docs.polar.sh/api
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ConfirmIssue,
  ExternalOrganizationNameFilter,
  HTTPValidationError,
  Issue,
  IssueNumberFilter,
  IssueUpdateBadgeMessage,
  ListResourceIssue,
  OrganizationIDFilter,
  PlatformFilter,
  PostIssueComment,
  RepositoryNameFilter1,
  UpdateIssue,
} from '../models/index';

export interface IssuesApiAddIssueCommentRequest {
    id: string;
    body: PostIssueComment;
}

export interface IssuesApiAddPolarBadgeRequest {
    id: string;
}

export interface IssuesApiBadgeWithMessageRequest {
    id: string;
    body: IssueUpdateBadgeMessage;
}

export interface IssuesApiConfirmRequest {
    id: string;
    body: ConfirmIssue;
}

export interface IssuesApiGetRequest {
    id: string;
}

export interface IssuesApiGetBodyRequest {
    id: string;
}

export interface IssuesApiListRequest {
    platform?: PlatformFilter;
    externalOrganizationName?: ExternalOrganizationNameFilter;
    repositoryName?: RepositoryNameFilter1;
    number?: IssueNumberFilter;
    organizationId?: OrganizationIDFilter;
    isBadged?: boolean;
    page?: number;
    limit?: number;
    sorting?: Array<string>;
}

export interface IssuesApiLookupRequest {
    externalUrl?: string;
}

export interface IssuesApiRemovePolarBadgeRequest {
    id: string;
}

export interface IssuesApiUpdateRequest {
    id: string;
    body: UpdateIssue;
}

/**
 * 
 */
export class IssuesApi extends runtime.BaseAPI {

    /**
     * Add Issue Comment
     */
    async addIssueCommentRaw(requestParameters: IssuesApiAddIssueCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Issue>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling addIssueComment().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling addIssueComment().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/issues/{id}/comment`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add Issue Comment
     */
    async addIssueComment(requestParameters: IssuesApiAddIssueCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Issue> {
        const response = await this.addIssueCommentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add Polar Badge
     */
    async addPolarBadgeRaw(requestParameters: IssuesApiAddPolarBadgeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Issue>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling addPolarBadge().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/issues/{id}/add_badge`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add Polar Badge
     */
    async addPolarBadge(requestParameters: IssuesApiAddPolarBadgeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Issue> {
        const response = await this.addPolarBadgeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Badge With Message
     */
    async badgeWithMessageRaw(requestParameters: IssuesApiBadgeWithMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Issue>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling badgeWithMessage().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling badgeWithMessage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/issues/{id}/badge_with_message`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Badge With Message
     */
    async badgeWithMessage(requestParameters: IssuesApiBadgeWithMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Issue> {
        const response = await this.badgeWithMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark an issue as confirmed solved, and configure issue reward splits. Enables payouts of pledges. Can only be done once per issue. Requires authentication.
     * Mark an issue as confirmed solved.
     */
    async confirmRaw(requestParameters: IssuesApiConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Issue>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling confirm().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling confirm().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/issues/{id}/confirm_solved`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Mark an issue as confirmed solved, and configure issue reward splits. Enables payouts of pledges. Can only be done once per issue. Requires authentication.
     * Mark an issue as confirmed solved.
     */
    async confirm(requestParameters: IssuesApiConfirmRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Issue> {
        const response = await this.confirmRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * For You
     */
    async forYouRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceIssue>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/issues/for_you`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * For You
     */
    async forYou(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceIssue> {
        const response = await this.forYouRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get issue
     * Get issue
     */
    async getRaw(requestParameters: IssuesApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Issue>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling get().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/issues/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get issue
     * Get issue
     */
    async get(requestParameters: IssuesApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Issue> {
        const response = await this.getRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Body
     */
    async getBodyRaw(requestParameters: IssuesApiGetBodyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getBody().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/issues/{id}/body`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Get Body
     */
    async getBody(requestParameters: IssuesApiGetBodyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getBodyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List issues.
     * List Issues
     */
    async listRaw(requestParameters: IssuesApiListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceIssue>> {
        const queryParameters: any = {};

        if (requestParameters['platform'] != null) {
            queryParameters['platform'] = requestParameters['platform'];
        }

        if (requestParameters['externalOrganizationName'] != null) {
            queryParameters['external_organization_name'] = requestParameters['externalOrganizationName'];
        }

        if (requestParameters['repositoryName'] != null) {
            queryParameters['repository_name'] = requestParameters['repositoryName'];
        }

        if (requestParameters['number'] != null) {
            queryParameters['number'] = requestParameters['number'];
        }

        if (requestParameters['organizationId'] != null) {
            queryParameters['organization_id'] = requestParameters['organizationId'];
        }

        if (requestParameters['isBadged'] != null) {
            queryParameters['is_badged'] = requestParameters['isBadged'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['sorting'] != null) {
            queryParameters['sorting'] = requestParameters['sorting'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/issues/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List issues.
     * List Issues
     */
    async list(requestParameters: IssuesApiListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceIssue> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lookup
     */
    async lookupRaw(requestParameters: IssuesApiLookupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Issue>> {
        const queryParameters: any = {};

        if (requestParameters['externalUrl'] != null) {
            queryParameters['external_url'] = requestParameters['externalUrl'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/issues/lookup`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Lookup
     */
    async lookup(requestParameters: IssuesApiLookupRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Issue> {
        const response = await this.lookupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove Polar Badge
     */
    async removePolarBadgeRaw(requestParameters: IssuesApiRemovePolarBadgeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Issue>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling removePolarBadge().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/issues/{id}/remove_badge`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Remove Polar Badge
     */
    async removePolarBadge(requestParameters: IssuesApiRemovePolarBadgeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Issue> {
        const response = await this.removePolarBadgeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update issue. Requires authentication.
     * Update issue.
     */
    async updateRaw(requestParameters: IssuesApiUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Issue>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling update().'
            );
        }

        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling update().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/issues/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update issue. Requires authentication.
     * Update issue.
     */
    async update(requestParameters: IssuesApiUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Issue> {
        const response = await this.updateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
