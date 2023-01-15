import { useNavigate, useParams } from 'react-router-dom';
import { useLazyGetArticleQuery } from '../store/spaceflight/spaceflight.api';
import { useEffect } from 'react';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Detail = () => {
  const [fetchArticle, { isLoading: articleLoading, data: article }] =
    useLazyGetArticleQuery();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    params.id && fetchArticle(params.id);
  }, [fetchArticle, params.id]);

  return (
    <>
      {articleLoading && <Typography> Loading ... </Typography>}
      <Box
        component={'img'}
        sx={{
          width: '100%',
          height: 200,
          objectFit: 'cover',
          position: 'absolute',
          zIndex: -1,
        }}
        src={article?.imageUrl}
      />

      <Container sx={{ pt: '130px' }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            rowGap: 2,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 400,
            mb: 3,
          }}
        >
          <Typography
            sx={{ fontSize: 22, textAlign: 'center', fontWeight: '700', pb: 3 }}
          >
            {' '}
            {article?.title}
          </Typography>
          <Typography>{article?.summary}</Typography>
          <Typography>{article?.summary}</Typography>
          <Typography>{article?.summary}</Typography>
        </Paper>

        <Button
          onClick={() => navigate(-1)}
          sx={{ mb: 2 }}
          startIcon={
            <ArrowBackIcon
              sx={{
                display: 'flex',
                alignItems: 'center',
                pr: 1,
                pl: 3,
              }}
            />
          }
        >
          Back to homepage
        </Button>
      </Container>
    </>
  );
};

export default Detail;
