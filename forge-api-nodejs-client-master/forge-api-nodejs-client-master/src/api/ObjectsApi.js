/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = (function() {
   'use strict';

   var ApiClient = require('../ApiClient'),
       BucketObjects = require('../model/BucketObjects'),
       ObjectDetails = require('../model/ObjectDetails'),
       ObjectFullDetails = require('../model/ObjectFullDetails'),
       PostBucketsSigned = require('../model/PostBucketsSigned'),
       PostObjectSigned = require('../model/PostObjectSigned'),
       Reason = require('../model/Reason'),
       Result = require('../model/Result');

  /**
   * Objects service.
   * @module api/ObjectsApi
   * @version 0.4.1
   */

  /**
   * Constructs a new ObjectsApi.
   * @alias module:api/ObjectsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Copies an object to another object name in the same bucket.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {String} newObjName URL-encoded Object key to use as the destination
     * data is of type: {module:model/ObjectDetails}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.copyTo = function(bucketKey, objectName, newObjName, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        return Promise.reject("Missing the required parameter 'bucketKey' when calling copyTo");
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        return Promise.reject("Missing the required parameter 'objectName' when calling copyTo");
      }

      // verify the required parameter 'newObjName' is set
      if (newObjName == undefined || newObjName == null) {
        return Promise.reject("Missing the required parameter 'newObjName' when calling copyTo");
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName,
        'newObjName': newObjName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = ObjectDetails;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}/copyto/{newObjName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * This endpoint creates a signed URL that can be used to download an object within the specified expiration time. Be aware that if the object the signed URL points to is deleted or expires before the signed URL expires, then the signed URL will no longer be valid. A successful call to this endpoint requires bucket owner access.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {module:model/PostBucketsSigned} postBucketsSigned Body Structure
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.access Access for signed resource Acceptable values: `read`, `write`, `readwrite`. Default value: `read`  (default to read)
     * data is of type: {module:model/PostObjectSigned}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.createSignedResource = function(bucketKey, objectName, postBucketsSigned, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = postBucketsSigned;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        return Promise.reject("Missing the required parameter 'bucketKey' when calling createSignedResource");
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        return Promise.reject("Missing the required parameter 'objectName' when calling createSignedResource");
      }

      // verify the required parameter 'postBucketsSigned' is set
      if (postBucketsSigned == undefined || postBucketsSigned == null) {
        return Promise.reject("Missing the required parameter 'postBucketsSigned' when calling createSignedResource");
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName
      };
      var queryParams = {
        'access': opts['access']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = PostObjectSigned;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}/signed', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Deletes an object from the bucket.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.deleteObject = function(bucketKey, objectName, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        return Promise.reject("Missing the required parameter 'bucketKey' when calling deleteObject");
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        return Promise.reject("Missing the required parameter 'objectName' when calling deleteObject");
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Delete a signed URL. A successful call to this endpoint requires bucket owner access.
     * @param {String} id Id of signed resource
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.region The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US`  (default to US)
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.deleteSignedResource = function(id, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        return Promise.reject("Missing the required parameter 'id' when calling deleteSignedResource");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'region': opts['region']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oss/v2/signedresources/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Download an object.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {Object} opts Optional parameters
     * @param {String} opts.range A range of bytes to download from the specified object.
     * @param {String} opts.ifNoneMatch The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included.
     * @param {Date} opts.ifModifiedSince If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
     * @param {String} opts.acceptEncoding When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used.
     * data is of type: {Object}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getObject = function(bucketKey, objectName, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        return Promise.reject("Missing the required parameter 'bucketKey' when calling getObject");
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        return Promise.reject("Missing the required parameter 'objectName' when calling getObject");
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName
      };
      var queryParams = {
      };
      var headerParams = {
        'Range': opts['range'],
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince'],
        'Accept-Encoding': opts['acceptEncoding']
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/octet-stream'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Returns object details in JSON format.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {Object} opts Optional parameters
     * @param {Date} opts.ifModifiedSince If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
     * @param {module:model/String} opts._with Extra information in details; multiple uses are supported Acceptable values: `createdDate`, `lastAccessedDate`, `lastModifiedDate`
     * data is of type: {module:model/ObjectFullDetails}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getObjectDetails = function(bucketKey, objectName, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        return Promise.reject("Missing the required parameter 'bucketKey' when calling getObjectDetails");
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        return Promise.reject("Missing the required parameter 'objectName' when calling getObjectDetails");
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName
      };
      var queryParams = {
        'with': opts['_with']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = ObjectFullDetails;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * List objects in a bucket. It is only available to the bucket creator.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit Limit to the response size, Acceptable values: 1-100 Default = 10  (default to 10)
     * @param {String} opts.beginsWith Provides a way to filter the based on object key name
     * @param {String} opts.startAt Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response
     * data is of type: {module:model/BucketObjects}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getObjects = function(bucketKey, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        return Promise.reject("Missing the required parameter 'bucketKey' when calling getObjects");
      }


      var pathParams = {
        'bucketKey': bucketKey
      };
      var queryParams = {
        'limit': opts['limit'],
        'beginsWith': opts['beginsWith'],
        'startAt': opts['startAt']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = BucketObjects;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Download an object using a signed URL.
     * @param {String} id Id of signed resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.range A range of bytes to download from the specified object.
     * @param {String} opts.ifNoneMatch The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included.
     * @param {Date} opts.ifModifiedSince If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body.
     * @param {String} opts.acceptEncoding When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used.
     * @param {module:model/String} opts.region The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US`  (default to US)
     * data is of type: {Object}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getSignedResource = function(id, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        return Promise.reject("Missing the required parameter 'id' when calling getSignedResource");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'region': opts['region']
      };
      var headerParams = {
        'Range': opts['range'],
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince'],
        'Accept-Encoding': opts['acceptEncoding']
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/octet-stream'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/oss/v2/signedresources/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * This endpoint returns status information about a resumable upload.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {String} sessionId Unique identifier of a session of a file being uploaded
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.getStatusBySessionId = function(bucketKey, objectName, sessionId, oauth2client, credentials) {
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        return Promise.reject("Missing the required parameter 'bucketKey' when calling getStatusBySessionId");
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        return Promise.reject("Missing the required parameter 'objectName' when calling getStatusBySessionId");
      }

      // verify the required parameter 'sessionId' is set
      if (sessionId == undefined || sessionId == null) {
        return Promise.reject("Missing the required parameter 'sessionId' when calling getStatusBySessionId");
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName,
        'sessionId': sessionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}/status/{sessionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * This endpoint allows resumable uploads for large files in chunks.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {Integer} contentLength Indicates the size of the request body.
     * @param {String} contentRange Byte range of a segment being uploaded
     * @param {String} sessionId Unique identifier of a session of a file being uploaded
     * @param {File} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentDisposition The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {String} opts.ifMatch If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written.
     * data is of type: {module:model/ObjectDetails}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.uploadChunk = function(bucketKey, objectName, contentLength, contentRange, sessionId, body, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        return Promise.reject("Missing the required parameter 'bucketKey' when calling uploadChunk");
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        return Promise.reject("Missing the required parameter 'objectName' when calling uploadChunk");
      }

      // verify the required parameter 'contentLength' is set
      if (contentLength == undefined || contentLength == null) {
        return Promise.reject("Missing the required parameter 'contentLength' when calling uploadChunk");
      }

      // verify the required parameter 'contentRange' is set
      if (contentRange == undefined || contentRange == null) {
        return Promise.reject("Missing the required parameter 'contentRange' when calling uploadChunk");
      }

      // verify the required parameter 'sessionId' is set
      if (sessionId == undefined || sessionId == null) {
        return Promise.reject("Missing the required parameter 'sessionId' when calling uploadChunk");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling uploadChunk");
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName
      };
      var queryParams = {
      };
      var headerParams = {
        'Content-Length': contentLength,
        'Content-Range': contentRange,
        'Content-Disposition': opts['contentDisposition'],
        'If-Match': opts['ifMatch'],
        'Session-Id': sessionId
      };
      var formParams = {
      };

      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = ObjectDetails;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}/resumable', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Upload an object. If the specified object name already exists in the bucket, the uploaded content will overwrite the existing content for the bucket name/object name combination.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {Integer} contentLength Indicates the size of the request body.
     * @param {File} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentDisposition The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {String} opts.ifMatch If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written.
     * data is of type: {module:model/ObjectDetails}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.uploadObject = function(bucketKey, objectName, contentLength, body, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        return Promise.reject("Missing the required parameter 'bucketKey' when calling uploadObject");
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        return Promise.reject("Missing the required parameter 'objectName' when calling uploadObject");
      }

      // verify the required parameter 'contentLength' is set
      if (contentLength == undefined || contentLength == null) {
        return Promise.reject("Missing the required parameter 'contentLength' when calling uploadObject");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling uploadObject");
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName
      };
      var queryParams = {
      };
      var headerParams = {
        'Content-Length': contentLength,
        'Content-Disposition': opts['contentDisposition'],
        'If-Match': opts['ifMatch']
      };
      var formParams = {
      };

      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = ObjectDetails;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Overwrite a existing object using a signed URL.  Conditions to call this operation:  Object is available Expiration period is valid Signed URL should be created with &#x60;write&#x60; or &#x60;readwrite&#x60;
     * @param {String} id Id of signed resource
     * @param {Integer} contentLength Indicates the size of the request body.
     * @param {File} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentDisposition The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {module:model/String} opts.xAdsRegion The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US`  (default to US)
     * @param {String} opts.ifMatch If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written.
     * data is of type: {module:model/ObjectDetails}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.uploadSignedResource = function(id, contentLength, body, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        return Promise.reject("Missing the required parameter 'id' when calling uploadSignedResource");
      }

      // verify the required parameter 'contentLength' is set
      if (contentLength == undefined || contentLength == null) {
        return Promise.reject("Missing the required parameter 'contentLength' when calling uploadSignedResource");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling uploadSignedResource");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Content-Length': contentLength,
        'Content-Disposition': opts['contentDisposition'],
        'x-ads-region': opts['xAdsRegion'],
        'If-Match': opts['ifMatch']
      };
      var formParams = {
      };

      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = ObjectDetails;

      return this.apiClient.callApi(
        '/oss/v2/signedresources/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };


    /**
     * Resumable upload for signed URLs.
     * @param {String} id Id of signed resource
     * @param {String} contentRange Byte range of a segment being uploaded
     * @param {String} sessionId Unique identifier of a session of a file being uploaded
     * @param {File} body
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentDisposition The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {module:model/String} opts.xAdsRegion The region where the bucket resides Acceptable values: `US`, `EMEA` Default is `US`  (default to US)
     * data is of type: {module:model/ObjectDetails}
     * @param {Object} oauth2client oauth2client for the call
     * @param {Object} credentials credentials for the call
     */
    this.uploadSignedResourcesChunk = function(id, contentRange, sessionId, body, opts, oauth2client, credentials) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        return Promise.reject("Missing the required parameter 'id' when calling uploadSignedResourcesChunk");
      }

      // verify the required parameter 'contentRange' is set
      if (contentRange == undefined || contentRange == null) {
        return Promise.reject("Missing the required parameter 'contentRange' when calling uploadSignedResourcesChunk");
      }

      // verify the required parameter 'sessionId' is set
      if (sessionId == undefined || sessionId == null) {
        return Promise.reject("Missing the required parameter 'sessionId' when calling uploadSignedResourcesChunk");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        return Promise.reject("Missing the required parameter 'body' when calling uploadSignedResourcesChunk");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Content-Range': contentRange,
        'Content-Disposition': opts['contentDisposition'],
        'x-ads-region': opts['xAdsRegion'],
        'Session-Id': sessionId
      };
      var formParams = {
      };

      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/vnd.api+json', 'application/json'];
      var returnType = ObjectDetails;

      return this.apiClient.callApi(
        '/oss/v2/signedresources/{id}/resumable', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, oauth2client, credentials
      );
    };
  };

  return exports;
}());