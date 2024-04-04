
interface CreatePost{
    createPost(post:any):void
} 

interface CommentPost{
    commentPost(comment:string):void
}

interface SharePost{
    sharePost():void
}



class Admin implements CreatePost,CommentPost,SharePost{
    createPost(post:any):void{}
    commentPost(comment:string):void{}
    sharePost():void{}
}


class RegularUser implements CommentPost,SharePost{
    
    commentPost(comment:string):void{}
    sharePost():void{}
}