interface PostProps{
   id: number;
   title: string;
   content: string;
   createdAt: string;
}


export default async function PostsPage() {

    const response = await fetch('http://localhost:3001/posts')
    const data: PostProps[] = await response.json()

    console.log(data);

    return (
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
                Todos os posts
            </h1>

            <div className="flex flex-col gap-4 mx-2">
                {data.map(post => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}