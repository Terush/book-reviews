document.addEventListener('DOMContentLoaded', function() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const titleSuggestions = document.getElementById('title-suggestions');
    let selectedBook = null;

    titleInput.addEventListener('input', function() {
        const query = titleInput.value;
        if (query.length > 2) {
            fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => {
                    const works = data.docs;
                    titleSuggestions.innerHTML = '';
                    works.forEach(work => {
                        const suggestionItem = document.createElement('div');
                        suggestionItem.className = 'p-2 cursor-pointer hover:bg-gray-200';
                        suggestionItem.textContent = `${work.title} by ${work.author_name ? work.author_name.join(', ') : 'Unknown'}`;
                        suggestionItem.addEventListener('click', () => {
                            titleInput.value = work.title;
                            authorInput.value = work.author_name ? work.author_name.join(', ') : 'Unknown';
                            titleSuggestions.innerHTML = '';
                            selectedBook = work;
                        });
                        titleSuggestions.appendChild(suggestionItem);
                    });
                });
        } else {
            titleSuggestions.innerHTML = '';
        }
    });

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
        const title = titleInput.value.trim();
        if (title === '' || !selectedBook || selectedBook.title !== title) {
            valid = false;
            document.getElementById('title-error').textContent = 'Please select a valid book title from the suggestions.';
        }

        // Author validation
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
