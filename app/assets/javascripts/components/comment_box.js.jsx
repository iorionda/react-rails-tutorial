var CommentBox = React.createClass({
  render: function() {
    return (
       <div className="commentBox" >
          <h1>CommentBox</h1>
          <CommentList />
          <CommentForm />
       </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am CommentList.
      </div>
    );
  }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
        Hello, world! I am CommentForm.
        </div>
        );
    }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
         <h2 classNmae="commentAuthor" >
           {this.prop.author}
        </h2>
           {this.props.children}
        </div>
    );
  }
})
