const {
  CognitoIdentityProviderClient,
  AdminAddUserToGroupCommand,
  GetGroupCommand,
  CreateGroupCommand,
} = require('@aws-sdk/client-cognito-identity-provider');

const cognitoIdentityServiceProvider = new CognitoIdentityProviderClient({});

exports.handler = async (event) => {
  const groupName = process.env.GROUP;
  const userPoolId = event.userPoolId;
  const userName = event.userName;

  console.log(`Adding user ${userName} to group ${groupName}.`);

  const groupParams = {
    GroupName: groupName,
    UserPoolId: userPoolId,
  };
  const addUserParams = {
    ...groupParams,
    Username: userName,
  };

  try {
    try {
      await cognitoIdentityServiceProvider.send(new GetGroupCommand(groupParams));
    } catch (e) {
      if (e.name === 'ResourceNotFoundException') {
        console.log(`Group ${groupName} not found, creating new group.`);
        await cognitoIdentityServiceProvider.send(new CreateGroupCommand(groupParams));
      } else {
        throw e; // rethrow the error if it is not a ResourceNotFoundException
      }
    }

    await cognitoIdentityServiceProvider.send(new AdminAddUserToGroupCommand(addUserParams));
    console.log(`User ${userName} added to group ${groupName} successfully.`);
  } catch (error) {
    console.error(`Error adding user ${userName} to group ${groupName}:`, error);
    throw error; // rethrow the error to signal a failure in Lambda execution
  }

  return event; // return the event as a best practice to signal that the function completed successfully
};
