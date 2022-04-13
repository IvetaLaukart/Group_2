import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { newPost } from '../../redux/actionCreators/postAC'

import './style.css'

function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [img, setImg] = useState('')
  const [tag, setTag] = useState('')
  /* отлавливаем занчения инпута */
  const changeTitle = (e) => {
    setTitle(e.target.value)
  }
  const changeText = (e) => {
    setText(e.target.value)
  }
  const changeImg = (e) => {
    setImg(e.target.value)
  }
  const changeTag = (e) => {
    setTag(e.target.value)
  }
  /* отлавливаем значения формы */
  const submitHandler = (e) => {
    e.preventDefault()
    /* проверяем на пустые строки */
    const newTitle = title.trim()
    if (newTitle) {
      dispatch(newPost(title, text, img, tag))
      setTitle('')
      setText('')
      setImg('')
      setTag('')
      navigate('/posts')
    } else {
      alert('Введите заголовок!')
    }
  }



  return (
    <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label title"
        >
          Заголовок
        </label>
        <input
          onChange={changeTitle}
          type="text"
          className="form-control "
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={title}
        />
        <div id="emailHelp" className="form-text">Добавьте заголовок статьи</div>
      </div>
      <div className="mb-3">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Текс статьи</label>
          <textarea
            onChange={changeText}
            className="form-control pole"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
          />
        </div>

        <div id="emailHelp" className="form-text">Добавьте текст статьи</div>
      </div>
      <div
        className="mb-3"
      >
        <label
          htmlFor="exampleInputPassword1"
          className="form-label img"
        >
          Ссылка на изображение
        </label>
        <input
          onChange={changeImg}
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={img}
        />
        <div id="emailHelp" className="form-text">Добавьте ссылку на изображение</div>
      </div>
      <div
        className="mb-3"
      >
        <label
          htmlFor="exampleInputPassword1"
          className="form-label tag"
        >
          Укажите тег
        </label>
        <input
          onChange={changeTag}
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          value={tag}
        />
        <div id="emailHelp" className="form-text">Добавьте тег статьи</div>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Опубликовать
      </button>
    </form>
  )
}
export default Form
