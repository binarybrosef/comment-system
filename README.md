# comment-system
A lightweight, live-updating online comment system.

## Summary
The current implementation includes a Node.js express app that implements the comment system server. Accessing the root endpoint causes the express app to serve the homepage (home.html), which contains links to individual comment threads. Upon selecting a thread, the express app serves the page corresponding to that thread, including an EJS template in which the comments that already exist for that thread are embedded as JSON. Then, on the client side once the page is served, this JSON string is parsed to obtain an array of comments, which are added one-by-one via `addComment()` to the #comments section.

## Future Development
- server logic for receiving new comments
- server logic for broadcasting new comments to connected clients
- server logic for storing new comments in, and retrieving existing comments from, database
- database itself
- user account system

## Example Screenshot
![link](image.png "Screenshot") 
