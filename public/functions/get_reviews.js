const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const formDataUrl = `https://api.netlify.com/api/v1/forms/YOUR_FORM_ID/submissions?access_token=YOUR_ACCESS_TOKEN`;

    try {
        const response = await fetch(formDataUrl);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch reviews' })
        };
    }
};
