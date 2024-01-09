import * as S from './modal.styles'
import { Header } from '../../components/header/header'
import { useState } from 'react'
import {
  useEditPostMutation,
  useAddPostPictureMutation,
  useDeletePostPictureMutation,
} from '../../components/store/postsApi'
import { useEffect } from 'react'

export function EditModal({ isModal, data }) {
  const [postData, setPostData] = useState([
    { title: '' },
    { description: '' },
    { price: '' },
  ])
  const [uploadedPics, setUploadedPics] = useState([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [editPost] = useEditPostMutation()
  const [addPostPicture] = useAddPostPictureMutation()
  const [deletePostPicture] = useDeletePostPictureMutation()
  const [error, setError] = useState(null)

  useEffect(() => {
    setPostData([
      { title: data.title },
      { description: data.description },
      { price: data.price },
    ])
    setUploadedPics(
      data?.images?.map((item) => {
        return {
          src: `http://127.0.0.1:8090/${item.url}`,
          url: item.url,
        }
      }),
    )
  }, [data])

  console.log('postdata', postData)
  console.log('uploadedPics', uploadedPics)
  const toggleModal = () => {
    isModal((prev) => !prev)
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    console.log(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageUrl = reader.result
        setUploadedPics((prevUploadedPics) => [
          ...prevUploadedPics,
          { file: file, src: imageUrl },
        ])
      }
      reader.readAsDataURL(file)
    }
  }

  const removePic = async (indexValue) => {
    const response = await deletePostPicture({
      postId: data.id,
      file_url: uploadedPics[indexValue].url,
    })
    console.log(response)
    setUploadedPics((prevArray) =>
      prevArray.filter((_, index) => index !== indexValue),
    )
  }

  const handlePostAd = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (
      postData[0].title === '' ||
      postData[1].description === '' ||
      postData[2].price === ''
    ) {
      setError('Необходимо заполнить все поля перед отправкой')
      setLoading(false)
    } else {
      setError(null)
      const response = await editPost({
        postId: data?.id,
        body: {
          title: postData[0].title,
          description: postData[1].description,
          price: postData[2].price,
        },
      }).unwrap()
      console.log('first response: ', response)
      if (response.error) {
        setError('Произошла ошибка, попробуйте еще раз')
        setLoading(false)
      } else {
        console.log('sending pictures')
        console.log('responseID', response.id)

        uploadedPics.forEach(async (pic) => {
          if (pic.file) {
            const result = await addPostPicture({
              postId: data.id,
              image: pic.file,
            })
            console.log('secondResponse', result)
            console.error(result.error)
            if (result.error) {
              setError('Произошла ошибка, попробуйте еще раз')

              setLoading(false)
            } else {
              console.log('final')
              setUploadedPics([])
              setSuccess(true)
              setLoading(false)
            }
          } else {
            setSuccess(true)
            setLoading(false)
          }
        })
      }
    }
  }
  return (
    <S.ModalWrapper data-id="modal-wrapper" onClick={toggleModal}>
      <S.ModalBlock data-id="modal__block" onClick={(e) => e.stopPropagation()}>
        <S.HeaderWrapper data-id="header wrapper">
          <Header></Header>
        </S.HeaderWrapper>
        <S.Modal data-id="modal">
          <S.ModalContent data-id="modal-content">
            <S.MobCloseWrapper onClick={toggleModal}>
              <S.ModalCloseMob></S.ModalCloseMob>
              <S.Title data-id="title">Редактировать объявление</S.Title>
            </S.MobCloseWrapper>
            <S.ModalClose data-id="modalclose">
              <S.ModalCloseLine
                data-id="modalline"
                onClick={toggleModal}
              ></S.ModalCloseLine>
            </S.ModalClose>
            <S.ModalForm data-id="ModalForms" id="formNewArt" action="#">
              <S.ModalInput data-id="ModalInput">
                <S.Label htmlFor="name">Название</S.Label>
                <S.Input
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  value={postData[0].title}
                  onChange={(e) =>
                    setPostData((prevArray) => {
                      const newArray = [...prevArray]
                      newArray[0].title = e.target.value
                      return newArray
                    })
                  }
                />
              </S.ModalInput>
              <S.ModalInput data-id="ModalInput">
                <S.Label htmlFor="name">Описание</S.Label>
                <S.InputDescription
                  name="text"
                  rows="6"
                  cols="auto"
                  placeholder="Введите описание"
                  value={postData[1].description}
                  onChange={(e) =>
                    setPostData((prevArray) => {
                      const newArray = [...prevArray]
                      newArray[1].description = e.target.value
                      return newArray
                    })
                  }
                />
              </S.ModalInput>

              <S.ModalInput data-id="modal input">
                <S.InputText data-id="InputText">
                  Фотографии товара<span>не более 5 фотографий</span>
                </S.InputText>
                <S.ModalImageFlex data-id=" ModalImageFlex form-newArt__bar-img">
                  <S.ModalImage data-id="form-newArt__img">
                    {uploadedPics[0] && (
                      <>
                        {' '}
                        <img src={uploadedPics[0].src} alt="no" />{' '}
                        <S.DeletePic onClick={() => removePic(0)}></S.DeletePic>
                      </>
                    )}

                    <S.ModalImageCover
                      htmlFor="fileInput"
                      data-id="form-newArt__img-cover"
                    >
                      <S.InputPicture
                        type="file"
                        data-id="inputpicture"
                        id="fileInput"
                        onChange={(e) => handlePhotoChange(e)}
                      ></S.InputPicture>
                    </S.ModalImageCover>
                  </S.ModalImage>
                  <S.ModalImage data-id="form-newArt__img">
                    {uploadedPics[1] && (
                      <>
                        <img src={uploadedPics[1].src} alt="no" />{' '}
                        <S.DeletePic onClick={() => removePic(1)}></S.DeletePic>
                      </>
                    )}
                    <S.ModalImageCover
                      htmlFor="fileInput2"
                      data-id="form-newArt__img-cover"
                    >
                      <S.InputPicture
                        type="file"
                        data-id="inputpicture"
                        id="fileInput2"
                        onChange={(e) => handlePhotoChange(e)}
                      ></S.InputPicture>
                    </S.ModalImageCover>
                  </S.ModalImage>
                  <S.ModalImage data-id="form-newArt__img">
                    {uploadedPics[2] && (
                      <>
                        <img src={uploadedPics[2].src} alt="no" />{' '}
                        <S.DeletePic onClick={() => removePic(2)}></S.DeletePic>
                      </>
                    )}
                    <S.ModalImageCover
                      htmlFor="fileInput2"
                      data-id="form-newArt__img-cover"
                    >
                      <S.InputPicture
                        type="file"
                        data-id="inputpicture"
                        id="fileInput2"
                        onChange={(e) => handlePhotoChange(e)}
                      ></S.InputPicture>
                    </S.ModalImageCover>
                  </S.ModalImage>
                  <S.ModalImage data-id="form-newArt__img">
                    {uploadedPics[3] && (
                      <>
                        {' '}
                        <img src={uploadedPics[3].src} alt="no" />{' '}
                        <S.DeletePic onClick={() => removePic(3)}></S.DeletePic>
                      </>
                    )}
                    <S.ModalImageCover
                      htmlFor="fileInput2"
                      data-id="form-newArt__img-cover"
                    >
                      <S.InputPicture
                        type="file"
                        data-id="inputpicture"
                        id="fileInput2"
                        onChange={(e) => handlePhotoChange(e)}
                      ></S.InputPicture>
                    </S.ModalImageCover>
                  </S.ModalImage>
                  <S.ModalImage data-id="form-newArt__img">
                    {uploadedPics[4] && (
                      <>
                        {' '}
                        <img src={uploadedPics[4].src} alt="no" />{' '}
                        <S.DeletePic onClick={() => removePic(4)}></S.DeletePic>
                      </>
                    )}
                    <S.ModalImageCover
                      htmlFor="fileInput2"
                      data-id="form-newArt__img-cover"
                    >
                      <S.InputPicture
                        type="file"
                        data-id="inputpicture"
                        id="fileInput2"
                        onChange={(e) => handlePhotoChange(e)}
                      ></S.InputPicture>
                    </S.ModalImageCover>
                  </S.ModalImage>
                </S.ModalImageFlex>
              </S.ModalInput>
              <S.ModalPriceInput data-id="form-newArt__block PriceInput">
                <S.Label htmlFor="price">Цена</S.Label>
                <S.InputWrapper>
                  <S.InputPrice
                    data-id="form-newArt__input-price"
                    type="number"
                    name="price"
                    id="formName"
                    value={postData[2].price}
                    onChange={(e) =>
                      setPostData((prevArray) => {
                        const newArray = [...prevArray]
                        newArray[2].price = e.target.value
                        return newArray
                      })
                    }
                  />
                  <S.Price data-id="form-newArt__input-price-cover">₽</S.Price>
                </S.InputWrapper>
              </S.ModalPriceInput>
              {success && (
                <S.Success>Объявление успешно отредактировано</S.Success>
              )}
              {error && <S.Error data-id="WARNING">{error}</S.Error>}
              <S.ModalButton
                data-id="form-newArt__btn-pub btn-hov02"
                className="btn-hov02"
                id="btnPublish"
                disabled={loading ? true : false}
                onClick={handlePostAd}
              >
                {loading ? 'Загрузка' : 'Сохранить'}
              </S.ModalButton>
            </S.ModalForm>
          </S.ModalContent>
        </S.Modal>
      </S.ModalBlock>
    </S.ModalWrapper>
  )
}
