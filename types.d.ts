export interface Post{
    _id: string;
    _createdAt: string;
    title: string;
    description: string;
    author: {   // author is a reference to the post
        name: string;
        image: string;
    }
    mainImage:{
        asset: {
            url: string;
        }
    }
    slug:{
        current: string;
    }
    body: [object]
}