import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setGrade,
  setGenre,
  setPrice,
  setTotalCount,
  setDescription,
  setImage,
  resetForm,
} from "../../features/photoCardFormSlice";
import { PrimaryBtn } from "../../components/common/btn/primaryBtn";
import { DropdownInput } from "../../components/commons/dropdown_input/DropdownInput";
import {
  TextareaNormal,
  TextfieldNormal,
} from "../../components/common/input_normal/inputTextfield";
import { Title } from "../../components/common/title/Title";
import styles from "./index.module.css";
import { CreatePhotoCard } from "../../feature/create_photocard/photoCardAPI";

import backIcon from "./assets/back_icon.svg";

const CreatePhotoCardPage = () => {
  const dispatch = useDispatch();

  const { name, grade, genre, price, totalCount, description, image } =
    useSelector((state) => state.photoCardForm);

  const gradeOptions = ["COMMON", "RARE", "SUPER RARE", "LEGENDARY"];
  const genreOptions = ["풍경", "자연", "우주", "동물", "기타"];

  const mutation = useMutation(CreatePhotoCard, {
    onSuccess: () => {
      alert("포토카드가 성공적으로 생성되었습니다!");
      dispatch(resetForm()); // 폼 리셋
    },
    onError: (error) => {
      alert("포토카드 생성 중 오류가 발생했습니다.");
      console.error("Error:", error);
    },
  });

  const handleFileChange = (e) => {
    dispatch(setImage(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("grade", grade);
    formData.append("genre", genre);
    formData.append("purchasePrice", price);
    formData.append("totalCount", totalCount);
    formData.append("imageURL", image);
    formData.append("description", description);

    mutation.mutate(formData);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.titleContainer}>
            <img src={backIcon} alt="back" className={styles.backIcon} />
            <div className={styles.titleWrapper}>
              <Title title={"포토카드 생성"} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.photoCardName}>
              <TextfieldNormal
                inputHeight="60px"
                title={"포토카드 이름"}
                placeholder={"포토카드 이름을 입력해 주세요"}
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
              />
            </div>
            <div className={styles.grade}>
              <DropdownInput
                label={"등급"}
                placeholder={"등급을 선택해 주세요"}
                options={gradeOptions}
                value={grade}
                onChange={(e) => dispatch(setGrade(e.target.value))}
              />
            </div>
            <div className={styles.genre}>
              <DropdownInput
                label={"장르"}
                placeholder={"장르를 선택해 주세요"}
                options={genreOptions}
                value={genre}
                onChange={(e) => dispatch(setGenre(e.target.value))}
              />
            </div>
            <div className={styles.price}>
              <TextfieldNormal
                inputHeight="60px"
                title={"가격"}
                placeholder={"가격을 입력해 주세요"}
                value={price}
                onChange={(e) => dispatch(setPrice(e.target.value))}
              />
            </div>
            <div className={styles.totalVolume}>
              <TextfieldNormal
                inputHeight="60px"
                title={"총 발행량"}
                placeholder={"총 발행량을 입력해 주세요"}
                value={totalCount}
                onChange={(e) => dispatch(setTotalCount(e.target.value))}
              />
            </div>
            <div className={styles.photoUpload}>
              <div className={styles.textfieldWrapper}>
                <TextfieldNormal
                  inputHeight="60px"
                  title={"사진 업로드"}
                  placeholder={"사진 업로드"}
                />
              </div>
              <div className={styles.uploadButtonWrapper}>
                <input
                  type="file"
                  placeholder="사진 업로드"
                  className={styles.uploadButton}
                  onChange={handleFileChange}
                  accept="image/*" // 이미지 파일만 업로드 가능
                />
                파일 선택
              </div>
            </div>
            <div className={styles.photoCardDesc}>
              <TextareaNormal
                inputHeight="180px"
                title={"포토카드 설명"}
                placeholder={"카드 설명을 입력해주세요"}
                value={description}
                onChange={(e) => dispatch(setDescription(e.target.value))}
              />
            </div>
            <div className={styles.createButtonWrapper}>
              <PrimaryBtn
                text="생성하기"
                width={"100%"}
                height={"100%"}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreatePhotoCardPage;
