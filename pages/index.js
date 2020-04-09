import Header from '../components/Header'
import BaseLayout from '../components/BaseLayout';
import Link from 'next/link';

// NOTE 
// file structure doesn't matter [ONLY pages and public ] 

function PostLink(props) {
  return (
    <li>
      <Link href="/posts/[id]" as={`/posts/${props.id}`} >
        <a>{props.id}</a>
      </Link>
    </li>
  );
}
2
const indexContent =  (
  <div>
  <h1>My Blog</h1>
    <ul>
      <PostLink id="1"></PostLink>
      <PostLink id="2"></PostLink>
      <PostLink id="3"></PostLink>
    </ul>
  </div>
);

export default function Index() {
  return (
    <BaseLayout content={indexContent}>
     
    </BaseLayout>
  );
}