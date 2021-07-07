//our domain.com/news
import Link from 'next/link';
import { Fragment } from "react";

function NewsPage () {
  return 
  <Fragment>
  <h1>news page</h1>
  <ul>
    <li>
      <Link href='/news/nextjs-is-a-great-framework'>
      NextJS is a great Framework
      </Link>
      </li>
    <li>Something else</li>
  </ul>
  </Fragment>
};

export default NewsPage;