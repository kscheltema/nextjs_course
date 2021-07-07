//our domain.com/news/something-important
import {useRouter} from 'next/router';

function DetailPage () {
  const router = useRouter();

  const newsID = router.query.newsId; //this is the method to get access to name passed in the []

  return <h1>Detail page</h1>
};

export default DetailPage;