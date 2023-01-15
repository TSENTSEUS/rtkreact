import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IArticle } from '../models/models';
import Highlight from './Highlight';
import { FC } from 'react';
interface PropsType {
  article: IArticle;
  search?: string;
}
const ArticleCard: FC<PropsType> = ({ article, search }) => {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ minWidth: '100%', minHeight: '530px', height: '100%' }}>
        <CardMedia
          sx={{ height: '215px', objectFit: 'cover' }}
          image={article.imageUrl}
        />
        <Box
          sx={{
            m: 3,
            height: '315px',
            justifyContent: 'space-between',
            alignItems: 'start',
          }}
          display={'flex'}
          flexDirection={'column'}
        >
          <Box>
            <Typography
              display={'flex'}
              alignItems={'center'}
              sx={{ color: 'gray', mb: 1 }}
            >
              <CalendarMonthIcon sx={{ mr: 1 }} />
              {article?.formattedDate}
            </Typography>
            <Highlight title={article?.title} search={search} />
            <div>
              <Highlight
                title={article?.summary.substring(0, 100)}
                search={search}
                description={true}
              />
            </div>
            {/*<Typography key={article.id} sx={{ minHeight:'72px', fontWeight:'400'}}>*/}
            {/*    {article?.summary.substring(0,100)}*/}
            {/*</Typography>*/}
          </Box>
          <Link
            to={`/article/${article.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="text"
              sx={{ color: 'gray' }}
              endIcon={<ArrowForwardIcon />}
            >
              Read more
            </Button>
          </Link>
        </Box>
      </Card>
    </Grid>
  );
};

export default ArticleCard;
