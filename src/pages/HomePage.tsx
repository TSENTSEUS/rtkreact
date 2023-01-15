import { IArticle, IPriority } from '../models/models';
import { useArticlesQuery } from '../store/spaceflight/spaceflight.api';
import {
  Container,
  Grid,
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';
const HomePage = () => {
  const [search, setSearch] = useState('');
  const { isLoading, isError, data } = useArticlesQuery();
  const priorities: IPriority[] = [];

  function countInstances(string: string, word: string) {
    return string.split(word).length - 1;
  }

  // eslint-disable-next-line array-callback-return
  const filteredData = data?.filter((article: IArticle) => {
    const title = article.title.toLowerCase().includes(search.toLowerCase());
    const description = article.summary
      .substring(0, 100)
      .toLowerCase()
      .includes(search.toLowerCase());
    if (search === '') {
      return article;
    }
    if (title || description) {
      const priority = countInstances(
        article.title.toLowerCase(),
        search.toLowerCase(),
      );
      priorities.push({ priority, article: article.id });
      return article;
    }
  });

  // get sorted priorities by amount of highlighted words in title
  priorities.sort(function (a: IPriority, b: IPriority) {
    return b.priority - a.priority;
  });

  // match sorted articles with actual data
  filteredData?.sort((a, b) => {
    return (
      priorities.findIndex((p: IPriority) => p.article === a.id) -
      priorities.findIndex((p: IPriority) => p.article === b.id)
    );
  });

  useEffect(() => {}, [data?.length]);
  return (
    <Container sx={{ height: '100vh', py: 8 }}>
      {isError && <Typography> Unexpected error occurred.</Typography>}

      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        label="Search"
        variant="outlined"
        sx={{ maxWidth: '400px', width: '100%' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Typography sx={{ pt: 3, fontWeight:'500' }}>Result: {filteredData?.length}</Typography>
      {isLoading ? (
        <LinearProgress sx={{ mt: 2 }} />
      ) : (
        <Grid container spacing={2} py={4}>
          {filteredData?.map((article: IArticle, i: number) => {
            const string = new Date(article.updatedAt).toUTCString().split(' ');
            const day = string[1];
            const month = string[2];
            const year = string[3];
            const date = month + ' ' + day + ', ' + year;
            const data = { ...article, formattedDate: date };
            return <ArticleCard article={data} key={i} search={search} />;
          })}
        </Grid>
      )}
    </Container>
  );
};

export default HomePage;
