document.addEventListener('DOMContentLoaded', function() {
    fetch('/.netlify/functions/get-reviews')
        .then(response => response.json())
        .then(data => {
            const reviewsContainer = document.getElementById('reviews-container');
            data.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.className = 'bg-white p-6 rounded-lg shadow-lg';
                reviewElement.innerHTML = `
                    <h2 class="text-2xl font-bold mb-2">${review.data.title}</h2>
                    <p class="text-gray-700 mb-4"><strong>Author:</strong> ${review.data.author}</p>
                    <p class="text-gray-700 mb-4"><strong>Summary:</strong> ${review.data.summary}</p>
                    <p class="text-gray-700 mb-4"><strong>Review:</strong> ${review.data.review}</p>
                    <p class="text-yellow-500 mb-4"><strong>Rating:</strong> ${'★'.repeat(review.data.rating)}${'☆'.repeat(5 - review.data.rating)}</p>
                `;
                reviewsContainer.appendChild(reviewElement);
            });
        })
        .catch(error => {
            console.error('Error fetching reviews:', error);
        });
});
