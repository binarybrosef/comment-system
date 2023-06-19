const express = require('express');
const app = express();
const path = require('path');

function getCommentsForThread(threadId) {

  if (threadId == '06032023') {

    // Test comments array
    let comments = [
      { text: 'This is a parent comment by King A. I think we should trade for Gregory Stevens.', username: 'King A', recs: 2, level: 0 },
      { text: 'This is a reply to King A - we should NOT trade for Stevens, under any circumstance!', username: 'Queen B', recs: 3, level: 1},
      { text: 'This is a reply to Queen B - you are wrong, we should!', username: 'Prince C', recs: 4, level: 2 }
    ];

    return comments;
  }
}

app.set('view engine', 'ejs');

// Render the home page with a list of threads
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// Render individual thread 
app.get('/GDT/:id', (req, res) => {
  // Get the thread ID from the request parameters
  let threadId = req.params.id;

  // Get the existing comments for this thread from the database
  let comments = getCommentsForThread(threadId);

  // Render the thread page using the ejs template
  res.render('GDT', { id: threadId, comments: comments });
});

app.listen(3000, () => {
  console.log('listening on *:3000');
});
