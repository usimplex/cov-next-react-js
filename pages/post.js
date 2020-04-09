import { useRouter } from 'next/router';
import BaseLayout from '../components/BaseLayout';



export default function Post(props) {
    
    const router = useRouter();
    const postContent = (
        <div>
            <h1>{router.query.title}</h1>
            <p>{router.query.title}</p>
        </div>
    );

    return (
        <BaseLayout content={postContent} />
    );
}