import { useRouter } from "next/router";

function NewsDetail()  {
    const router = useRouter()


    console.log(router.query.newsId)

    return (
        <div>

        </div>
    );
}

export default NewsDetail;