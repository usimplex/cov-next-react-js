import { useRouter } from "next/router"
import BaseLayout from "../../components/BaseLayout";
import fetch from 'isomorphic-unfetch';
import { route } from "next/dist/next-server/server/router";
import Link from 'next/link';


function postContent(id, shows) {
    return (
    <div>
        <h1>{id}</h1>
        <p>{id}</p>

        <h1>Batman TV Shows</h1>
            <ul>
            {shows.map(show => (
                <li key={show.id}>
                <Link href="/p/[id]" as={`/p/${show.id}`}>
                    <a>{show.name}</a>
                </Link>
                </li>
            ))}
            </ul>

    </div>
    );
};

function Post(props) {
    const router = useRouter();
    console.log("stuff" + props.shows)
    return (
        <BaseLayout content={postContent(router.query.id,props.shows)}></BaseLayout>
//    );
    );
};

Post.getInitialProps = async function() {
    
    const res =  await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Post;