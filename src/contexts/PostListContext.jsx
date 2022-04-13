import { createContext, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Main from '../components/Main/Main'
import { addPostQuery } from '../redux/actionCreators/postAC'

const PostListContext = createContext()
function PostListProvider() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addPostQuery())
  }, [dispatch]) // Поставила в массив dispach, должен быть пустым

  return (
    <Main />
  )
}
export default PostListProvider
const usePostContext = () => useContext(PostListContext)
export {
  usePostContext,
  PostListContext,
}
