import React from "react";
import Comment from "./Comment"
class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comment:"",
            show:false
        }

    }
    changeInput(e){
        
        let value=e.target.value;
        console.log(value,e.key);
            this.setState({
                comment:value,
            })
    }
    
    eneter(props,e){
        e.preventDefault();
        this.props.comment(this.state.comment);
        this.setState({
            comment:""
        })
    }
    render(props){
        console.log(this.props.post);
        return(<div className="form-group" >
        <textarea readOnly onChange={()=>{

        }} value={this.props.post.data} class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        <br/>
        <button  onClick={this.props.like} className={"btn "+(this.props.post.isLiked?"btn-info":"btn-secondary")}>Like</button>
        <button onClick={()=>{
            this.setState({
                show:true,
            })
        }} className="btn btn-secondary">Add Comment</button>
        <br/>
        <br/>
        {this.state.show?<div   className="form-group border ">
        <form onSubmit={this.eneter.bind(this,this.props)}>
            <input placeholder="write comment " value={this.state.comment} onChange={this.changeInput.bind(this)} className="form-control"></input>
        </form>
        <br/>
        <ul>
                {this.props.post.comment.map((element,idx)=>(<div><Comment key={idx} data={element.data} date={element.date} /><hr/></div>))}
        </ul>
        </div>:""}
       </div>)
    }
}
export default Post;