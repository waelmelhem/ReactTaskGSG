import React from "react";
import Post  from "./Post"
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            post:"",
            posts:[],
        }
    }
    changePost(e){
        let value=e.target.value;
        console.log(value);
        this.setState({
            post:value,
        })
    }
    add(e){
        e.preventDefault();

        let list=JSON.parse(JSON.stringify(this.state.posts));
        list.push({
            data:this.state.post,
            isLiked:false,
            comment:[]
        });
        console.log(list);
        this.setState({
            "posts":list,
            post:""
        })
        
    }
    like(idx){
        console.log(idx);
        let list=JSON.parse(JSON.stringify(this.state.posts));
        let list2=[];
        for(let i=0;i<list.length;i++){
            if(i===idx){
                list2.push({
                    ...list[idx],
                    isLiked:true
                })
            }
            else{
                list2.push(list[i]);
            }
        }
        console.log(list2);
        this.setState({
            "posts":list2,
        })
    }
    comment(idx,message){
        let list=JSON.parse(JSON.stringify(this.state.posts));
        let list2=[];
        for(let i=0;i<list.length;i++){
            if(i===idx){
                list2.push({
                    ...list[i],
                    comment:[...list[i].comment,{"data":message,"date":(new Date()).toLocaleString() }]
                })
            }
            else{
                list2.push(list[i]);
            }
        }
        console.log(list2);
        this.setState({
            "posts":list2,
        })
    }
    render(){
        return(
            <div className="form-group" >
                <br/>
                <form >
                <div>
                <textarea onChange={this.changePost.bind(this)} value={this.state.post} class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
                <br/>
                <button onClick={this.add.bind(this)} className="btn btn-info">Add Post</button>
                <br/>
                <br/>
            </form>
            <ul>
                {this.state.posts.map((element,idx)=>(<Post key={idx}  post={element} comment={this.comment.bind(this,idx)} like={this.like.bind(this,idx)}/>))}
            </ul>
            </div>
        )
    }
}
export default Form;