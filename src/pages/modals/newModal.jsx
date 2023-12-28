import * as S from "./modal.styles";
import { Header } from "../../components/header/header";
import { useState } from "react";
import {
  useAddNewPostMutation,
  useAddPostPictureMutation,
} from "../../components/store/postsApi";

export function Modal({ isNew, isModal }) {
  const [uploadedPics, setUploadedPics] = useState([]);
  const [nameAdv, setNameAdv] = useState("");
  const [postDescription, setDescription] = useState("");

  const [price, setPrice] = useState("");
  const [postId, setPostId] = useState(null);
  const [loading, setloading] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggleModal = () => {
    isModal((prev) => !prev);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setUploadedPics((prevUploadedPics) => [
          ...prevUploadedPics,
          { file: file, src: imageUrl },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePic = (indexValue) => {
    console.log(indexValue);
    setUploadedPics((prevArray) =>
      prevArray.filter((_, index) => index !== indexValue)
    );
  };

  const [addPost] = useAddNewPostMutation();
  const [addPostPicture] = useAddPostPictureMutation();
  const handlePostAd = async (e) => {
    e.preventDefault();
    setloading(true);
    const response = await addPost({
      title: nameAdv,
      description: postDescription,
      price: price,
    }).unwrap();
    console.log(response);
    if (response?.id) {
      setPostId(response.id);
      setNameAdv("");
      setDescription("");
      setPrice("");
    }
    uploadedPics.forEach(async (pic) => {
      const result = await addPostPicture({
        postId: postId,
        image: pic.file,
      });
      if (result?.id) {
        setSuccess(true);
      }
      console.log("RESULTAT", result);
    });
    setloading(false);
  };
  console.log(uploadedPics);
  return (
    <S.ModalWrapper data-id="modal-wrapper" onClick={toggleModal}>
      <S.ModalBlock data-id="modal__block" onClick={(e) => e.stopPropagation()}>
        <S.HeaderWrapper data-id="header wrapper">
          <Header></Header>
        </S.HeaderWrapper>
        <S.Modal data-id="modal">
          <S.ModalContent data-id="modal-content">
            <S.Title data-id="title">
              {isNew ? "Новое объявление" : "Редактировать объявление"}
            </S.Title>
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
                  onChange={(e) => setNameAdv(e.target.value)}
                />
              </S.ModalInput>
              <S.ModalInput data-id="ModalInput">
                <S.Label htmlFor="name">Описание</S.Label>
                <S.InputDescription
                  name="text"
                  rows="6"
                  cols="auto"
                  placeholder="Введите описание"
                  onChange={(e) => setDescription(e.target.value)}
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
                        {" "}
                        <img src={uploadedPics[0].src} alt="no" />{" "}
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
                        {" "}
                        <img src={uploadedPics[1].src} alt="no" />{" "}
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
                        {" "}
                        <img src={uploadedPics[2].src} alt="no" />{" "}
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
                        {" "}
                        <img src={uploadedPics[3].src} alt="no" />{" "}
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
                        {" "}
                        <img src={uploadedPics[4].src} alt="no" />{" "}
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
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <S.Price data-id="form-newArt__input-price-cover">₽</S.Price>
                </S.InputWrapper>
              </S.ModalPriceInput>

              <S.ModalButton
                data-id="form-newArt__btn-pub btn-hov02"
                className="btn-hov02"
                id="btnPublish"
                disabled={!!loading}
                onClick={handlePostAd}
              >
                {isNew ? "Опубликовать" : "Сохранить"}
              </S.ModalButton>
            </S.ModalForm>
          </S.ModalContent>
        </S.Modal>
      </S.ModalBlock>
    </S.ModalWrapper>
  );
}
