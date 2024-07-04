const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const formDataUrl = `https://api.netlify.com/api/v1/forms/6684fca720a42200087a0dda/submissions?access_token=nfp_6s5Ni4E4hU5e9fLxPVNZwdxoDYgW1Jgh1269`;

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
