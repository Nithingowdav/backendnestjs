// Define the base URL for your API
const apiUrl = 'http://localhost:3000/topic';  // Adjust the URL as needed

// Create a new topic (POST request)
document.getElementById('create-topic-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    axios.post(apiUrl, { title, description })
        .then(response => {
            alert('Topic Created Successfully!');
            console.log(response.data);
            getTopics(); // Refresh the topic list after creating a new topic
        })
        .catch(error => {
            console.error(error);
            alert('Error creating topic!');
        });
});

// Update a topic (patch request)
document.getElementById('update-topic-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const id = document.getElementById('update-id').value;
    const title = document.getElementById('update-title').value;
    const description = document.getElementById('update-description').value;

    axios.patch(`${apiUrl}/${id}`, { title, description })
        .then(response => {
            alert('Topic Updated Successfully!');
            console.log(response.data);
            getTopics(); // Refresh the topic list after updating the topic
        })
        .catch(error => {
            console.error(error);
            alert('Error updating topic!');
        });
});
// Delete a topic (DELETE request)
document.getElementById('delete-topic-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const id = document.getElementById('delete-id').value;

    axios.delete(`${apiUrl}/${id}`)
        .then(response => {
            alert('Topic Deleted Successfully!');
            console.log(response.data);
            getTopics(); // Refresh the topic list after deleting
        })
        .catch(error => {
            console.error(error);
            alert('Error deleting topic!');
        });
});


// Get all topics (GET request)
function getTopics() {
    axios.get(apiUrl)
        .then(response => {
            const topicsList = document.getElementById('topics-list');
            topicsList.innerHTML = ''; // Clear current list

            response.data.forEach(topic => {
                const li = document.createElement('li');
                li.textContent = `ID: ${topic.id}, Title: ${topic.title}, Description: ${topic.description}`;
                topicsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error(error);
            alert('Error fetching topics!');
        });
}

// Initial load of topics
getTopics();
