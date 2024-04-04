
class BlogPost{
    title:string
    content:string
    constructor(title:string,content:string){
        this.title = title
        this.content = content
    }

    CreatePost():string{return ""}
    deletePost():string{return ""}
    updatePost():string{return ""}
}


class DisplayBlogPost{
    constructor(public blogPost:BlogPost){ 
       
    }

    DisplayPost():string{
        return ""
    }
}


class BlogPostJson{
    constructor(public blogPost:BlogPost){ 
       
    }

    returnBlogPostJson(){
        return {title:this.blogPost.title, content:this.blogPost.content}
    }
}
