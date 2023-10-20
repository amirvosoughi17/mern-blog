import AddBlog from '../../components/blog/AddBlog'
import BlogList from '../../components/blog/BlogList'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="blogs">
        <AddBlog />
        <BlogList />
      </div>
    </div>
  )
}

export default Home