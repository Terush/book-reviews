document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('review-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;

        // Clear previous errors
        document.getElementById('title-error').textContent = '';
        document.getElementById('author-error').textContent = '';
        document.getElementById('summary-error').textContent = '';
        document.getElementById('review-error').textContent = '';
        document.getElementById('rating-error').textContent = '';

        // Title validation
        const titleInput = document.getElementById('title');
        const title = titleInput.value.trim();
        if (title === '') {
            valid = false;
            document.getElementById('title-error').textContent = 'Title is required.';
        }

        // Author validation
        const authorInput = document.getElementById('author');
        const author = authorInput.value.trim();
        if (author === '') {
            valid = false;
            document.getElementById('author-error').textContent = 'Author is required.';
        }

        // Summary validation
        const summary = document.getElementById('summary').value.trim();
        if (summary === '') {
            valid = false;
            document.getElementById('summary-error').textContent = 'Summary is required.';
        }

        // Review validation
        const review = document.getElementById('review').value.trim();
        if (review === '') {
            valid = false;
            document.getElementById('review-error').textContent = 'Review is required.';
        }

        // Rating validation
        const rating = document.getElementById('rating').value;
        if (rating === '') {
            valid = false;
            document.getElementById('rating-error').textContent = 'Rating is required.';
        }

        // If form is valid, submit the form
        if (valid) {
            this.submit();
        }
    });
});
