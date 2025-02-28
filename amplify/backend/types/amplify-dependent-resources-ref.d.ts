export type AmplifyDependentResourcesAttributes = {
  "api": {
    "bucketlist": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "bucketlist": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "BucketListUserPoolGroupGroupRole": "string"
    }
  },
  "storage": {
    "imagesstorage": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}