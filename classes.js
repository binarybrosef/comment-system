class Comment {
    constructor() {
        this.selfRecd = false;
        this.recNum = 0;
        this.commentText = null;
        this.username = null;
        this.numID = null;
    }

    build () {
        // Main div element
        this.div = document.createElement('div');
        this.div.className = 'comment';

        // Footer (username + text)
        this.footer = document.createElement('div');
        this.footer.className = 'footer';

        // Reply button
        this.buttonReply = document.createElement("button");
        this.buttonReply.className = 'buttonReply';
        this.buttonReply.textContent = "Reply";
        this.footer.appendChild(buttonReply);

        // Rec button
        this.buttonRec = document.createElement("button");
        this.buttonRec.className = 'buttonReply';
        this.footer.appendChild(buttonRec);
    }

    postComment() {
        this.build();

        // Set text
        let c = document.querySelector('#comments');
        let text = c.value;
        text = text.replace(/\n/g, '<br>');
		this.div.innerHTML = text;

        // Append comment to comment section
        c.insertBefore(this.div, document.getElementById('endDiv'));
    }

    postReply(parent) {
        this.build();

        // Set text
        let c = document.querySelector('#replyForm');
        let text = c.value;
        text = text.replace(/\n/g, '<br>');
        this.div.innerHTML = text;

        // Append comment to comment section
        c.insertBefore(this.div, parent.nextSibling);
    }


}

