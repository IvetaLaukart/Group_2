import * as React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from './components/Header/Header'
import MainFeaturedPost from './components/Main/MainFeaturedPost'
import FeaturedPost from './FeaturedPost'
import Main from './components/Main/Main'
import Sidebar from './components/Main/Sidebar'
import Footer from './components/Footer/Footer'
import post1 from './blog-post.1.md'
import post2 from './blog-post.2.md'
import post3 from './blog-post.3.md'
import Head from './components/Head/Head'
import Contacts from './components/Contacts/Contacts'
import Detailpost from './components/Detailpost/Detailpost'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'

const sections = [
  { title: 'Природа', url: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg'},
  { title: 'Котики', url: '#' },
  { title: 'Еда', url: '#' },
  { title: 'Путешествия', url: '#' },
]

const mainFeaturedPost = {
  title: 'Приветствуем вас в нашем блоге...',
  description:
    ' Актуальные новости и обновления',
  image: 'https://source.unsplash.com/random',
  imageText: '',
}

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
]

const posts = [post1, post2, post3]

const sidebar = {
  title: 'О нас',
  description:
    'Наш блог является проектом группы 2 для корпоративного университета Сбербанка и представляет собой результат командной работы.',
  social: [
    { name: 'Github', icon: GitHubIcon},
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
}

const theme = createTheme()

function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <div className="container py-8">
            <BrowserRouter>
              <Head />
              <hr />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/posting" element={<Header />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/posts" element={<Main />} />
                <Route path="/posts/:postsId" element={<Detailpost />} />
                <Route path="/posts/:postsId" element={<Detail />} />
                <Route path="/form" element={<Form />} />
              </Routes>
            </BrowserRouter>
          </div>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title=""
        description=""
      />
    </ThemeProvider>
  )
}
export default Blog
