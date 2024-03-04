/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');

// TODO: find a way to import from the credential profile or env variables
const cognito = new AWS.CognitoIdentityServiceProvider({region: 'us-east-2'});

exports.handler = async (event) => {
    let response = { statusCode: 200, body: '' };
    // TODO: add profile(attribute) etc

    const { username, password, attributes } = JSON.parse(JSON.stringify(event.body));
    console.log(attributes);

    const params = {
        ClientId: '3h40gmuo15llqdgkhndq8q1nbc',
        Username: username,
        Password: password,
        UserAttributes: attributes.map(attr => ({ Name: attr.name, Value: attr.value }))
    };

    // TODO: tag generation. Need to check userpool and we need to find out how to insert it in UserAttributes
    /*
    async function fetchExistingTagsForName(name) {
    // Query the database for all tags associated with the given name
    // This function should return an array of all existing tags for the name
    }

    function generateRandomTag(digitCount) {
    const min = Math.pow(10, digitCount - 1);
    const max = Math.pow(10, digitCount) - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
    }

    async function isTagUnique(name, tag) {
    // Check if the tag is already used for the name in the database
    // Return true if unique, false otherwise
    }

    async function assignTag(name) {
    let digitCount = 4; // Start with 4 digits
    let tag;
    let isUnique = false;

    while (!isUnique) {
        tag = generateRandomTag(digitCount);
        isUnique = await isTagUnique(name, tag);
        if (!isUnique) {
        // Check if all possible tags for the current digit count are used
        // (Better implementation: Do a couple of times then digitCount++)
        const existingTags = await fetchExistingTagsForName(name);
        if (existingTags.length >= (9 * Math.pow(10, digitCount - 1))) {
            digitCount++; // Increase digit count if all tags are used
        }
        }
    }

    // Now `tag` is unique, proceed to assign it to the user
    console.log(`Assigning tag ${tag} to ${name}`);
    // Insert/update user record in the database with the new tag
    }
     */

    try {
        await cognito.signUp(params).promise();
        response.body = JSON.stringify({ message: 'Signup successful!' });
    } catch (error) {
        console.error('Signup error:', error);
        response.statusCode = 400;
        response.body = JSON.stringify({ error: error.message });
    }

    return response;
};
